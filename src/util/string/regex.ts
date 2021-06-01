
const REGEX_CHAR = /[$()*+-.?[\]\\^{}|]/g;
export const escapeRegex = (reStr: string): string => reStr.replace(REGEX_CHAR, "\\$&");
