
import { isInteger } from "number/is/integer";

export const isArrayLike = (value: unknown): value is ArrayLike<unknown> => {
    if(value == null || typeof value == "function")
        return false;

    const { length } = value as ArrayLike<unknown>;
    return length >= 0 && isInteger(length);
};
