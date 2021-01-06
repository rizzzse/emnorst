
import { typeOf } from "util/standard/type-of";
import { getKeys } from "../standard/keys";
import { isArrayLike } from "./array-like";

export const isEmpty = (value: unknown): boolean => {
    if(isArrayLike(value))
        return value.length === 0;
    if(typeOf(value) === "Object")
        return getKeys(value as object).length === 0;
    return false;
};
