/**
 * Function to round a number to 2 decimals.
 * @param num Number to round Example: 2.334314123.
 * @returns Number Example: 2.33 is the return.
 */
function roundToTwoDecimals(num: number): number {
    return Math.round(num * 100) / 100;
}

export default roundToTwoDecimals;