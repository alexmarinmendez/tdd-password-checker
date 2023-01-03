export class PasswordChecker {
    #pwd

    constructor(pwd) {
        this.#pwd = pwd
    }

    hasUpperCase() {
        if (this.#pwd === this.#pwd.toUpperCase()) return true
        return false
    }
}