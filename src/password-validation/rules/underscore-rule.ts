import {PasswordRule} from '../password-rule';

export class UnderscoreRule implements PasswordRule {
    validate(password: string): { status: boolean, reason: string } {
        const isValid = /_/.test(password);
        if (!isValid) {
            return {status: isValid, reason: 'Password does not have underscore'};
        }
        return {status: isValid, reason: ''};
    }
}