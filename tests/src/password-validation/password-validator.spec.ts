import {expect, describe, it, beforeEach} from 'vitest';
import {PasswordValidatorBuilder} from '../../../src/password-validation/password-validator-builder';
import {PasswordValidator} from "../../../src/password-validation/password-validator";

describe('Password validator should', () => {
    let passwordValidator: PasswordValidator;

    beforeEach(() => {
        passwordValidator = new PasswordValidatorBuilder()
            .addLengthRule(8)
            .addUppercaseRule()
            .addLowercaseRule()
            .addUnderscoreRule()
            .addNumberRule()
            .build();
    });

    it('validate that password has 8 characters at least', () => {
        expect(passwordValidator.isValid('Lm8_')).toBe(false);
    });

    it('validate that password has at least one upper case letter', () => {
        expect(passwordValidator.isValid('morethan8characters_')).toBe(false);
    });

    it('validate that password has at least one lower case letter', () => {
        expect(passwordValidator.isValid('MORETHAN8CHARACTERS8_')).toBe(false);
    });

    it('validate that password has at least one number in it', () => {
        expect(passwordValidator.isValid('Morethancharacters_')).toBe(false);
    });

    it('validate that password has at least one underscore', () => {
        expect(passwordValidator.isValid('Morethan8characters')).toBe(false);
    });

    it('validate that password meets all requirements', () => {
        expect(passwordValidator.isValid('Morethan8characters_')).toBe(true);
    });
});