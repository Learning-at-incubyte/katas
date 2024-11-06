export class PasswordValidator {

    isValid(password: string) {
        return password.length > 8
    }
}