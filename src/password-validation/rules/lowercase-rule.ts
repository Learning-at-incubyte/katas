import { PasswordRule } from '../password-rule';

export class LowercaseRule implements PasswordRule {
    validate(password: string): { status: boolean, reason: string } {
        const isValid = /[a-z]/.test(password);
        if (!isValid) {
            return { status: isValid, reason: 'Password does not have lowercase letter' };
        }
        return { status: isValid, reason: '' };
    }
}