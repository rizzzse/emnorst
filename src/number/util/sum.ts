
import { isFunction } from "util/is/function";

type mapfn<T, U> = (value: T, index: number, origin: ArrayLike<T>) => U;

/**
 *
 * @param arr
 * @param init
 * @param mapFn
 */
export const sum: {
    (arr: ArrayLike<number>, init?: number | null): number;
    <T>(arr: ArrayLike<T>, init: number | null, mapFn: mapfn<T, number>): number;
    (arr: ArrayLike<string>, init?: string | null): string;
    <T>(arr: ArrayLike<T>, init: string | null, mapFn: mapfn<T, string>): string;
} = <T>(arr: ArrayLike<T>, init?: number | string | null, mapFn?: mapfn<T, number | string>): any => {
    const len = arr.length;

    if(len === 0) return init ?? 0;

    let i = 0;
    if(isFunction(mapFn)) {
        let accum = (init ?? mapFn(arr[i], i++, arr)) as number;
        while(i < len) accum += mapFn(arr[i], i++, arr) as number;
        return accum;
    } else {
        assert.type<ArrayLike<number>>(arr);
        let accum = (init ?? arr[i++]) as number;
        while(i < len) accum += arr[i++];
        return accum;
    }
};
