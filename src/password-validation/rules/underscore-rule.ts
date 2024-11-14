import { PasswordRule } from '../password-rule';

export class UnderscoreRule implements PasswordRule {
    validate(password: string): boolean {
        return /_/.test(password);
    }
}