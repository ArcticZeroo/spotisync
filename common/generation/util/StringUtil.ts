export enum CasingMode {
    camelCase,
    pascalCase,
    snakeCase
}

export default abstract class StringUtil {
    static toUppercase(value: string): string {
        if (!value || value.length < 2) {
            return value;
        }

        return value[0].toUpperCase() + value.substr(1);
    }

    static _toPascalCase(pieces: string[]): string {
        return pieces.map(StringUtil.toUppercase).join('');
    }

    static normalizeJsonName(name: string, mode: CasingMode) {
        if (mode === CasingMode.snakeCase) {
            return name;
        }

        const pieces = name.split('_');

        if (mode === CasingMode.pascalCase) {
            return StringUtil._toPascalCase(pieces);
        }

        if (mode === CasingMode.camelCase) {
            const head = pieces.shift();
            return head + StringUtil._toPascalCase(pieces);
        }

        throw new TypeError(`value of 'mode' is not a valid member of CasingMode: ${mode}`);
    }
}