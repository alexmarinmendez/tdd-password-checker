export class PasswordChecker {
    #pwd

    constructor(pwd) {
        this.#pwd = pwd
    }

    hasUpperCase() {
        let result = false
        for (let i=0; i < this.#pwd.length; i++) {
            if (this.#pwd[i] === this.#pwd[i].toUpperCase()) {
                result = true
                break
            }
        }
        return result
    }
}