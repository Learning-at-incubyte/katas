import { describe, it, expect } from 'vitest';
import {PasswordValidatorBuilder} from "../../../src/password-validation/password-validator-builder";
import {LengthRule} from "../../../src/password-validation/rules/length-rule";
import {UppercaseRule} from "../../../src/password-validation/rules/uppercase-rule";
import {LowercaseRule} from "../../../src/password-validation/rules/lowercase-rule";
import {NumberRule} from "../../../src/password-validation/rules/number-rule";
import {UnderscoreRule} from "../../../src/password-validation/rules/underscore-rule";

describe('Password validator builder should', () => {
    it('add LengthRule', () => {
        const builder = new PasswordValidatorBuilder();
        builder.addLengthRule(8);
        const validator = builder.build();
        expect(validator.rules[0]).toBeInstanceOf(LengthRule);
    });

    it('add UppercaseRule', () => {
        const builder = new PasswordValidatorBuilder();
        builder.addUppercaseRule();
        const validator = builder.build();
        expect(validator.rules[0]).toBeInstanceOf(UppercaseRule);
    });

    it('add LowercaseRule', () => {
        const builder = new PasswordValidatorBuilder();
        builder.addLowercaseRule();
        const validator = builder.build();
        expect(validator.rules[0]).toBeInstanceOf(LowercaseRule);
    });

    it('add NumberRule', () => {
        const builder = new PasswordValidatorBuilder();
        builder.addNumberRule();
        const validator = builder.build();
        expect(validator.rules[0]).toBeInstanceOf(NumberRule)
    });

    it('add UnderscoreRule', () => {
        const builder = new PasswordValidatorBuilder();
        builder.addUnderscoreRule();
        const validator = builder.build();
        expect(validator.rules[0]).toBeInstanceOf(UnderscoreRule);
    });

    it('build a PasswordValidator with all rules', () => {
        const builder = new PasswordValidatorBuilder();
        builder.addLengthRule(8)
            .addUppercaseRule()
            .addLowercaseRule()
            .addNumberRule()
            .addUnderscoreRule();
        const validator = builder.build();
        expect(validator.rules.length).toBe(5);
        expect(validator.rules[0]).toBeInstanceOf(LengthRule);
        expect(validator.rules[1]).toBeInstanceOf(UppercaseRule);
        expect(validator.rules[2]).toBeInstanceOf(LowercaseRule);
        expect(validator.rules[3]).toBeInstanceOf(NumberRule);
        expect(validator.rules[4]).toBeInstanceOf(UnderscoreRule);
    });
});