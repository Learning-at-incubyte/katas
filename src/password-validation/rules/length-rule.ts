import {PasswordRule} from '../password-rule';

export class LengthRule implements PasswordRule {
    constructor(private minLength: number) {
    }

    validate(password: string): { status: boolean, reason: string } {
        const isValid = password.length > this.minLength;
        if (!isValid) {
            return {status: isValid, reason: `Password does not have minimum length ${this.minLength}`};
        }
        return {status: isValid, reason: ''};
    }
}
