export async function AppLoad() {
    return {
        text: 'Random Number From Server: ' + Math.random()
    };
};

export const serverLoads = [
    AppLoad()
    // Import other page server loads here...
];