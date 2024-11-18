import { PasswordRule } from '../password-rule';

export class NumberRule implements PasswordRule {
    validate(password: string): { status: boolean, reason: string } {
        const isValid = /[0-9]/.test(password);
        if (!isValid) {
            return { status: isValid, reason: 'Password does not have number' };
        }
        return { status: isValid, reason: '' };
    }
}