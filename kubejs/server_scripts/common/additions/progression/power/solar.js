ServerEvents.recipes(event => {
    const id = global.id;
    const assembler = event.recipes.gtceu.assembler;
    const polarizer = event.recipes.gtceu.polarizer;

    const log = (text) => {
        console.log("-------------------------------");
        console.log(text);
        console.log("-------------------------------");
    };

    const getSmdDetails = (smdType) => {
        const count = (smdType == 'living_smd') ? 16 : (smdType == 'advanced_smd') ? 4 : 1;
        const recipeTier = (smdType == 'living_smd') ? 'ZPM' : (smdType == 'advanced_smd') ? 'IV' : 'HV';
        const prefix = (smdType == 'living_smd') ? 'kubejs:' : 'gtceu:';

        const smdDetails = {
            count: count,
            recipeTier: recipeTier,
            prefix: prefix
        }

        return smdDetails;
    }

    ['smd', 'advanced_smd', 'living_smd'].forEach(smdType => {
        const {
            count,
            recipeTier,
            prefix
        } = getSmdDetails(smdType);

        assembler(id(`ev_energy_core_from_${smdType}`))
            .itemInputs('3x gtceu:iron_foil', `2x ${prefix + smdType}_diode`, `2x ${prefix + smdType}_capacitor`)
            .inputFluids('gtceu:glass 288')
            .itemOutputs(`${count}x kubejs:ev_energy_core`)
            .duration(400)
            .EUt(GTValues.VHA[GTValues[recipeTier]]);

    });

    let recipe;
    let recipeTier;
    ['ev', 'iv', 'luv', 'zpm', 'uv', 'uhv'].forEach((tier, index, tiers) => {
        recipeTier = (tier == 'luv') ? 'LuV' : tier.toUpperCase();
        const {
            tierMaterial,
            cable,
            solder,
            superconductor
        } = global.componentMaterials[tier].materials;

        recipe = assembler(id(`${tier}_photovoltaic_cell`))

        if (tier != 'ev') {
            recipe.itemInputs(`kubejs:${tiers[index - 1]}_photovoltaic_cell`);
        }

        recipe
            .itemInputs(
                `gtceu:double_${tierMaterial}_plate`, `kubejs:${tier}_energy_core`, `16x gtceu:fine_${superconductor}_wire`, `2x #gtceu:circuits/${tier}` 
            )
            .inputFluids(`gtceu:${solder} 576`)
            .itemOutputs(`kubejs:${tier}_photovoltaic_cell`)
            .duration(400)
            .EUt(GTValues.VA[GTValues[recipeTier]]);
    });

});