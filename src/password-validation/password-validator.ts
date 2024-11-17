import {PasswordRule} from './password-rule';
import {PasswordValidatorBuilder} from "./password-validator-builder";

export class PasswordValidator {
    public rules: PasswordRule[] = [];

    addRule(rule: PasswordRule): void {
        this.rules.push(rule);
    }

    checkValidation1(password: string): boolean {
        return new PasswordValidatorBuilder()
            .addLengthRule(8)
            .addUppercaseRule()
            .addLowercaseRule()
            .addUnderscoreRule()
            .addNumberRule()
            .build().isValid(password);
    }

    checkValidation2(password: string): boolean {
        return new PasswordValidatorBuilder()
            .addLengthRule(6)
            .addUppercaseRule()
            .addLowercaseRule()
            .addNumberRule()
            .build().isValid(password);
    }

    checkValidation3(password: string): boolean {
        return new PasswordValidatorBuilder()
            .addLengthRule(16)
            .addUppercaseRule()
            .addLowercaseRule()
            .addUnderscoreRule()
            .build().isValid(password);
    }

    isValid(password: string): boolean {
        return this.rules.every(rule => rule.validate(password));
    }
}