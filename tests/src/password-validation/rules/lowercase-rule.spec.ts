import {beforeEach, describe, expect, it} from "vitest";
import {LowercaseRule} from "../../../../src/password-validation/rules/lowercase-rule";

describe('lower case rule should', () => {
    let lowercaseRule: LowercaseRule
    beforeEach(() => {
        lowercaseRule = new LowercaseRule();
    })

    it('return false if password has no lower case', () => {
        expect(lowercaseRule.validate('ABCD').status).toBe(false)
    });

    it('return true if password has at least one lower case', () => {
        expect(lowercaseRule.validate('ABCd').status).toBe(true)
    });
})