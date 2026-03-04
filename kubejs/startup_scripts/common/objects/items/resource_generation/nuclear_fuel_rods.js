StartupEvents.registry('item', event => {

    const nuclearRod = (type,composition,depeleted_composition,boolsumption,consumption_effect) => {
        
        let activeRod = event.create(`${type}_fuel_rod`)
            .tooltip(Text.translate('item.kubejs.nuclear_rod_composition.tooltip'))
            .tooltip(composition)
            .texture(`kubejs:item/resource_gen/nuclear_rods/${type}`);

        if(boolsumption){
            activeRod.food(f => f.consumption_effect)
        }

        event.create(`depleted_${type}_fuel_rod`)
            .tooltip(Text.translate('item.kubejs.nuclear_rod_composition.tooltip'))
            .tooltip(/*'§k' + */depeleted_composition) //uncomment after done
            .texture(`kubejs:item/resource_gen/nuclear_rods/depleted_${type}`);

    }

    nuclearRod('thr','96% Th₂₃₀','96% U₂₃₅',false,'');

    nuclearRod('leu','96% U₂₃₈','72% Pu₂₄₄ | 24% Np₂₃₇',false,'');

    nuclearRod('heu','96% U₂₃₅','72% Pu₂₄₁ | 24% ?',true,''/*
        alwaysEdible().fastToEat().effect('minecraft:speed', 300, 1, 20).eaten(ctx => {
            event.server.scheduleInTicks(10 + Math.floor(Math.random() * 300), ctx => {
                event.server.runCommandSilent(`execute at ${event.player.username} run summon thermal:fire_tnt ${Math.floor(event.player.x)} ${Math.floor(event.player.y)} ${Math.floor(event.player.z)}`);
                event.server.runCommandSilent(`execute at ${event.player.username} run summon minecraft:tnt ${Math.floor(event.player.x)} ${Math.floor(event.player.y)} ${Math.floor(event.player.z)}`);
                event.player.potionEffects.add('minecraft:instant_damage', 1, 99);
            })
        })*/
    );

    nuclearRod('plu','96% Pu₂₄₄','48% Pu₂₃₉ | 24% Pu₂₄₁ | 24% Am₂₄₁',false,'');

    nuclearRod('mox239','48% U₂₃₈ | 48% Pu₂₃₉','48% Am₂₄₁ | 24% Pu₂₄₁ | 24% ?',false,'');

    nuclearRod('amr','96% Am₂₄₁','48% Cm₂₄₄ | 24% Pu₂₃₈ | 24% Np₂₃₇',false,'');

    nuclearRod('nep','96% Np₂₃₇','48% Pu₂₃₈ | 24% Pu₂₃₉ | 24% ?',false,'');

    nuclearRod('crm','96% Cm₂₄₄','48% Cf₂₅₂ | 48% Pu₂₃₉',false,'');

    nuclearRod('mox241','48% U₂₃₈ | 48% Pu₂₄₁','72% Pu₂₃₉ | 24% Am₂₄₁',false,'');

    nuclearRod('tpu','48% Th₂₃₀ | 48% Pu₂₃₉','72% U₂₃₃ | 24% Am₂₄₁',false,'');

    nuclearRod('mox238','72% Pu₂₃₈ | 24% Cf₂₅₂','72% Cm₂₄₄ | 24% Pu₂₃₉',false,'');

    nuclearRod('caf','96% Cf₂₅₂','48% Fm₂₅₇ | 48% Pu₂₄₁',false,'');

    nuclearRod('etu','48% Cm₂₄₄ | 24% Cf₂₅₂ | 24% Am₂₄₁','48% Pu₂₃₈ | 48% Es₂₅₃',false,'');

    nuclearRod('leu233','96% U₂₃₃','48% Pu₂₃₉ | 24% Cf₂₅₂ | 24% ?',false,'');

    nuclearRod('nqe','72% Nq₄₀₄ | 24% Es₂₅₃','72% Ec₄₀₄ | 24% ?',false,'');
    
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