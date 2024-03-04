import { APP_INITIALIZER } from "@angular/core";
import { PageLoad, PageLoadBrowser, PageLoadServer } from "./page-load"

export const providePageServerLoad = () => {
    return {
        provide: PageLoad,
        useClass: PageLoadServer
    };
}

export const providePageBrowserLoad = () => {
    return [{
        provide: PageLoad,
        useClass: PageLoadBrowser
    },
    {
        provide: APP_INITIALIZER,
        deps: [PageLoad],
        useFactory: (ds: PageLoad) => async () => await ds.load(),
        multi: true
    }];
};