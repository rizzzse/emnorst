
import { isFunction } from "util/is/function";

/**
 * @param value The value to be compared
 * @return Whether the value is iterable
 */
export const isIterable = (value: unknown): value is Iterable<unknown> => (
    value != null && isFunction((value as Iterable<unknown>)[Symbol.iterator])
);
