import { PasswordValidator } from './password-validator';
import { PasswordRule } from './password-rule';
import { LengthRule } from './rules/length-rule';
import { UppercaseRule } from './rules/uppercase-rule';
import { LowercaseRule } from './rules/lowercase-rule';
import { NumberRule } from './rules/number-rule';
import { UnderscoreRule } from './rules/underscore-rule';

export class PasswordValidatorBuilder {
    private readonly validator: PasswordValidator;

    constructor() {
        this.validator = new PasswordValidator();
    }

    addLengthRule(minLength: number): PasswordValidatorBuilder {
        this.validator.addRule(new LengthRule(minLength));
        return this;
    }

    addUppercaseRule(): PasswordValidatorBuilder {
        this.validator.addRule(new UppercaseRule());
        return this;
    }

    addLowercaseRule(): PasswordValidatorBuilder {
        this.validator.addRule(new LowercaseRule());
        return this;
    }

    addNumberRule(): PasswordValidatorBuilder {
        this.validator.addRule(new NumberRule());
        return this;
    }

    addUnderscoreRule(): PasswordValidatorBuilder {
        this.validator.addRule(new UnderscoreRule());
        return this;
    }

    build(): PasswordValidator {
        return this.validator;
    }
}