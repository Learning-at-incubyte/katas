import {expect, describe, it, beforeEach} from "vitest";
import {PasswordValidator} from "../../../src/password-validation/password-validator";

describe("Password validator should", () => {
    let passwordValidator: PasswordValidator

    beforeEach(() => {
        passwordValidator = new PasswordValidator()
    })

    it('validate that  has 8 character at least ',  ()=> {
        expect(passwordValidator.isValid('Lm8_')).toBe(false)
    })

    it('validate that password has at least one upper case letter', () => {
        expect(passwordValidator.isValid('morethan8characters')).toBe(false)
    })

    it('validate that password has at least one lower case letter', () => {
        expect(passwordValidator.isValid('MORETHAN8CHARACTERS')).toBe(false)
    })

    it('validate that password has at least one number in it', ()=>{
        expect(passwordValidator.isValid('Morethancharacters')).toBe(false)
    })

    it('validate that password has at least one underscore', ()=>{
        expect(passwordValidator.isValid('Morethan8characters')).toBe(false)
    })

    it('validate that password meet all requirement', ()=>{
        expect(passwordValidator.isValid('Morethan8characters_')).toBe(true)
    })

});
