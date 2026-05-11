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

  let gtMachines = getGregtechMachines("multiblock");
  let stargateBlocks = [
    "sgjourney:classic_stargate",
    "sgjourney:classic_stargate_base_block",
    "sgjourney:classic_stargate_chevron_block",
    "sgjourney:classic_stargate_ring_block",
    "sgjourney:crystal_interface",
    "sgjourney:classic_dhd",
  ];

  Ponder.tags((event) => {
    event.createTag(
      "kubejs:gtceu",
      "gtceu:electric_blast_furnace",
      "GregTech Multiblocks",
      "Informations on how to use GregTech Multiblocks",
      gtMachines
    );

    event.createTag(
      "kubejs:stargate",
      "Stargate Travel",
      "Informations on how to use the Stargates of this modpack",
      stargateBlocks
    );
  });

  Ponder.registry((event) => {
    event
      .create(stargateBlocks)
      .scene(
        "classic_stargate",
        "Classic Stargate",
        ponderScenes["classic_stargate"]
      );

    event
      .create(gtMachines)
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
