StartupEvents.registry('item', event => {

    // KOMARU Parts
    event.create('komaru_gravitational_stabilizers')
        .texture('kubejs:item/progression/riftic/komaru/gravitational_stabilizers');

    event.create('komaru_rift_caller')
        .texture('kubejs:item/progression/riftic/komaru/rift_caller');

    event.create('komaru_plating')
        .texture('kubejs:item/progression/riftic/komaru/plating');

    //Riftions
    ['up','down','neutral'].forEach(charge => {
        ['undina','sylvestris','gnomus','vulcanus','illustris','tenebrosus'].forEach(riftion => {
            //water, air, earth, fire, light, dark
            event.create(`${charge}_${riftion}_riftion`)
                .textureJson({ 
                    layer0: `kubejs:item/progression/riftic/riftion/${riftion}`,
                    layer1: `kubejs:item/progression/riftic/riftion/${riftion}_id`,
                    layer2: `kubejs:item/progression/riftic/riftion/${charge}`
                })
            .tooltip(Text.translate(`item.kubejs.${charge}_${riftion}_riftion.tooltip`));

        });
    });

    event.create(`wild_riftion`)
        .textureJson({ 
            layer0: 'kubejs:item/progression/riftic/riftion/wild',
            layer1: `kubejs:item/progression/riftic/riftion/wild_id`
        })
        .tooltip(Text.translate(`item.kubejs.wild_riftion.tooltip`));


});