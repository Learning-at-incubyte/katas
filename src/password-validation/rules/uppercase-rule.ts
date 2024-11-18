import {PasswordRule} from '../password-rule';

export class UppercaseRule implements PasswordRule {
    validate(password: string): { status: boolean, reason: string } {
        const isValid = /[A-Z]/.test(password);
        if (!isValid) {
            return {status: isValid, reason: 'Password does not have uppercase letter'};
        }
        return {status: isValid, reason: ''};
    }
}