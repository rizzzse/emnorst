
import { rand } from "number/random/default";
import { MAX_BIT_NUMBER } from "number/util/constant";

/**
 * Generates a random string of lowercase alphabet and number.
 *
 * @param length length of string to generate.
 */
export const randStr = (length?: number): string => {
    const len = length! < MAX_BIT_NUMBER ? Math.abs(length!) | 0 : 8;

    let result = "";
    do result += rand().toString(36);
    while(result.length <= len);
    return result.slice(-len);
};
