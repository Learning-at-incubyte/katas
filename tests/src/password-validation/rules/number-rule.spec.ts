import {beforeEach, describe, expect, it} from "vitest";
import {NumberRule} from "../../../../src/password-validation/rules/number-rule";

describe('number rule should', () => {
    let numberRule: NumberRule
    beforeEach(() => {
        numberRule = new NumberRule();
    })

    it('return false if password has no number', () => {
        expect(numberRule.validate('ABCDe').status).toBe(false)
    });

    it('return true if password has at least one number', () => {
        expect(numberRule.validate('ABCd8').status).toBe(true)
    });
})