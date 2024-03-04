import { serverLoads } from "../app.server.load";


// Config
export const serverKey = 'page-server-load';

type ExtractPromiseValueType<T> = T extends PromiseFulfilledResult<infer U> ? U : never;

export async function pageServerLoad() {

    const data = await Promise.allSettled(serverLoads);

    const combinedData = data.reduce((acc, result) => {
        if (result.status === 'fulfilled') {
            Object.assign(acc, result.value);
        }
        return acc;
    }, {} as ExtractPromiseValueType<typeof data[number]>);

    return combinedData;
}