
import { isFunction } from "util/is/function";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ReturnTypeOrElse<T> = T extends (...args: any) => infer R ? R : T;

/**
 *
 * @param count
 * @param value
 * @example
 * const arr = times<number>(4, (i, p=0) => i + p);
 * // => [0, 1, 3, 6]
 * @example
 * const arr = times(3, "hoge");
 * // => ["hoge", "hoge", "hoge"]
 */
export const times: {
    <T>(count: number, value: (i: number, p?: T) => T): T[];
    <T>(count: number, value: T): ReturnTypeOrElse<T>[];
} = <T>(count: number, value: T): ReturnTypeOrElse<T>[] => {
    const arr = [];

    let i = 0;
    if(isFunction(value)) {
        let prev!: T;
        while(i < count) {
            prev = arr[i] = value(i++, prev);
        }
    } else while(i < count) arr[i++] = value;

    return arr;
};
