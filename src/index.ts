import SubstrateDart from './substrate';


// @ts-ignore
window.substrate = (() => {
    let service: SubstrateDart

    const api = {
        start: () => {
            service = new SubstrateDart();
        },
        init: () => service.init(),
        genesisHash: () => service.genesisHash(),
        isReady: () => service.api?.isReady,
    }

    return api;
})()

