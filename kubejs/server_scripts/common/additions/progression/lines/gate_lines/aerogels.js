ServerEvents.recipes (event => {
    /*  
    LCR 1b Seed oil + 3b Steam = 1b Glycerol + 3b Linoleic acid
    LCR 1 Sodium hydroxide dust + 1b Linoleic acid = 1b Sodium linoleate
    LCR 50mb Sodium linoleate + 1b Ethanol + 1b Water = 2b Aerogel solvent mixture (ASM)

    LCR 1 Silicon dust + 4b Chlorine = 1b Silicon tetrachloride (SiCl4)
    LCR 4b Ethanol + 1b Silicon tetrachloride(SiCl4) = 1b Tetraethyl orthosilicate (TEOS)

    LCR 3b ASM + 1b TEOS + 1b HCl = 4b Aerogel precursor solution (APS) + 1b Diluted HCl
    Fluid Solidify(ingot) 1b APS = 1 Wet aerogel ingot 
    VCR 1 Wet Aerogel Ingot = 500mb Water + 500mb Ethanol + 1 Aerogel ingot
    */
    const lcr = event.recipes.gtceu.large_chemical_reactor;
    const fs = event.recipes.gtceu.fluid_solidifier;
    // const vcr = event.recipes.start_core.vacuum_chemical_reaction_chamber;
    
    //acronyms
    const ASM = `start:aerogel_solvent_mixture`;
    const SiCl4 = `start:silicon_tetrachloride`;
    const TEOS = `start:tetraethyl_orthosilicate`;
    const APS = `start:aerogel_precursor_solution`;

    /* nonexisting items/fluids

    linoleic_Acid
    sodium_linoleate
    aerogel_solvent_mixture
    silicon_tetrachloride
    tetraethyl_orthosilicate
    aerogel_precursor_solution
    wet_aerogel_ingot
    aerogel_ingot (make as material)
    */

    lcr(id(`linoleic_acid`))
        .inputFluids(`gtceu:seed_oil 1000`, `gtceu:steam 3000`)
        .outputFluids(`gtceu:glycerol 1000`, `start:linoleic_acid 3000`)
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    lcr(id(`sodium_linoleate`))
        .itemInput(`gtceu:sodium_hydroxide_dust`)
        .inputFluid(`start:linoleic_acid`)
        .outputFluid(`start:sodium_linoleate 1000`)
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    lcr(id(`aerogel_solvent_mixture`))
        .inputFluids(`start:sodium_linoleate 50`, `gtceu:ethanol 1000`, `minecraft:water 1000`)
        .outputFluid(`${ASM} 2000`)
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    lcr(id(`silicon_tetrachloride`))
        .itemInput(`gtceu:silicon_dust`)
        .inputFluid(`gtceu:chlorine 4000`)
        .outputFluid(`${SiCl4} 1000`)
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);
    
    lcr(id(`tetraethyl_orthosilicate`))
        .inputFluids(`gtceu:ethanol 4000`, `${SiCl4} 1000`)
        .outputFluid(`${TEOS} 1000`)
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    lcr(id(`aerogel_precursor_solution`))
        .inputFluids(`${ASM} 3000`, `${TEOS} 1000`, `gtceu:hydrochloric_acid 1000`)
        .outputFluid(`${APS} 1000`)
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    fs(id(`wet_aerogel_ingot`))
        .nonConsumable(`gtceu:ingot_casting_mold`)
        .inputFluid(`${APS} 1000`)
        .itemOutput(`start:wet_aerogel_ingot`)
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    // vcr(id(`aerogel_ingot`))
    //     .nonConsumable(`gtceu:ingot_casting_mold`)
    //     .inputFluids(`${ASM} 3000`, `${TEOS} 1000`, `gtceu:hydrochloric_acid 1000`)
    //     .outputFluid(`${APS} 1000`)
    //     .duration(200)
    //     .EUt(GTValues.VHA[GTValues.ZPM]);
})