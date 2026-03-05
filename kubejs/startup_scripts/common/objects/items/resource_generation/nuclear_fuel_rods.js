StartupEvents.registry('item', event => {

    const nuclearRod = (type,tier,composition,depeleted_composition,boolsumption,effect) => {
        
        let activeRod = event.create(`${type}_fuel_rod`)
            .tooltip(Text.translate('item.kubejs.nuclear_rod_composition.tooltip'))
            .tooltip(composition)
            .textureJson({ 
                layer0: `kubejs:item/resource_gen/nuclear_rods/${type}`,
                layer1: `kubejs:item/resource_gen/nuclear_rods/overlay`,
                layer1: `kubejs:item/resource_gen/nuclear_rods/enriched`
            });

        if(boolsumption){
            activeRod.food(f => f.effect)
        }

        event.create(`depleted_${type}_fuel_rod`)
            .tooltip(Text.translate('item.kubejs.nuclear_rod_composition.tooltip'))
            .tooltip(/*'§k' + */depeleted_composition) //uncomment after done
            .textureJson({ 
                layer0: `kubejs:item/resource_gen/nuclear_rods/dep_${type}`,
                layer1: `kubejs:item/resource_gen/nuclear_rods/overlay`,
                layer1: `kubejs:item/resource_gen/nuclear_rods/depleted`
            });

    }

    nuclearRod('thr','ev','96% Th²³⁰','96% U²³⁵',false,'');

    nuclearRod('leu238','ev','96% U²³⁸','72% Pu²⁴⁴ | 24% Np²³⁷',false,'');

    nuclearRod('heu','iv','96% U²³⁵','72% Pu²⁴¹ | 24% ?',false,'');

    nuclearRod('plu','iv','96% Pu²⁴⁴','48% Pu²³⁹ | 24% Pu²⁴¹ | 24% Am²⁴¹',false,'');

    nuclearRod('mox239','iv','48% U²³⁸ | 48% Pu²³⁹','48% Am²⁴¹ | 24% Pu²⁴¹ | 24% ?',false,'');

    nuclearRod('amr','luv','96% Am²⁴¹','48% Cm²⁴⁴ | 24% Pu²³⁸ | 24% Np²³⁷',false,'');

    nuclearRod('nep','luv','96% Np²³⁷','48% Pu²³⁸ | 24% Pu²³⁹ | 24% ?',false,'');

    nuclearRod('crm','zpm','96% Cm²⁴⁴','48% Cf²⁵² | 48% Pu²³⁹',false,'');

    nuclearRod('mox241','zpm','48% U²³⁸ | 48% Pu²⁴¹','72% Pu²³⁹ | 24% Am²⁴¹',false,'');

    nuclearRod('tpu','zpm','48% Th²³⁰ | 48% Pu²³⁹','72% U²³³ | 24% Am²⁴¹',false,'');

    nuclearRod('mox238','zpm','72% Pu²³⁸ | 24% Cf²⁵²','72% Cm²⁴⁴ | 24% Pu²³⁹',false,'');

    nuclearRod('caf','uv','96% Cf²⁵²','48% Fm²⁵⁷ | 48% Pu²⁴¹',false,'');

    nuclearRod('etu','uv','48% Cm²⁴⁴ | 24% Cf²⁵² | 24% Am²⁴¹','48% Pu²³⁸ | 48% Es²⁵³',false,'');

    nuclearRod('leu233','uv','96% U²³³','48% Pu²³⁹ | 24% Cf²⁵² | 24% ?',false,'');

    nuclearRod('nqe','uhv','72% Nq⁴⁰⁴ | 24% Es²⁵³','72% Ec⁴⁰⁴ | 24% ?',false,'');
    
    //Th²³⁰ - thorium
    //U²³³ - uranium_233
    //U²³⁵ - uranium_235
    //U²³⁸ - uranium
    //Np²³⁷ - neptunium
    //Pu²³⁸ - plutonium_238
    //Pu²³⁹ - plutonium
    //Pu²⁴¹ - plutonium_241
    //Pu²⁴⁴ - plutonium_244
    //Am²⁴¹ - americium_241
    //Cm²⁴⁴ - curium_244
    //Cf²⁵² - californium_252
    //Es²⁵³ - einsteinium_253
    //Fm²⁵⁷ - fermium
    //Nq⁴⁰⁴ - purified_naquadah
    //Ec⁴⁰⁴ - echo   
    
    // event.create('thorium_fuel_rod')
    //     .texture('kubejs:item/resource_gen/nuclear_rods/thorium_fuel_rod');

    // event.create('highly_enriched_uranium_fuel_rod')
    //     .tooltip(Text.translate('item.kubejs.highly_enriched_uranium_fuel_rod.tooltip'))
    //     .texture('kubejs:item/resource_gen/nuclear_rods/high_enriched_uranium_fuel_rod');

    // event.create('low_enriched_uranium_fuel_rod')
    //     .texture('kubejs:item/resource_gen/nuclear_rods/low_enriched_uranium_fuel_rod');

    // event.create('depleted_thorium_fuel_rod')
    //     .texture('kubejs:item/resource_gen/nuclear_rods/depleted_thorium_fuel_rod');

    // event.create('depleted_highly_enriched_uranium_fuel_rod')
    //     .tooltip(Text.translate('item.kubejs.depleted_highly_enriched_uranium_fuel_rod.tooltip'))
    //     .texture('kubejs:item/resource_gen/nuclear_rods/depleted_high_enriched_uranium_rod');

    // event.create('depleted_low_enriched_uranium_fuel_rod')
    //     .texture('kubejs:item/resource_gen/nuclear_rods/depleted_low_enriched_uranium_rod');

});