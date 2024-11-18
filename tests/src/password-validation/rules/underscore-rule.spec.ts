import {beforeEach, describe, expect, it} from "vitest";
import {UnderscoreRule} from "../../../../src/password-validation/rules/underscore-rule";

describe('under score rule should', () => {
    let underscoreRule: UnderscoreRule
    beforeEach(() => {
        underscoreRule = new UnderscoreRule();
    })

    it('return false if password has no underscore', () => {
        expect(underscoreRule.validate('ABCDe').status).toBe(false)
    });

    it('return true if password has at least one underscore', () => {
        expect(underscoreRule.validate('ABCd8_').status).toBe(true)
    });
})