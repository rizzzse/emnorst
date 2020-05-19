
// @ts-check

import { each } from "./each.js";
import { isDefined } from "../is/type.js";

const foldEngine = (func, init)=>(current)=>{
    const result = func.call(this, init, current);
    isDefined(result) && (init = result);
};

export const foldLeft = function(iterable, init, func){
    each(iterable, (current)=>{
        const result = func.call(this, init, current);
        isDefined(result) && (init = result);
    });
    return init;
};

export const fold = foldLeft;

export const foldRight = function(iterable, init, func){
    each(iterable, (current)=>{
        const result = func.call(this, init, current);
        isDefined(result) && (init = result);
    }, { fromRight: true });
    return init;
};
