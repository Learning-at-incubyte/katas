import {expect, describe, it, beforeEach} from "vitest";
import {PasswordValidator} from "../../../src/password-validation/password-validator";

describe("valid password should", () => {
    let passwordValidator: PasswordValidator

    beforeEach(() => {
        passwordValidator = new PasswordValidator()
    })

    it.each([['morethan8characters', true], ['less8', false]])('have more than 8 characters', (password: string, isValid: boolean) => {
        expect(passwordValidator.isValid(password)).toBe(isValid)
    })


});
