"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNumber = void 0;
const toNumber = (value) => {
    if (value === "")
        return undefined;
    if (!/^-?\d+(?:\.\d+|\,\d+)?$/.test(value)) {
        console.warn(`Invalid number format: ${value}`);
        return undefined;
    }
    const numberValue = typeof value === 'string' ? parseFloat(value.replace(",", ".")) : value;
    if (isNaN(numberValue)) {
        console.warn(`Invalid number conversion: ${value}`);
        return undefined;
    }
    return numberValue;
};
exports.toNumber = toNumber;
//# sourceMappingURL=cast.helper.js.map