import {PasswordRule} from './password-rule';
import {PasswordValidatorBuilder} from "./password-validator-builder";

export class PasswordValidator {
    public rules: PasswordRule[] = [];
    public reasonOfFailure: string[] = [];

    addRule(rule: PasswordRule): void {
        this.rules.push(rule);
    }

    checkValidation1(password: string): { status: boolean, reason: string[] } {
        const isValid = new PasswordValidatorBuilder()
            .addLengthRule(8)
            .addUppercaseRule()
            .addLowercaseRule()
            .addUnderscoreRule()
            .addNumberRule()
            .build().isValid(password);

        return {status: isValid, reason: this.reasonOfFailure};
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

    private isValid(password: string): boolean {
        for (const rule of this.rules) {
            const {status, reason} = rule.validate(password);
            if (!status) {
                this.reasonOfFailure.push(reason);
            }
        }
        return this.reasonOfFailure.length <= 0;
    }
}