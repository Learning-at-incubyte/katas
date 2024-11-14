import {PasswordRule} from './password-rule';

export class PasswordValidator {
    private rules: PasswordRule[] = [];

    addRule(rule: PasswordRule): void {
        this.rules.push(rule);
    }

    isValid(password: string): boolean {
        return this.rules.every(rule => rule.validate(password));
    }
}