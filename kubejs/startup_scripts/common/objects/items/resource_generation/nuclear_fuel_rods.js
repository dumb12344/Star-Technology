StartupEvents.registry('item', event => {

    const nuclearRod = (type,tier,composition,depeleted_composition,boolsumption) => {
        
        let activeRod = event.create(`${type}_fuel_rod`)
            .tooltip(Text.translate('item.kubejs.nuclear_rod_composition.tooltip'))
            .tooltip(composition)
            .textureJson({ 
                layer0: `kubejs:item/resource_gen/nuclear_rods/${type}`,
                layer1: `kubejs:item/resource_gen/nuclear_rods/enriched`
            });

        if(boolsumption){
            activeRod.tooltip(Text.translate('item.kubejs.consume.tooltip')).food(f => {f
                .effect('kubejs:uranium_fever', 400, 0, 1)
                .effect('kubejs:radiation_poisoning', 300, 0, 1)
                .alwaysEdible()
            });
        }

        event.create(`depleted_${type}_fuel_rod`)
            .tooltip(Text.translate('item.kubejs.nuclear_rod_composition.tooltip'))
            .tooltip('§k' + depeleted_composition)
            .textureJson({ 
                layer0: `kubejs:item/resource_gen/nuclear_rods/dep_${type}`,
                layer1: `kubejs:item/resource_gen/nuclear_rods/depleted`
            });

    }

    nuclearRod('thr','ev','96% §eTh²³⁰','96% §eU²³⁵',false);

    nuclearRod('leu238','ev','96% §eU²³⁸','72% §ePu²⁴⁴ §7|§f 24% §eNp²³⁷',false);

    nuclearRod('heu','iv','96% §eU²³⁵','72% §ePu²⁴¹ §7|§f 24% §e?',true);

    nuclearRod('plu','iv','96% §ePu²⁴⁴','48% §ePu²³⁹ §7|§f 24% §ePu²⁴¹ §7|§f 24% §eAm²⁴¹',false);

    nuclearRod('mox239','iv','48% §eU²³⁸ §7|§f 48% §ePu²³⁹','48% §eAm²⁴¹ §7|§f 24% §ePu²⁴¹ §7|§f 24% §e?',false);

    nuclearRod('amr','luv','96% §eAm²⁴¹','48% §eCm²⁴⁴ §7|§f 24% §ePu²³⁸ §7|§f 24% §eNp²³⁷',false);

    nuclearRod('nep','luv','96% §eNp²³⁷','48% §ePu²³⁸ §7|§f 24% §ePu²³⁹ §7|§f 24% §e?',false);

    nuclearRod('crm','zpm','96% §eCm²⁴⁴','48% §eCf²⁵² §7|§f 48% §ePu²³⁹',false);

    nuclearRod('mox241','zpm','48% §eU²³⁸ §7|§r48%  §ePu²⁴¹','72% §ePu²³⁹ §7|§f 24% §eAm²⁴¹',false);

    nuclearRod('tpu','zpm','48% §eTh²³⁰ §7|§f 48% §ePu²³⁹','72% §eU²³³ §7|§f 24% §eAm²⁴¹',false);

    nuclearRod('mox238','zpm','72% §ePu²³⁸ §7|§f 24% §eCf²⁵²','72% §eCm²⁴⁴ §7|§f 24% §ePu²³⁹',false);

    nuclearRod('caf','uv','96% §eCf²⁵²','48% §eFm²⁵⁷ §7|§f 48% §ePu²⁴¹',false);

    nuclearRod('etu','uv','48% §eCm²⁴⁴ §7|§f 24% §eCf²⁵² §7|§f 24% §eAm²⁴¹','48% §ePu²³⁸ §7|§f 48% §eEs²⁵³',false);

    nuclearRod('leu233','uv','96% §eU²³³','48% Pu²³⁹ §7|§f 24% §eCf²⁵² §7|§f 24% §e?',false);

    nuclearRod('nqe','uhv','72% §eNq⁴⁰⁴ §7|§f 24% §eEs²⁵³','72% §eEc⁴⁰⁴ §7|§f 24% §e?',false);
    
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

});