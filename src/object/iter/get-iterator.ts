
import { isFunction } from "util/is/function";
import { isArrayLike } from "../is/array-like";
import { isIterable } from "../is/iterable";

type nextFn<T> = (arg?: unknown) => IteratorResult<T>;

/**
 * iterableなオブジェクトをiteratorに変換します。
 *
 * @param iterable
 * @return
 * @throws {TypeError}
 */
export const getIterator = <T>(iterable: Iterable<T> | ArrayLike<T> | nextFn<T>): Iterator<T> => {
    if(isIterable(iterable))
        return iterable[Symbol.iterator]();
    if(isFunction(iterable))
        return { next: iterable };
    if(isArrayLike(iterable)) {
        let i = 0;
        const next: nextFn<T> = () => i < iterable.length
            ? { value: iterable[i++], done: false }
            : { value: void 0, done: true };
        return { next };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
};
