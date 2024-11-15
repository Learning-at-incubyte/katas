import {PasswordRule} from '../password-rule';

export class LengthRule implements PasswordRule {
    constructor(private minLength: number) {}

    validate(password: string): boolean {
        return password.length > this.minLength;
    }
}