import { PasswordRule } from '../password-rule';

export class UppercaseRule implements PasswordRule {
    validate(password: string): boolean {
        return /[A-Z]/.test(password);
    }
}