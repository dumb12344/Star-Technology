// priority: -100

(() => {
  /**
   * @param {"multiblock"} kind
   */
  function getGregtechMachines(kind) {
    let $MultiblockMachineDefinition = Java.loadClass(
      "com.gregtechceu.gtceu.api.machine.MultiblockMachineDefinition"
    );

    let isInstance = (clz, obj) => clz.__javaObject__.isInstance(obj);

    let result = [];
    if (kind === "multiblock") {
      for (let def of GTRegistries.MACHINES) {
        if (isInstance($MultiblockMachineDefinition, def)) {
          result.push(def.block.idLocation);
        }
      }
    }

    return result;
  }

  Ponder.tags((event) => {
    event.createTag(
      "kubejs:gtceu",
      "gtceu:electric_blast_furnace",
      "GregTech Multiblocks",
      "Informations on how to use GregTech Multiblocks",
      getGregtechMachines("multiblock")
    );
  });

  Ponder.registry((event) => {
    event
      .create([
        "sgjourney:classic_stargate_base_block",
        "sgjourney:classic_stargate_chevron_block",
        "sgjourney:classic_stargate_ring_block",
        "sgjourney:crystal_interface",
        "sgjourney:classic_dhd",
      ])
      .scene(
        "classic_stargate",
        "Classic Stargate",
        ponderScenes["classic_stargate"]
      );

    event
      .create(getGregtechMachines("multiblock"))
      .scene(
        "multiblock_introduction",
        "Multiblock Introduction",
        ponderScenes["multiblock_introduction"]
      )
      .scene(
        "multiblock_construction",
        "Multiblock Construction",
        ponderScenes["multiblock_construction"]
      )
      .scene(
        "multiblock_wallsharing",
        "Multiblock Wall Sharing",
        ponderScenes["multiblock_wallsharing"]
      );
  });
})();
