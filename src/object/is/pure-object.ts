
import { Opaque } from "util/standard/opaque";
import { typeOf } from "util/standard/type-of";

/**
 * @param value
 */
export const isPureObject = (value: unknown): value is Opaque<object, {pure:true}> => (
    typeOf(value) === "Object" && (value as object).constructor === Object
);
