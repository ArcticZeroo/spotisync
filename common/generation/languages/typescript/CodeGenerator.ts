import ICodeGenerator from '../../model/ICodeGenerator';

export default class TypeScriptCodeGenerator implements ICodeGenerator {

    enum(name, values): string {
        return `
enum ${name} {
    ${values.join(',\n')}
}
`;
    }

    stringConstant(name, value): string {
        if (typeof value === 'string') {
            return `static readonly ${name}: string = ${value};`;
        }
    }

}
