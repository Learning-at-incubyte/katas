
import { PasswordRule } from '../password-rule';

export class NumberRule implements PasswordRule {
    validate(password: string): boolean {
        return /[0-9]/.test(password);
    }
}