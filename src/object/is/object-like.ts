
import { isFunction } from "util/is/function";
import { isObject } from "./object";

export const isObjectLike = (value: unknown): value is object => (
    isObject(value) || isFunction(value)
);
