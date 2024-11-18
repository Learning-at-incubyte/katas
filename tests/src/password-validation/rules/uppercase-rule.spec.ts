import {beforeEach, describe, expect, it} from "vitest";
import {UppercaseRule} from "../../../../src/password-validation/rules/uppercase-rule";

describe('upper case rule should', () => {
    let uppercaseRule: UppercaseRule
    beforeEach(() => {
        uppercaseRule = new UppercaseRule();
    })

    it('return false if password has no uppercase', () => {
        expect(uppercaseRule.validate('abcdef').status).toBe(false)
    });

    it('return true if password has at least one uppercase', () => {
        expect(uppercaseRule.validate('ABCd8').status).toBe(true)
    });
})