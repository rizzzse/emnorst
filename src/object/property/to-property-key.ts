
import { toPrimitive } from "util/standard/to-primitive";

export const toPropertyKey = (value: unknown): PropertyKey => {
    const key = toPrimitive(value, "string");
    return typeof key === "symbol" ? key : String(key);
};
