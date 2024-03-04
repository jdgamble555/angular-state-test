import { isPlatformBrowser } from "@angular/common";
import { PLATFORM_ID, TransferState, inject, makeStateKey } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";


export const createLoader = <T>(loader: () => Promise<T>, serverKey = 'loader') => {

    // could easily pass route and state to a callable loader function...
    return (
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<T> => {

        const platformId = inject(PLATFORM_ID);
        const ts = inject(TransferState);

        const transfer = async <T>() => {

            // load data on browser
            if (isPlatformBrowser(platformId)) {
                return ts.get(makeStateKey<typeof data>(serverKey), null) as T;
            }

            // set data on server
            const data = await loader();
            ts.set(makeStateKey<typeof data>(serverKey), data);
            return data as T;
        }

        return Promise.resolve(transfer<T>());
    }
}

