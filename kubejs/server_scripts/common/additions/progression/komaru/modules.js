ServerEvents.recipes (event => {
    const id = global.id;

    event.recipes.gtceu.rimula_extraction(id('riftion'))
        .itemInputs('minecraft:stone')
        .outputFluids('gtceu:riftion_extract','gtceu:highly_unstable_rift_source')
        .duration(10)
        .EUt(1);

});