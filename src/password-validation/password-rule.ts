export interface PasswordRule {
    validate(password: string): { status: boolean, reason: string };
}