export interface PasswordRule {
    validate(password: string): boolean;
}