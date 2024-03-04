import { generateRandomString } from "@lib/utils";

export async function HomeLoad() {
    return {
        text: 'Random String From Server: ' + generateRandomString(10)
    };
};

