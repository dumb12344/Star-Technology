global.not_hardmode(() => {
    ServerEvents.recipes(event => {
        const TIERS = [
            'uhv'
        ];

        const arcRecipe = (tier) => {
            const id = global.id;
            const calculateDuration = global.calculateRecyclingDuration;
            const casingMaterial = global.componentMaterials[tier].materials.tierMaterial;
            const pipeMaterial = global.componentMaterials[tier].materials.pipeMaterial;
            const outputs = [`8x gtceu:${casingMaterial}_ingot`, `6x gtceu:${pipeMaterial}_ingot`];
            const prefix = (tier == 'uhv') ? 'gtceu:' : 'kubejs:';

            event.recipes.gtceu.arc_furnace(id(`arc_${tier}_hermetic_casing`))
                .itemInputs(`${prefix + tier}_hermetic_casing`)
                .itemOutputs(outputs)
                .duration(calculateDuration(outputs))
                .EUt(GTValues.VA[GTValues.LV])
                .category(GTRecipeCategories.ARC_FURNACE_RECYCLING);
        }

        const macRecipe = (tier) => {
            const id = global.id;
            const calculateDuration = global.calculateRecyclingDuration;
            const calculateVoltageMultiplier = global.calculateRecyclingVoltageMultiplier;
            const casingMaterial = global.componentMaterials[tier].materials.tierMaterial;
            const pipeMaterial = global.componentMaterials[tier].materials.pipeMaterial;
            const outputs = [`8x gtceu:${casingMaterial}_dust`, `6x gtceu:${pipeMaterial}_dust`];
            const prefix = (tier == 'uhv') ? 'gtceu:' : 'kubejs:';

            event.recipes.gtceu.macerator(id(`macerate${tier}_hermetic_casing`))
                .itemInputs(`${prefix + tier}_hermetic_casing`)
                .itemOutputs(outputs)
                .duration(calculateDuration(outputs))
                .EUt(2 * calculateVoltageMultiplier(outputs))
                .category(GTRecipeCategories.MACERATOR_RECYCLING);
        }

        TIERS.forEach(tier => {
            arcRecipe(tier);
            macRecipe(tier);
        });
    })
})