
/**
 * sleep is a function to help simulate delay
 * @param ms miliseconds to wait
 * @returns void, and wait time
 */
export const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}