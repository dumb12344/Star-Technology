StartupEvents.registry('item', event => {

    const nuclearRod = (type,tier,composition,depeleted_composition,boolsumption,effect) => {
        
        let activeRod = event.create(`${type}_fuel_rod`)
            .tooltip(Text.translate('item.kubejs.nuclear_rod_composition.tooltip'))
            .tooltip(composition)
            .textureJson({ 
                layer0: `kubejs:item/resource_gen/nuclear_rods/${type}`,
                layer1: `kubejs:item/resource_gen/nuclear_rods/${tier}`
            });

        if(boolsumption){
            activeRod.food(f => f.effect)
        }

        event.create(`depleted_${type}_fuel_rod`)
            .tooltip(Text.translate('item.kubejs.nuclear_rod_composition.tooltip'))
            .tooltip(/*'§k' + */depeleted_composition) //uncomment after done
            .textureJson({ 
                layer0: `kubejs:item/resource_gen/nuclear_rods/dep_${type}`,
                layer1: `kubejs:item/resource_gen/nuclear_rods/${tier}`
            });

    }

    nuclearRod('thr','ev','96% Th₂₃₀','96% U₂₃₅',false,'');

    nuclearRod('leu238','ev','96% U₂₃₈','72% Pu₂₄₄ | 24% Np₂₃₇',false,'');

    nuclearRod('heu','iv','96% U₂₃₅','72% Pu₂₄₁ | 24% ?',false,'');

    nuclearRod('plu','iv','96% Pu₂₄₄','48% Pu₂₃₉ | 24% Pu₂₄₁ | 24% Am₂₄₁',false,'');

    nuclearRod('mox239','iv','48% U₂₃₈ | 48% Pu₂₃₉','48% Am₂₄₁ | 24% Pu₂₄₁ | 24% ?',false,'');

    nuclearRod('amr','luv','96% Am₂₄₁','48% Cm₂₄₄ | 24% Pu₂₃₈ | 24% Np₂₃₇',false,'');

    nuclearRod('nep','luv','96% Np₂₃₇','48% Pu₂₃₈ | 24% Pu₂₃₉ | 24% ?',false,'');

    nuclearRod('crm','zpm','96% Cm₂₄₄','48% Cf₂₅₂ | 48% Pu₂₃₉',false,'');

    nuclearRod('mox241','zpm','48% U₂₃₈ | 48% Pu₂₄₁','72% Pu₂₃₉ | 24% Am₂₄₁',false,'');

    nuclearRod('tpu','zpm','48% Th₂₃₀ | 48% Pu₂₃₉','72% U₂₃₃ | 24% Am₂₄₁',false,'');

    nuclearRod('mox238','zpm','72% Pu₂₃₈ | 24% Cf₂₅₂','72% Cm₂₄₄ | 24% Pu₂₃₉',false,'');

    nuclearRod('caf','uv','96% Cf₂₅₂','48% Fm₂₅₇ | 48% Pu₂₄₁',false,'');

    nuclearRod('etu','uv','48% Cm₂₄₄ | 24% Cf₂₅₂ | 24% Am₂₄₁','48% Pu₂₃₈ | 48% Es₂₅₃',false,'');

    nuclearRod('leu233','uv','96% U₂₃₃','48% Pu₂₃₉ | 24% Cf₂₅₂ | 24% ?',false,'');

    nuclearRod('nqe','uhv','72% Nq₄₀₄ | 24% Es₂₅₃','72% Ec₄₀₄ | 24% ?',false,'');
    
    //Th₂₃₀ - thorium
    //U₂₃₃ - uranium_233
    //U₂₃₅ - uranium_235
    //U₂₃₈ - uranium
    //Np₂₃₇ - neptunium
    //Pu₂₃₈ - plutonium_238
    //Pu₂₃₉ - plutonium
    //Pu₂₄₁ - plutonium_241
    //Pu₂₄₄ - plutonium_244
    //Am₂₄₁ - americium_241
    //Cm₂₄₄ - curium_244
    //Cf₂₅₂ - californium_252
    //Es₂₅₃ - einsteinium_253
    //Fm₂₅₇ - fermium
    //Nq₄₀₄ - purified_naquadah
    //Ec₄₀₄ - echo   
    
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