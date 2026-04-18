ServerEvents.recipes (event => {

    const id = global.id;
    
    event.recipes.gtceu.reflector_fusion_reactor(id(`riftion_plasma_from_riftion_extract_and_neutronium`))
        .inputFluids(`gtceu:riftion_extract`, `gtceu:neutronium`)
        .outputFluids(`gtceu:riftion_plasma`)
        .duration(800)
        .fusionStartEU(1500000000)
        .addData("reflector_tier", 7)
        .EUt(GTValues.VHA[GTValues.UIV]);

    event.recipes.gtceu.riftion_accelerator(id('riftion_scattering'))
        .inputFluids(`gtceu:riftion_plasma`)
        .itemOutputsRanged('kubejs:up_undina_riftion', 0, 32)
        .itemOutputsRanged('kubejs:down_undina_riftion', 0, 32)
        .itemOutputsRanged('kubejs:up_sylvestris_riftion', 0, 32)
        .itemOutputsRanged('kubejs:down_sylvestris_riftion', 0, 32)
        .itemOutputsRanged('kubejs:up_gnomus_riftion', 0, 32)
        .itemOutputsRanged('kubejs:down_gnomus_riftion', 0, 32)
        .itemOutputsRanged('kubejs:up_vulcanus_riftion', 0, 32)
        .itemOutputsRanged('kubejs:down_vulcanus_riftion', 0, 32)
        .itemOutputsRanged('kubejs:up_illustris_riftion', 0, 32)
        .itemOutputsRanged('kubejs:down_illustris_riftion', 0, 32)
        .itemOutputsRanged('kubejs:up_tenebrosus_riftion', 0, 32)
        .itemOutputsRanged('kubejs:down_tenebrosus_riftion', 0, 32)
        .CWUt(500)
        .totalCWU(1000000)
        .EUt(GTValues.VHA[GTValues.UXV]);

    ['undina','sylvestris','gnomus','vulcanus','illustris','tenebrosus'].forEach(riftion => {

        event.recipes.gtceu.riftion_slammer(id(riftion + '_stabilization'))
            .itemInputs(`16x kubejs:up_${riftion}_riftion`,`16x kubejs:down_${riftion}_riftion`)
            .itemOutputsRanged(`kubejs:neutral_${riftion}_riftion`, 0, 32)
            .itemOutputsRanged(`kubejs:wild_riftion`, 0, 32)
            .duration(10)
            .EUt(1);

    });

    let upRiftion = ['undina','sylvestris','gnomus','vulcanus','illustris','tenebrosus'];
    let downRiftion = ['tenebrosus','undina','sylvestris','gnomus','vulcanus','illustris'];

    for(let i = 0; i <=5; i++) {

        event.recipes.gtceu.riftion_slammer(id(upRiftion[i] + '_flipping_down'))
            .itemInputs(`16x kubejs:up_${upRiftion[i]}_riftion`,`16x kubejs:wild_riftion`)
            .itemOutputsRanged(`kubejs:down_${downRiftion[i]}_riftion`, 0, 32)
            .itemOutputsRanged(`kubejs:wild_riftion`, 0, 32)
            .duration(10)
            .EUt(1);       

        event.recipes.gtceu.riftion_slammer(id(downRiftion[i] + '_flipping_up'))
            .itemInputs(`16x kubejs:down_${downRiftion[i]}_riftion`,`16x kubejs:wild_riftion`)
            .itemOutputsRanged(`kubejs:up_${upRiftion[i]}_riftion`, 0, 32)
            .itemOutputsRanged(`kubejs:wild_riftion`, 0, 32)
            .duration(10)
            .EUt(1);

    }

    event.recipes.gtceu.kaledoscopic_fractalizer(id('riftion_fractalization'))
        .inputFluids('gtceu:true_rimula_foundation')
        .itemInputs('16x kubejs:neutral_undina_riftion','16x kubejs:neutral_sylvestris_riftion','16x kubejs:neutral_gnomus_riftion',
            '16x kubejs:neutral_vulcanus_riftion','16x kubejs:neutral_illustris_riftion','16x kubejs:neutral_tenebrosus_riftion')
        .outputFluids('gtceu:primordial_extract','gtceu:condensed_rimula','gtceu:faetic_extract')
        .duration(10)
        .EUt(1);

    event.recipes.gtceu.cyclonic_sifter(id('highly_unstable_rift_source'))
        // .chancedInput('1x kubejs:netherite_reinforced_mesh', 300, -20)
        .inputFluids('gtceu:highly_unstable_rift_source')
        .outputFluids('gtceu:destabilized_rift_source')
        // .itemOutputs('gtceu:abydos_magma_slag_dust')
        .duration(10)
        .EUt(1);
    
    event.recipes.gtceu.injection_mixer(id('accension_rift_slurry'))
        .inputFluids('gtceu:destabilized_rift_source','gtceu:borealic_concentrate')
        .outputFluids('gtceu:accension_rift_slurry')
        .duration(10)
        .EUt(1);
    
    event.recipes.gtceu.injection_mixer(id('abyssal_rift_slurry'))
        .inputFluids('gtceu:destabilized_rift_source','gtceu:abyssal_alloy')
        .outputFluids('gtceu:abyssal_rift_slurry')
        .duration(10)
        .EUt(1);

    event.recipes.gtceu.pressure_heat_chamber(id('rimula_t_foundation'))
        .inputFluids('gtceu:accension_rift_slurry')
        .outputFluids('gtceu:rimula_t_foundation')
        .duration(10)
        .EUt(1);


    event.recipes.gtceu.pressure_heat_chamber(id('rimula_s_foundation'))
        .inputFluids('gtceu:abyssal_rift_slurry')
        .outputFluids('gtceu:rimula_s_foundation')
        .duration(10)
        .EUt(1);

});