
import { typeOf } from "util/standard/type-of";

type TypedArray
    = Int8Array
    | Uint8Array
    | Int16Array
    | Uint16Array
    | Int32Array
    | Uint32Array
    | Uint8ClampedArray
    | Float32Array
    | Float64Array;

const regexp = /^(?:Uin|In|Floa)t(?:8|16|32|64)(?:Clamped)?Array$/;

export const isTypedArray = (value: unknown): value is TypedArray => (
    regexp.test(typeOf(value))
);
