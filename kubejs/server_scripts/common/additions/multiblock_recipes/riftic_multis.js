ServerEvents.recipes(event => {
    const id = global.id;

    const researchBuilder = global.researchBuilder;
    // global.researchBuilder = (machineType, recId, inputsI, inputsF, outputsI, duration, cwuT, totalCWU, euT, researched)
    const riftAss = 'riftic_infusion_assembly';
    const assLine = 'assembly_line';

    researchBuilder(riftAss, 'fire', 
        ['3x gtceu:hvga_steel_frame','8x #gtceu:circuits/uxv','24x kubejs:uiv_high_strength_panel','12x gtceu:nyanium_nonuple_fluid_pipe',
            '12x gtceu:uiv_field_generator','8x gtceu:uiv_fluid_regulator','12x gtceu:draco_abyssal_rotor','32x gtceu:hvga_steel_screw'], 
        ['gtceu:neutrindium_soldering_alloy 17280','gtceu:borealic_concentrate 5400','gtceu:pure_dragon_breath 22500',
            'gtceu:riftic_concentrate 28500','start_core:corefire_nectar 1000000'], 
        ['start_core:fornaxs_infernal_rotary_engine'], 
        1800, 500, 500 * 1200, GTValues.VA[GTValues.UIV], 'start_core:hellforge');

    researchBuilder(riftAss, 'ultimate_abs', 
        ['gtceu:uiv_alloy_smelter','6x #gtceu:circuits/uxv','4x gtceu:uiv_field_generator','8x gtceu:dense_hvga_steel_plate',
            '3x gtceu:uiv_robot_arm','8x gtceu:uiv_fluid_regulator','16x gtceu:rhenium_super_composite_alloy_quadruple_wire',
            '6x gtceu:draco_abyssal_rotor','6x gtceu:small_lepton_resonant_thallium_antimonide_spring','16x gtceu:draco_abyssal_screw'], 
        ['gtceu:neutrindium_soldering_alloy 17280','gtceu:borealic_concentrate 5400','gtceu:pure_dragon_breath 22500',
            'gtceu:riftic_concentrate 28500','start_core:corefire_nectar 500000'], 
        ['gtceu:ultimate_abs'], 
        1200, 500, 500 * 1200, GTValues.VA[GTValues.UIV], 'gtceu:mega_abs');

    // researchBuilder(assLine, 'voidic_refinement_module', 
    //     ['2x kubejs:komaru_plating','4x gtceu:uiv_fluid_regulator','2x gtceu:uiv_sensor','4x kubejs:uiv_micropower_router'], 
    //     ['gtceu:neutrindium_soldering_alloy 8640','gtceu:drilling_fluid 4096000','gtceu:faematter 100000'], 
    //     ['gtceu:voidic_refinement_module'], 
    //     1200, 500, 500 * 1200, GTValues.VHA[GTValues.UXV], 'gtceu:void_extractor');

    // researchBuilder(assLine, 'magmatic_drilling_module', 
    //     ['2x kubejs:komaru_plating','4x gtceu:uiv_fluid_regulator','64x kubejs:voidic_reinforced_mesh','4x kubejs:uiv_micropower_router'], 
    //     ['gtceu:neutrindium_soldering_alloy 8640','gtceu:netherite_triselex_oxide 6480','gtceu:faematter 100000'], 
    //     ['gtceu:magmatic_drilling_module'], 
    //     1200, 500, 500 * 1200, GTValues.VHA[GTValues.UXV], 'start_core:zpm_fluid_drilling_rig');

    // researchBuilder(assLine, 'riftic_infusion_assembly_module', 
    //     ['6x kubejs:komaru_plating','2x kubejs:komaru_rift_caller','32x gtceu:uiv_emitter','8x kubejs:uiv_micropower_router'], 
    //     ['gtceu:neutrindium_soldering_alloy 17280','gtceu:pure_dragon_breath 75000','gtceu:faematter 250000'], 
    //     ['gtceu:riftic_infusion_assembly_module'], 
    //     1800, 500, 500 * 1800, GTValues.VA[GTValues.UXV], 'gtceu:multithreaded_component_synthesis_forge');
    
});