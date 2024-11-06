export class PasswordValidator {

    isValid(password: string): boolean {
        return this.isLongEnough(password) &&
            this.hasUpperCase(password) &&
            this.hasLowerCase(password) &&
            this.hasNumber(password) &&
            this.hasUnderscore(password);
    }

    private isLongEnough(password: string): boolean {
        return password.length > 8;
    }

    private hasUpperCase(password: string): boolean {
        return /[A-Z]/.test(password);
    }

    private hasLowerCase(password: string): boolean {
        return /[a-z]/.test(password);
    }

    private hasNumber(password: string): boolean {
        return /[0-9]/.test(password);
    }

    private hasUnderscore(password: string): boolean {
        return /_/.test(password);
    }
}