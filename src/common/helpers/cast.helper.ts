/**
 * Number cast.
 *
 * @param value string to transform to a number,
 * @returns new number from string.
 */

export const toNumber = (value: string): number | undefined => {
    if (value === "") return undefined;

    // Check for valid number format (including commas for decimals)
    if (!/^-?\d+(?:\.\d+|\,\d+)?$/.test(value)) {
        console.warn(`Invalid number format: ${value}`);
        return undefined;
    }

    // Handle both string and integer inputs (if necessary)
    const numberValue = typeof value === 'string' ? parseFloat(value.replace(",", ".")) : value;

    if (isNaN(numberValue)) {
        console.warn(`Invalid number conversion: ${value}`);
        return undefined;
    }

    return numberValue;
};