GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('runic_circuitry_assembling_station')
        .category('gate_construction')
        .setEUIO('in')
        .setMaxIOSize(3, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_CIRCUIT , FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('runic_circuitry_assembling_station', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('runic_circuitry_assembling_station')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('kubejs:lumium_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('AB       BA', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ') 
            .aisle('BBCC   CCBB', ' CBB   BBC ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ') 
            .aisle(' C  C C  C ', ' BBBDDDBBB ', '  EB   BE  ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ') 
            .aisle(' C       C ', ' BBBDDDBBB ', '  BBFFFBB  ', '  BBC CBB  ', '           ', '           ', '           ', '           ', '           ', '  BBC CBB  ', '   BFFFB   ') 
            .aisle('  C     C  ', '  BADDDAB  ', '   DGHGD   ', '  CIBBBIC  ', '  BBIJIBB  ', '   CJJJC   ', '   CJJJC   ', '   CJJJC   ', '  BBIJIBB  ', '  BBBBBBB  ', '   BEIEB   ') 
            .aisle('           ', '  BADDDAB  ', '   DGHGD   ', '   DKKKD   ', '  BB   BB  ', '  BB   BB  ', '   B   B   ', '  BB   BB  ', '  BB   BB  ', '  EDKKKDE  ', '    BBB    ') 
            .aisle('           ', '  BIIIIIB  ', '   EHHHE   ', '   DKHKD   ', '  BE   EB  ', '  DI L ID  ', '  DE M ED  ', '  DI L ID  ', '  BE   EB  ', '  IDKHKDI  ', '    AAA    ') 
            .aisle('           ', '  BADDDAB  ', '   DGHGD   ', '   DKKKD   ', '  BB   BB  ', '  BB   BB  ', '   B   B   ', '  BB   BB  ', '  BB   BB  ', '  EDKKKDE  ', '    BBB    ') 
            .aisle('  C     C  ', '  BADDDAB  ', '   DGHGD   ', '  CIBBBIC  ', '  BBIJIBB  ', '   CJJJC   ', '   CJJJC   ', '   CJJJC   ', '  BBIJIBB  ', '  BBBBBBB  ', '   BEIEB   ') 
            .aisle(' C       C ', ' BBBDDDBBB ', '  BBFFFBB  ', '  BBC CBB  ', '           ', '           ', '           ', '           ', '           ', '  BBC CBB  ', '   BFFFB   ') 
            .aisle(' C  C C  C ', ' BBBD@DBBB ', '  EB   BE  ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ') 
            .aisle('BBCC   CCBB', ' CBB   BBC ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ') 
            .aisle('AB       BA', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ') 
            .where('A', Predicates.blocks('kubejs:enriched_naquadah_heat_escape_casing'))
            .where('B', Predicates.blocks('kubejs:enriched_naquadah_machine_casing'))
            .where(' ', Predicates.any())
            .where('C', Predicates.blocks('gtceu:trinaquadalloy_frame'))
            .where('D', Predicates.blocks('kubejs:lumium_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(0)))
            .where('E', Predicates.blocks('kubejs:enriched_naquadah_engine_intake_casing'))
            .where('F', Predicates.blocks('kubejs:enriched_naquadah_firebox_casing'))
            .where('G', Predicates.blocks('gtceu:advanced_computer_casing'))
            .where('H', Predicates.blocks('gtceu:high_power_casing'))
            .where('I', Predicates.blocks('kubejs:enriched_naquadah_pipe_casing'))
            .where('J', Predicates.blocks('gtceu:fusion_glass'))
            .where('K', Predicates.blocks('gtceu:assembly_line_grating'))
            .where('L', Predicates.blocks('thermal_extra:dragonsteel_glass'))
            .where('M', Predicates.blocks('gtceu:fusion_coil'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel('kubejs:block/casings/superconductors/casing_lumium',
            'gtceu:block/multiblock/laser_engraver');
            
});