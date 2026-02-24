global.not_hardmode(() => {
    ServerEvents.recipes(event => {
        const CASINGS = [
            "fusion_casing", "fusion_casing_mk2", "fusion_casing_mk3", "auxiliary_boosted_fusion_casing_mk1", "fusion_casing_mk4",
            "auxiliary_boosted_fusion_casing_mk2"
        ]
        const CASINGDETAILS = global.fusionCasingDetails;

        //old recipe removals
        event.remove({ input: /gtceu:.*fusion_casing.*/, type: "gtceu:macerator" });
        event.remove({ input: /gtceu:.*fusion_casing.*/, type: "gtceu:arc_furnace" });

        function getFusionCasingRecycleOutputs(field_generator_tier, casing_tier) {
            const componentRecycles = global.componentRecycleMaterials;
            const checkRecyclingCount = global.checkRecyclingCount;
            let recycleOutputs = [];
            const materials = {
                casingMaterial: "",
                primMaterial: "",
                cableMaterial: "",
                hullCableMaterial: "",
                secMaterial: "",
                wireMaterial: ""
            }
            let tempTotals;
            let blockType;

            if (field_generator_tier == "iv") { //iv
                recycleOutputs = ["8x gtceu:rhodium_plated_palladium", "8x gtceu:samarium_iron_arsenic_oxide", "4x gtceu:tungsten_steel", 
                    "gtceu:niobium_titanium", /*fake blockBools*/ false, false, false, false];
                return recycleOutputs;
            }
            else if (field_generator_tier == "luv" || field_generator_tier == "zpm" || field_generator_tier == "uv") { //LUVToUV
                const counts = global.LUVToUVComponentRecycleCounts.field_generator;
                const {
                    primCount,
                    cableCount,
                    wireCount
                } = counts;

                tempTotals = {
                    casingCount: 8,
                    primCount: primCount,
                    cableCount: cableCount,
                    hullCableCount: 1,
                    wireCount: wireCount
                }

                blockType = "fusion_casing_LUVToUV";

                switch (casing_tier) {
                    case "zpm": {
                        materials.casingMaterial = "gtceu:naquadah_alloy";
                        materials.primMaterial = componentRecycles.luv.primMaterial;
                        materials.cableMaterial = componentRecycles.luv.cableMaterial;
                        materials.hullCableMaterial = componentRecycles.zpm.cableMaterial;
                        materials.wireMaterial = componentRecycles.luv.wireMaterial;
                        break;
                    }
                    case "uv": {
                        materials.casingMaterial = "gtceu:darmstadtium";
                        materials.primMaterial = componentRecycles.zpm.primMaterial;
                        materials.cableMaterial = componentRecycles.zpm.cableMaterial;
                        materials.hullCableMaterial = componentRecycles.uv.cableMaterial;
                        materials.wireMaterial = componentRecycles.zpm.wireMaterial;
                        break;
                    }
                    case "uhv": {
                        materials.casingMaterial = "gtceu:neutronium";
                        materials.primMaterial = componentRecycles.uv.primMaterial;
                        materials.cableMaterial = componentRecycles.uv.cableMaterial;
                        materials.hullCableMaterial = componentRecycles.uhv.cableMaterial;
                        materials.wireMaterial = componentRecycles.uv.wireMaterial;
                        break;
                    }
                }

            }
            else { //UHVPlus
                const counts = global.UHVPlusComponentRecycleCounts.field_generator;
                const {
                    primCount,
                    cableCount,
                    secCount,
                } = counts;

                tempTotals = {
                    casingCount: 8,
                    primCount: primCount,
                    cableCount: cableCount,
                    hullCableCount: 1,
                    secCount: secCount
                }

                blockType = "fusion_casing_UHVPLUS";

                switch (casing_tier) {
                    case "uev": {
                        materials.casingMaterial = "gtceu:mythrolic_alloy";
                        materials.primMaterial = componentRecycles.uhv.primMaterial;
                        materials.cableMaterial = componentRecycles.uhv.cableMaterial;
                        materials.hullCableMaterial = componentRecycles.uev.cableMaterial;
                        materials.secMaterial = componentRecycles.uhv.secMaterial;
                        break;
                    }
                    case "uiv": {
                        materials.casingMaterial = "gtceu:chaotixic_alloy";
                        materials.primMaterial = componentRecycles.uev.primMaterial;
                        materials.cableMaterial = componentRecycles.uev.cableMaterial;
                        materials.hullCableMaterial = componentRecycles.uiv.cableMaterial;
                        materials.secMaterial = componentRecycles.uev.secMaterial;
                        break;
                    }
                }
            }

            // gets the final outputs
            let tempObj = checkRecyclingCount(tempTotals, blockType, false, true, true);

            // sorts the final outputs
            let checkCount = 0;
            let position = 0;
            let flag = false;

            while (!flag) {
                if (checkCount == 4) {
                    flag = true;
                }
                if (tempObj.totals[tempObj.outputOrder[position] + "Count"] != 0) {
                    recycleOutputs[position] = `${tempObj.totals[tempObj.outputOrder[position] + "Count"]}x ${materials[tempObj.outputOrder[position] + "Material"]}`;
                    position++;
                }
                
                checkCount++;
            }

            recycleOutputs[position] = tempObj.blockBools.primBlock; position++;
            recycleOutputs[position] = tempObj.blockBools.cableBlock; position++;
            recycleOutputs[position] = tempObj.blockBools.hullCableBlock; position++;            
            recycleOutputs[position] = (field_generator_tier == "uhv" || field_generator_tier == "uev" || field_generator_tier == "uiv") ? tempObj.blockBools.secBlock : tempObj.blockBools.wireBlock; 
            position++;

            return recycleOutputs;
        }

        const arcRecipe = (name, prefix, field_generator_tier, casing_tier) => {
            const id = global.id;
            const calculateDuration = global.calculateRecyclingDuration;
            const getFinalOutputs = global.getFinalRecycleOutputs;
            const outputs = getFinalOutputs(getFusionCasingRecycleOutputs(field_generator_tier, casing_tier), "fusion_casing", false, false);

            event.recipes.gtceu.arc_furnace(id(`arc_${name}`))
                .itemInputs(`${prefix}${name}`)
                .itemOutputs(outputs)
                .duration(calculateDuration(outputs))
                .EUt(GTValues.VA[GTValues.LV])
                .category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
        }

        const macRecipe = (name, prefix, field_generator_tier, casing_tier) => {
            const id = global.id;
            const calculateDuration = global.calculateRecyclingDuration;
            const calculateVoltageMultiplier = global.calculateRecyclingVoltageMultiplier;
            const getFinalOutputs = global.getFinalRecycleOutputs;
            const outputs = getFinalOutputs(getFusionCasingRecycleOutputs(field_generator_tier, casing_tier), "fusion_casing", true, false);

            event.recipes.gtceu.macerator(id(`macerate_${name}`))
                .itemInputs(`${prefix}${name}`)
                .itemOutputs(outputs)
                .duration(calculateDuration(outputs))
                .EUt(2 * calculateVoltageMultiplier(outputs))
                .category(GTRecipeCategories.MACERATOR_RECYCLING)
        }

        const casingDetails = (casingKey) => {
            const data = CASINGDETAILS[casingKey];
            if (!data) return;

            const {
                name,
                prefix,
                field_generator_tier,
                casing_tier
            } = data

            arcRecipe(name, prefix, field_generator_tier, casing_tier);
            macRecipe(name, prefix, field_generator_tier, casing_tier);
        }

        CASINGS.forEach(casing => {
            casingDetails(casing);
        });
    })

})