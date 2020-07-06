/**
 * Converts a unit of code in json into
 * a unit of source code, e.g. an enum
 */
export default interface ICodeGenerator {
    enum(name, values): string;
    stringConstant(name, value): string;
}