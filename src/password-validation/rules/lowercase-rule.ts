import { PasswordRule } from '../password-rule';

export class LowercaseRule implements PasswordRule {
    validate(password: string): boolean {
        return /[a-z]/.test(password);
    }
}