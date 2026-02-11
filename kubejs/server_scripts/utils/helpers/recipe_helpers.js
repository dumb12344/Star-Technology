// priority: 1000

/**
 * https://github.com/GregTechCEu/GregTech-Modern/blob/v1.6.4-1.20.1/src/main/java/com/gregtechceu/gtceu/data/recipe/misc/RecyclingRecipes.java#L424
 * @param {string[]} itemOutputs
 * @returns {number}
 */
global.calculateRecyclingDuration = (itemOutputs) => {
  return (
    itemOutputs.reduce((duration, item) => {
      const is = Item.of(item);
      const ms = global.getGtMaterial(is);
      if (!ms) return duration;
      const matDuration = ms.amount() * ms.material().getMass() * is.getCount();
      return duration + matDuration;
    }, 0) / GTValues.M
  );
};

/**
 * https://github.com/GregTechCEu/GregTech-Modern/blob/v1.6.4-1.20.1/src/main/java/com/gregtechceu/gtceu/data/recipe/misc/RecyclingRecipes.java#L389
 * @param {string[]} itemOutputs
 * @returns {number}
 */
global.calculateRecyclingVoltageMultiplier = (itemOutputs) => {
  const highestTemp = itemOutputs.reduce((temp, item) => {
    const ms = global.getGtMaterial(item);
    if (!ms) return temp;

    let material = ms.material();

    if (
      material.hasFlag(GTMaterialFlags.IS_MAGNETIC) &&
      material.hasProperty(PropertyKey.INGOT)
    ) {
      material = material.getProperty(PropertyKey.INGOT).getSmeltingInto();
    }

    if (!material.hasProperty(PropertyKey.BLAST)) return temp;

    return Math.max(
      temp,
      material.getProperty(PropertyKey.BLAST).getBlastTemperature()
    );
  }, 0);

  if (highestTemp == 0) return 1;
  if (highestTemp < 2000) return 4;
  return 16;
};

// breaks components down into their base materials
global.getUHVPlusComponentTotal = (components) => {
  const componentRecycleCounts = global.UHVPlusComponentRecycleCounts;
  let totalCounts = {
    primCount: 0,
    cableCount: 0,
    secCount: 0,
    tertCount: 0
  }


  // adds all sent component ingredients together
  components.forEach(component => {
    switch (component) {
      case "sensor": {
        totalCounts.primCount += componentRecycleCounts.sensor.primCount;
        totalCounts.cableCount += componentRecycleCounts.sensor.cableCount;
        totalCounts.secCount += componentRecycleCounts.sensor.secCount;
        totalCounts.tertCount += componentRecycleCounts.sensor.tertCount;
        break;
      }
      case "emitter": {
        totalCounts.primCount += componentRecycleCounts.emitter.primCount;
        totalCounts.cableCount += componentRecycleCounts.emitter.cableCount;
        totalCounts.secCount += componentRecycleCounts.emitter.secCount;
        totalCounts.tertCount += componentRecycleCounts.emitter.tertCount;
        break;
      }
      case "field_generator": {
        totalCounts.primCount += componentRecycleCounts.field_generator.primCount;
        totalCounts.cableCount += componentRecycleCounts.field_generator.cableCount;
        totalCounts.secCount += componentRecycleCounts.field_generator.secCount;
        totalCounts.tertCount += componentRecycleCounts.field_generator.tertCount;
        break;
      }
      case "robot_arm": {
        totalCounts.primCount += componentRecycleCounts.robot_arm.primCount;
        totalCounts.cableCount += componentRecycleCounts.robot_arm.cableCount;
        totalCounts.secCount += componentRecycleCounts.robot_arm.secCount;
        totalCounts.tertCount += componentRecycleCounts.robot_arm.tertCount;
        break;
      }
      case "electric_piston": {
        totalCounts.primCount += componentRecycleCounts.electric_piston.primCount;
        totalCounts.cableCount += componentRecycleCounts.electric_piston.cableCount;
        totalCounts.secCount += componentRecycleCounts.electric_piston.secCount;
        totalCounts.tertCount += componentRecycleCounts.electric_piston.tertCount;
        break;
      }
      case "conveyor_module": {
        totalCounts.primCount += componentRecycleCounts.conveyor_module.primCount;
        totalCounts.cableCount += componentRecycleCounts.conveyor_module.cableCount;
        totalCounts.secCount += componentRecycleCounts.conveyor_module.secCount;
        totalCounts.tertCount += componentRecycleCounts.conveyor_module.tertCount;
        break;
      }
      case "fluid_regulator": {
        totalCounts.primCount += componentRecycleCounts.fluid_regulator.primCount;
        totalCounts.cableCount += componentRecycleCounts.fluid_regulator.cableCount;
        totalCounts.secCount += componentRecycleCounts.fluid_regulator.secCount;
        totalCounts.tertCount += componentRecycleCounts.fluid_regulator.tertCount;
        break;
      }
      case "electric_pump": {
        totalCounts.primCount += componentRecycleCounts.electric_pump.primCount;
        totalCounts.cableCount += componentRecycleCounts.electric_pump.cableCount;
        totalCounts.secCount += componentRecycleCounts.electric_pump.secCount;
        totalCounts.tertCount += componentRecycleCounts.electric_pump.tertCount;
        break;
      }
      case "electric_motor": {
        totalCounts.primCount += componentRecycleCounts.electric_motor.primCount;
        totalCounts.cableCount += componentRecycleCounts.electric_motor.cableCount;
        totalCounts.secCount += componentRecycleCounts.electric_motor.secCount;
        totalCounts.tertCount += componentRecycleCounts.electric_motor.tertCount;
        break;
      }
    }
  });
  
  return totalCounts;
}

// checks if input value is too big for one output slot, then breaks down into block form (built for component recycling) 
global.checkComponentCount = (tempTotals) => {
  const finalOutput = {
    blockBools: {
      primBlock: false,
      cableBlock: false,
      secBlock: false,
      tertBlock: false
    },
    totals: {
      primCount: 0,
      cableCount: 0,
      secCount: 0,
      tertCount: 0
    }
  }

  

  if (tempTotals.primCount > 64) {
    finalOutput.blockBools.primBlock = true; 
    finalOutput.totals.primCount = Math.floor(tempTotals.primCount / 9);
  }
  else {
    finalOutput.totals.primCount = tempTotals.primCount;
  }

  if (tempTotals.cableCount > 64) {
    finalOutput.blockBools.cableBlock = true; 
    finalOutput.totals.cableCount = Math.floor(tempTotals.cableCount / 9);
  }
  else {
    finalOutput.totals.cableCount = tempTotals.cableCount;
  }

  if (tempTotals.secCount > 64) {
    finalOutput.blockBools.secBlock = true; 
    finalOutput.totals.secCount = Math.floor(tempTotals.secCount / 9);
  }
  else {
    finalOutput.totals.secCount = tempTotals.secCount;
  }

  if (tempTotals.tertCount > 64) {
    finalOutput.blockBools.tertBlock = true; 
    finalOutput.totals.tertCount = Math.floor(tempTotals.tertCount / 9);
  }
  else {
    finalOutput.totals.tertCount = tempTotals.tertCount;
  }

  return finalOutput;
}

//gives ending parameters to the outputs dependent on whether the output is a block or not
global.getFinalRecycleOutputs = (outputs, tier, macBool, specialBool) => {
  let finalOutputs = [];
  let len = outputs.length - 1;
  const blockBools = [outputs[len-3], outputs[len-2], outputs[len-1], outputs[len]]; //gets the booleans out of the end of the outputs array
  
  //macerator
  if (macBool) {
      if (specialBool) {
          for (let x = 0; x < 5; x++) {
              if (outputs[x] == "gtceu:graphite_dust") {
                  finalOutputs[x] = outputs[x];
              }
              else if (outputs[x] != " ") {
                  finalOutputs[x] = `${outputs[x]}_dust`;
              }
          }
      }
      else {
          if (tier == "uhv") {   
              finalOutputs[0] = `${outputs[0]}_dust`;
              //adds end sig to every output
              for (let x = 1; x < len-3; x++) {
                  //if item is a block
                  if (blockBools[x-1]) {
                      finalOutputs[x] = `${outputs[x]}_dust_block`;
                  }
                  //if not
                  else {
                      finalOutputs[x] = `${outputs[x]}_dust`;
                  }
              }
          }
          else {
              for (let x = 0; x < len-3; x++) {
                  //if item is a block
                  if (blockBools[x]) {
                      finalOutputs[x] = `${outputs[x]}_dust_block`;
                  }
                  //if not
                  else {
                      finalOutputs[x] = `${outputs[x]}_dust`;
                  }
              }
          }
      }
  }
  //arc furnace
  else {
      if (specialBool) {
          //adds end sig to every output
          for (let x = 0; x < 5; x++) {
              //if single = arc furnace leave as is
              if (outputs[x] == "gtceu:graphite_dust" || outputs[x] == "7x gtceu:tiny_ash_dust") {
                  finalOutputs[x] = outputs[x];
              }
              //if not empty
              else if (outputs[x] != " ") {
                  finalOutputs[x] = `${outputs[x]}_ingot`;
              }
          }
      }
      else {
          if (tier == "uhv") {
              finalOutputs[0] = `${outputs[0]}_ingot`;
              //adds end sig to every output
              for (let x = 1; x < len-3; x++) {
                  //if item is a block
                  if (blockBools[x-1]) {
                      finalOutputs[x] = `${outputs[x]}_block`;
                  }
                  //if not
                  else {
                      finalOutputs[x] = `${outputs[x]}_ingot`;
                  }
              }
          }
          else {
              //adds end sig to every output
              for (let x = 0; x < len-3; x++) {
                  //if item is a block
                  if (blockBools[x]) {
                      finalOutputs[x] = `${outputs[x]}_block`;
                  }
                  //if not
                  else {
                      finalOutputs[x] = `${outputs[x]}_ingot`;
                  }
              }
          }
      }
  }

  return finalOutputs;
}  