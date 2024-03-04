import { Injectable, TransferState, inject, makeStateKey } from '@angular/core';
import { pageServerLoad, serverKey } from './page-server-load';

type PageLoadType = Awaited<ReturnType<typeof pageServerLoad>>;

// Abstract
@Injectable()
export abstract class PageLoad {
    abstract data: PageLoadType | null;
    abstract load(): Promise<void>;
}

// Server
@Injectable()
export class PageLoadServer extends PageLoad {
    state = inject(TransferState);
    data: PageLoadType | null = null;
    async load() {
        const data = await pageServerLoad();
        this.state.set(makeStateKey<PageLoadType>(serverKey), data);
        this.data = data;
    }
}

// Browser
@Injectable()
export class PageLoadBrowser extends PageLoad {
    state = inject(TransferState);
    data: PageLoadType | null = null;
    async load() {
        const data = this.state.get(makeStateKey<PageLoadType>(serverKey), null);
        this.data = data;
    }
}
