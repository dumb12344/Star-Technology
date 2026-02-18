global.not_hardmode(() => {
    ServerEvents.recipes(event => {
        const FUSIONCOILS = [
            "auxiliary_fusion_coil_mk1", "auxiliary_fusion_coil_mk2"
        ];
        const FUSIONCOILDETAILS = {
            auxiliary_fusion_coil_mk1: {
                components: ["field_generator", "field_generator", "field_generator", "field_generator", "electric_pump", "electric_pump"],
                tierComponent: "zpm",
                plateMaterial: "gtceu:zircalloy_4"
            },
            auxiliary_fusion_coil_mk2: {
                components: ["field_generator", "field_generator", "field_generator", "field_generator", "electric_pump", "electric_pump"],
                tierComponent: "uhv",
                plateMaterial: "gtceu:abyssal_alloy"
            }
        };

        event.remove({ input: "gtceu:fusion_coil", type: "gtceu:macerator" });
        event.remove({ input: "gtceu:fusion_coil", type: "gtceu:arc_furnace" });

        function getFusionCoilRecycleOutputs(coil) {
            let finalOutputs = [];
            const checkComponentCount = global.checkComponentCount;
            const componentRecycleMaterials = global.componentRecycleMaterials;
            if (!FUSIONCOILDETAILS[coil]) return;
            const {
                components,
                tierComponent,
                plateMaterial
            } = FUSIONCOILDETAILS[coil];
            finalOutputs[0] = (`8x ${plateMaterial}`);

            if (tierComponent == "uhv" || tierComponent == "uev" || tierComponent == "uiv") {    
                const getUHVPlusComponentTotal = global.getUHVPlusComponentTotal;

                if (!componentRecycleMaterials[tierComponent]) return;
                const {
                    primMaterial,
                    cableMaterial,
                    secMaterial,
                    tertMaterial
                } = componentRecycleMaterials[tierComponent];

                const tempOutputs = checkComponentCount(getUHVPlusComponentTotal(components), true);

                if (!tempOutputs) return;
                const {
                    blockBools: {
                        primBlock,
                        cableBlock,
                        secBlock,
                        tertBlock
                    },
                    totals: {
                        primCount,
                        cableCount,
                        secCount,
                        tertCount
                    }
                } = tempOutputs;

                let position = 1;
                if (primCount != 0) {finalOutputs[position] = `${primCount}x ${primMaterial}`; position++;}
                if (cableCount != 0) {finalOutputs[position] = `${cableCount}x ${cableMaterial}`; position++;}
                if (secCount != 0) {finalOutputs[position] = `${secCount}x ${secMaterial}`; position++;}
                if (tertCount != 0) {finalOutputs[position] = `${tertCount}x ${tertMaterial}`; position++;}
                finalOutputs[position] = primBlock; position++;
                finalOutputs[position] = cableBlock; position++;
                finalOutputs[position] = secBlock; position++;
                finalOutputs[position] = tertBlock; position++;
            }
            else {
                const getLUVToUVComponentTotal = global.getLUVToUVComponentTotal;

                if (!componentRecycleMaterials[tierComponent]) return;
                const {
                    primMaterial,
                    cableMaterial,
                    wireMaterial,
                    foilMaterial
                } = componentRecycleMaterials[tierComponent]

                const tempOutputs = checkComponentCount(getLUVToUVComponentTotal(components), false);
                if (!tempOutputs) return;
                const {
                    blockBools: {
                        primBlock,
                        cableBlock,
                        wireBlock,
                        foilBlock
                    },
                    totals: {
                        primCount,
                        cableCount,
                        wireCount,
                        foilCount
                    }
                } = tempOutputs;

                let position = 1;
                if (primCount != 0) {finalOutputs[position] = `${primCount}x ${primMaterial}`; position++;}
                if (cableCount != 0) {finalOutputs[position] = `${cableCount}x ${cableMaterial}`; position++;}
                if (wireCount != 0) {finalOutputs[position] = `${wireCount}x ${wireMaterial}`; position++;}
                if (foilCount != 0) {finalOutputs[position] = `${foilCount}x ${foilMaterial}`; position++;}
                finalOutputs[position] = primBlock; position++;
                finalOutputs[position] = cableBlock; position++;
                finalOutputs[position] = wireBlock; position++;
                finalOutputs[position] = foilBlock; position++;
            }

            return finalOutputs;
        }

        const arcRecipe = (coil) => {
            const id = global.id;
            const calculateDuration = global.calculateRecyclingDuration;
            const getFinalOutputs = global.getFinalRecycleOutputs;
            const outputs = getFinalOutputs(getFusionCoilRecycleOutputs(coil), "uhv" /*fake uhv tier so first slot isn't replaced via block bool*/,
                false, false);

            event.recipes.gtceu.arc_furnace(id(`arc_auxiliary_fusion_coil_${coil}`))
                .itemInputs(`start_core:auxiliary_fusion_coil_${coil}`)
                .itemOutputs(outputs)
                .duration(calculateDuration(outputs))
                .EUt(GTValues.VA[GTValues.LV])
                .category(GTRecipeCategories.ARC_FURNACE_RECYCLING);
        }

        const macRecipe = (coil) => {
            const id = global.id;           
            const calculateDuration = global.calculateRecyclingDuration;
            const calculateVoltageMultiplier = global.calculateRecyclingVoltageMultiplier;
            const getFinalOutputs = global.getFinalRecycleOutputs;
            const outputs = getFinalOutputs(getFusionCoilRecycleOutputs(coil), "uhv" /*fake uhv tier so first slot isn't replaced via block bool*/,
                true, false);

            event.recipes.gtceu.macerator(id(`macerate_auxiliary_fusion_coil_${coil}`))
                .itemInputs(`start_core:auxiliary_fusion_coil_${coil}`)
                .itemOutputs(outputs)
                .duration(calculateDuration(outputs))
                .EUt(2 * calculateVoltageMultiplier(outputs))
                .category(GTRecipeCategories.MACERATOR_RECYCLING);
        }

        FUSIONCOILS.forEach(coil => {
            arcRecipe(coil);
            macRecipe(coil);
        })
    })
})