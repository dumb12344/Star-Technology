// GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    
//     event.create('advanced_chemistry')
//         .category('highly_advanced')
//         .setEUIO('in')
//         .setMaxTooltips(4)
//         .setMaxIOSize(6, 6, 6, 6)
//         .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE , FillDirection.LEFT_TO_RIGHT)
//         .setSound(GTSoundEntries.CHEMICAL)
//         .enableSyntheticCategory();

// });

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('advanced_synthesis_plant', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['test_layered'])
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT_SUBTICK])
        .appearanceBlock(() => Block.getBlock('kubejs:peek_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('    FHHHF', '    TFOFT', '    T   T', '    T   T', '    T   T', '    FFFFF')
            .aisle('    HFFFH', '    F P F', '     FFF ', '     MMM ', '     FFF ', '    FEEEF')
            .aisle('    HFFFH', '    FPPPF', '     F F ', '     M M ', '     F F ', '    FEEEF')
            .aisle('    HFFFH', '    F P F', '     FFF ', '     MMM ', '     FFF ', '    FEEEF')
            .aisle('FHHHFFFFF', 'TFFFFPPPT', 'T   TFFFT', 'T   T   T', 'T   T   T', 'FFFFFFFFF')
            .aisle('HFFFFFFFH', 'F P P P F', ' FFFFFFF ', ' MMM     ', ' FFF     ', 'FEEEF   F')
            .aisle('HFFFFFFFH', 'IPPPPPPPF', ' F  FFFF ', ' M M     ', ' F F     ', 'FEEEF   F')
            .aisle('HFFFFFFFH', 'F P P P F', ' FFFFFFF ', ' MMM     ', ' FFF     ', 'FEEEF   F')
            .aisle('FHHHFHHHF', 'TF@FTFFFT', 'T   T   T', 'T   T   T', 'T   T   T', 'FFFFFFFFF')
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('F', Predicates.blocks('kubejs:peek_casing').setMinGlobalLimited(40)
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('E', Predicates.blocks(GTBlocks.CASING_EXTREME_ENGINE_INTAKE.get()))
            .where('H', Predicates.blocks(GCYMBlocks.HEAT_VENT.get()))     
            .where('M', Predicates.blocks(GCYMBlocks.MOLYBDENUM_DISILICIDE_COIL_BLOCK.get()))
            .where('P', Predicates.blocks(GTBlocks.CASING_POLYTETRAFLUOROETHYLENE_PIPE.get()))     
            .where('T', Predicates.blocks('gtceu:tungsten_frame'))
            .where(' ', Predicates.any())
            .where('O', Predicates.abilities(PartAbility.EXPORT_ITEMS)
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS)))
            .where('I', Predicates.abilities(PartAbility.IMPORT_FLUIDS)
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)))
            .build())
        .workableCasingModel('kubejs:block/casings/basic/machine_casing_peek',
            'gtceu:block/multiblock/large_chemical_reactor');
        
});