// TODO: voidについて調べる。
export type Primitive = string | number | bigint | boolean | symbol | null | undefined;

export const table = {
    string: "String",
    number: "Number",
    bigint: "BigInt",
    boolean: "Boolean",
    symbol: "Symbol",
    undefined: "Undefined",
} as const;
