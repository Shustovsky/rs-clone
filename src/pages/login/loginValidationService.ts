export class LoginValidator {
    private readonly EMAIL_REGEX = new RegExp(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    );
    private readonly MIN_CHARS = 6;

    public validateEmail(email: string): boolean {
        if (!email) {
            return false;
        }

        return this.EMAIL_REGEX.test(String(email).toLowerCase());
    }

    public validatePassword(password: string): boolean {
        return password.length >= this.MIN_CHARS;
    }

    public validateMatchPassword(password: HTMLInputElement, passwordRepeat: HTMLInputElement): boolean {
        return password.value === passwordRepeat.value;
    }

    public validateInputCheck(input: HTMLInputElement): boolean {
        return input.checked;
    }
}
