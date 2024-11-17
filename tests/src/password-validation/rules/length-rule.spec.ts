import {beforeEach, describe, expect, it} from "vitest";
import {LengthRule} from "../../../../src/password-validation/rules/length-rule";

describe('length rule should', () => {
    const minimumLength = 9
    let lengthRule: LengthRule
    beforeEach(() => {
        lengthRule = new LengthRule(minimumLength);
    })

    it('return false if password length is less than minimum length', () => {
        expect(lengthRule.validate('abcdefgh')).toBe(false)
    });

    it('return true if password length is more than minimum length', () => {
        expect(lengthRule.validate('abcdefghik')).toBe(true)
    });

    it('return false if password length is same as minimum length', () => {
        expect(lengthRule.validate('abcdefghi')).toBe(false)
    });
})