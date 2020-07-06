import { CasingMode } from '../generation/util/StringUtil';

export enum CodeUnitType {
    enum,
    class,
    function,
    fileName,
    variable
}

export default {
    default: {
        naming: {
            [CodeUnitType.enum]: CasingMode.pascalCase,
            [CodeUnitType.class]: CasingMode.pascalCase,
            [CodeUnitType.function]: CasingMode.camelCase,
            [CodeUnitType.fileName]: CasingMode.camelCase,
            [CodeUnitType.variable]: CasingMode.camelCase
        }
    },
    dart: {
        naming: {
            [CodeUnitType.fileName]: CasingMode.snakeCase,
        }
    },
    typescript: {
        naming: {
        }
    }
}