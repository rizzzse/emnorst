
import { xorshift } from "number/random/xorshift";
import { copyBase } from "../../clone";
import { swap } from "../../property/swap";

export const shuffle = <T extends ArrayLike<T>>(origin: T, copy=false): T => {
    const result = copy ? copyBase(origin) as T : origin;
    for(let i = origin.length;i--;) {
        const rand = xorshift(0, i);
        swap(origin, i, rand, result);
    }
    return result;
};
