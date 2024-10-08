// <reference types="chai" />

declare global {
    namespace Chai {
        interface Assertion {
            matchPattern(expected: any): void;
        }
    }
}

declare namespace ChaiJsonPattern {
    interface Plugin {
        [key: string]: (target: any) => void;
    }
}
declare const chaiJsonPattern: Chai.ChaiPlugin & {
    extend(plugin: ChaiJsonPattern.Plugin): void;
};

export = chaiJsonPattern;
