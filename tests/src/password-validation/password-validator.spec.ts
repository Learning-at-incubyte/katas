import {expect, describe, it, vi, beforeEach} from 'vitest';
import {PasswordValidator} from "../../../src/password-validation/password-validator";
import * as passwordBuilder from "../../../src/password-validation/password-validator-builder";

describe('Password validator should', () => {
    let addLengthRuleSpy;
    let addUppercaseRuleSpy;
    let addLowercaseRuleSpy;
    let addNumberRuleSpy;
    let addUnderscoreRuleSpy;

    beforeEach(() => {
        addLengthRuleSpy = vi.spyOn(passwordBuilder.PasswordValidatorBuilder.prototype, 'addLengthRule');
        addUppercaseRuleSpy = vi.spyOn(passwordBuilder.PasswordValidatorBuilder.prototype, 'addUppercaseRule');
        addLowercaseRuleSpy = vi.spyOn(passwordBuilder.PasswordValidatorBuilder.prototype, 'addLowercaseRule');
        addNumberRuleSpy = vi.spyOn(passwordBuilder.PasswordValidatorBuilder.prototype, 'addNumberRule');
        addUnderscoreRuleSpy = vi.spyOn(passwordBuilder.PasswordValidatorBuilder.prototype, 'addUnderscoreRule');
    })

    it.each([
        ['Morethan8char_', true, []],
        ['wrong', false, [
            'Password does not have minimum length 8',
            'Password does not have uppercase letter',
            'Password does not have underscore',
            'Password does not have number',
        ]],
        ['WRONGPASSOWRD_8', false, ['Password does not have lowercase letter',]],
    ])(`validate password: %s with length 8, uppercase, lowercase, underscore, and number`, (password: string, isValid: boolean, expectedReason: string[]) => {
        const {status, reason} = new PasswordValidator().checkValidation1(password);

        expect(status).toBe(isValid);
        expect(addLengthRuleSpy).toBeCalled();
        expect(addUppercaseRuleSpy).toBeCalled();
        expect(addLowercaseRuleSpy).toBeCalled();
        expect(addNumberRuleSpy).toBeCalled();
        expect(addUnderscoreRuleSpy).toBeCalled();
        expect(reason).toEqual(expectedReason);
    });

    it.each([
        ['Morethan6char', true, []],
        ['wrong', false, [
            'Password does not have minimum length 6',
            'Password does not have uppercase letter',
            'Password does not have number'
        ]],
    ])('validate password with length 6, uppercase, lowercase, and number', (password: string, isValid: boolean, expectedReason: string[]) => {
        const {status, reason} = new PasswordValidator().checkValidation2(password);
        expect(status).toBe(isValid);
        expect(addLengthRuleSpy).toBeCalled();
        expect(addUppercaseRuleSpy).toBeCalled();
        expect(addLowercaseRuleSpy).toBeCalled();
        expect(addNumberRuleSpy).toBeCalled();
        expect(reason).toEqual(expectedReason);
    });

    it.each([
        ['ThereAreMorethan16charInThisPassword_', true, []],
        ['wrong', false, [
            "Password does not have minimum length 16",
            "Password does not have uppercase letter",
            "Password does not have underscore"
        ]]
    ])('validate password with length 16, uppercase, and lowercase', (password: string, isValid: boolean, expectedReason: string[]) => {
        const {status,reason} = new PasswordValidator().checkValidation3(password);

        expect(status).toBe(isValid);
        expect(addLengthRuleSpy).toBeCalled();
        expect(addUppercaseRuleSpy).toBeCalled();
        expect(addLowercaseRuleSpy).toBeCalled();
        expect(addUnderscoreRuleSpy).toBeCalled();
        expect(reason).toEqual(expectedReason);
    });

});