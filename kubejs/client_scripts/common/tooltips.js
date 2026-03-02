// priority -100

ItemEvents.tooltip(event => {
    const addedByStarT = [
        "gtceu:kiln", "gtceu:large_farm", "gtceu:large_barrel", "gtceu:large_stone_barrel", "gtceu:primitive_ore_factory", "gtceu:steam_ore_factory", "gtceu:latex_plantation",
        "gtceu:solid_blast_furnace", "gtceu:steam_kiln", "gtceu:high_pressure_steam_hammer", "gtceu:electric_ore_factory", "gtceu:mechanical_sieve", "gtceu:void_extractor", 
        "gtceu:rock_filtrator", "gtceu:greenhouse", "gtceu:ore_processing_plant", "gtceu:industrial_barrel", "gtceu:large_sieve", "gtceu:composting_factory", "gtceu:hydroponic_garden", 
        "gtceu:industrial_fishery", "gtceu:tree_synthesizer", "gtceu:large_me_assembler", "gtceu:dimensional_destabiliser", "gtceu:rock_sifter", "gtceu:void_excavator", 
        "gtceu:chemical_plant", "gtceu:mega_abs", "gtceu:t_large_bender", "gtceu:t_large_centrifuge", "gtceu:t_large_electrolyzer", "gtceu:t_large_extruder", 
        "gtceu:t_large_forming_press", "gtceu:t_large_lathe", "gtceu:t_large_macerator", "gtceu:t_large_mixer", "gtceu:t_large_ore_washer", "gtceu:t_large_sifter",
        "gtceu:t_large_thermal_centrifuge", "gtceu:t_large_wiremill", "gtceu:t_large_autoclave", "gtceu:t_large_rock_crusher", "gtceu:bulk_ore_processing_array", 
        "gtceu:folding_akreyrium_stabiliser", "gtceu:molten_detabiliser", "gtceu:ancient_refinement_center", "gtceu:component_nexus", "gtceu:cyclonic_sifter", "gtceu:injection_mixer", 
        "gtceu:manifold_centrifuge", "gtceu:atomic_synthesis_plant", "gtceu:component_part_hub", "gtceu:draco_circuit_assembler", "gtceu:draco_infusion", "gtceu:cryostate_quantum_chiller", 
        "start_core:hellforge", "start_core:abyssal_harvester", "start_core:abyssal_containment_room", "gtceu:dimensional_finder", "gtceu:gate_assembly", "gtceu:large_rotor_machine", 
        "gtceu:large_quantum_compressor", "gtceu:runic_circuitry_assembling_station", "gtceu:runic_inscribe_manipulate", "gtceu:stargate_component_assembly", 
        "gtceu:super_pressure_heat_chamber", "gtceu:omega_pressure_heat_chamber", "gtceu:super_compact_heat_chamber", "gtceu:heat_chamber", "gtceu:super_abs", "gtceu:super_cutter", 
        "gtceu:super_ebf", "gtceu:super_implosion_compressor", "gtceu:super_vacuum_freezer", "gtceu:super_electric_ore_factory", "gtceu:aqueous_transformation_processing_center", 
        "gtceu:ascendant_engraving_matrix", "gtceu:byteforce_unified_incomparable_logistics_depot", "gtceu:electro_magnetic_material_ripper", "gtceu:fermenting_arboreal_rejuvination_monstronsity", 
        "gtceu:gravitational_compression_chamber", "gtceu:material_annihilation_array", "gtceu:molecular_inducing_xanadu", "gtceu:multithreaded_component_synthesis_forge",
        "gtceu:subatomic_particle_lattice_isolation_terminal", "gtceu:superior_particulate_isolation_nexus", "gtceu:yielding_excression_advanced_seperation_transformator", 
        "start_core:luv_fusion", "start_core:zpm_fusion", "start_core:uv_fusion", "start_core:uhv_fusion", "start_core:uev_fusion", "start_core:uiv_fusion", 
        "gtceu:supreme_plasma_turbine", "gtceu:vacuum_chemical_reaction_chamber", "gtceu:nyinsane_plasma_turbine", "gtceu:ulv_barrel", "gtceu:ulv_stone_barrel", "gtceu:ulv_advanced_composter"
    ];
    const tiers = [
        "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv"
    ];
    const addedByStarTSingles = [
        "electric_blast_furnace", "electric_smoker", "me_assembler"
    ];

    tiers.forEach(tier => {
        addedByStarTSingles.forEach(name => {
            event.add(`gtceu:${tier}_${name}`, Text.translate(`block.kubejs.added_by_StarT.tooltip`));
        });
    });
    
    addedByStarT.forEach(name => {
        event.add(name, Text.translate(`block.kubejs.added_by_StarT.tooltip`));
    });

    event.addAdvanced('gtceu:large_chemical_reactor', (item, advanced, text) => {
        text.add(2, Text.translate('block.gtceu.coil_boosting_subtick.tooltip.1'));
    });

    event.addAdvanced('gtceu:extreme_chemical_reactor', (item, advanced, text) => {
        text.add(2, Text.translate('block.gtceu.coil_boosting_parallel_subtick.tooltip.1'));
    });

    event.addAdvanced('gtceu:implosion_compressor', (item, advanced, text) => {
        text.add(2, Text.translate('block.gtceu.subtick.tooltip.1'));
    });

    event.addAdvanced('gtceu:distillation_tower', (item, advanced, text) => {
        text.add(2, Text.translate('block.gtceu.subtick.tooltip.1'));
    });

    event.addAdvanced('gtceu:vacuum_freezer', (item, advanced, text) => {
        text.add(2, Text.translate('block.gtceu.subtick.tooltip.1'));
    });

    event.addAdvanced('gtceu:assembly_line', (item, advanced, text) => {
        text.add(2, Text.translate('block.gtceu.subtick.tooltip.1'));
    });

    event.addAdvanced('gtceu:multi_smelter', (item, advanced, text) => {
        text.add(2, Text.translate('block.gtceu.subtick_coil_parallel.tooltip.1'));
    });

    event.addAdvanced(/gtceu:.*_macerator/, (item, advanced, text) => {
        text.add(1, Text.translate('block.gtceu.macerators.tooltip.1'));
    });

    event.addAdvanced('gtceu:ulv_fluid_input', (item, advanced, text) => {
        text.add(1, Text.translate('block.gtceu.ulv_fluid_input.tooltip.1'));
        text.add(2, Text.translate('block.gtceu.ulv_fluid_input.tooltip.2'));
    });    
    
    event.addAdvanced('gtceu:uhv_stabilization_module', (item, advanced, text) => {
        text.add(1, Text.of('Multiblock Sharing §4Disabled'));
        text.add(2, Text.of('Makes your Multiblocks extremely stable for mass assembly!'));
        text.add(3, Text.of('Level of Stabilization:'));
        text.add(4, Text.of('   §bAbsolute Stabilization'));
    });

    event.addAdvanced('gtceu:large_maceration_tower', (item, advanced, text) => {
        text.remove(2);
        text.add(2, Text.translate('block.gtceu.large_maceration_tower.tooltip.1'));
    });

    //Custom Colossal Chest Tooltips
    const colossalTypes = [`wood`, `copper`, `iron`, `silver`, `gold`, `diamond`, `obsidian`];
    colossalTypes.forEach(type => {
        event.add(`colossalchests:colossal_chest_${type}`, Text.translate(`item.colossalchests.colossal_chest.tooltip`));
    });

    //Theta 2 removals 
    const theta2Removals = ["essence_burner", "mystical_greenhouse", "essence_enchancer", "essence_replicator", "nuclear_reactor"];
    theta2Removals.forEach(name => {
        if (name == "essence_burner" || name == "mystical_greenhouse") {
            tiers.forEach(tier => {
                event.add(`gtceu:${tier}_${name}`, Text.translate(`block.gtceu.theta2Removals.tooltip`));
            });
        }
        else {
            event.add(`gtceu:${name}`, Text.translate(`block.gtceu.theta2Removals.tooltip`));
        }
    });
    
    for (let x=1; x<=8; x++) {
        event.add(`solarflux:sp_${x}`, Text.translate(`block.solarflux.sp.tooltip`));
    }
});