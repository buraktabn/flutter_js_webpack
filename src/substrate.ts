import { ApiPromise, WsProvider } from '@polkadot/api';

export default class SubstrateDart {
    _wsProvider = new WsProvider('wss://astar.api.onfinality.io/ws?apikey=78425a4c-0efb-44a4-83c6-3788e57cb080');
    api: ApiPromise | undefined;

    async init() {
        this.api = await ApiPromise.create({ provider: this._wsProvider });
        return 'success'
    }

    async genesisHash() {
        return this.api?.genesisHash.toHex();
    }
}
