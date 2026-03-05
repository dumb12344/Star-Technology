    //Th230 - Base Th
    //U233 - Need to Add/
    //U235 - Base U235
    //U238 - Base U238
    //Np237 - Base Np
    //Pu238 - Need to Add/
    //Pu239 - Base Pu239
    //Pu241 - Base Pu241
    //Am241 - Need to Add/
    //Cm244 - Need to Add
    //Cf252 - Need to Add
    //Es253 - Need to Add
    //Fm257 - Base Fm
    //Nq404 - Base Purified Naq
    //Ec404 - Base Echo

    //₁₂₃₄₅₆₇₈₉₀

GTCEuStartupEvents.registry('gtceu:element', event => {
    
    const elem = global.elementFunction(event);

    elem('uranium_233', 92, 141, 'U²³³');
    elem('plutonium_238', 94, 144, 'Pu²³⁸');
    elem('plutonium_244', 94, 150, 'Pu²⁴⁴');
    elem('americium_241', 95, 146, 'Am²⁴¹');
    elem('curium_244', 96, 148, 'Cm²⁴⁴');
    elem('californium_252', 98, 154, 'Cf²⁵²');
    elem('einsteinium_253', 99, 154, 'Es²⁵³');

});