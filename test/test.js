import assert from 'assert'
import { PasswordChecker } from "../src/main.js"

const test1 = () => {
    let password = 'A'
    let pc = new PasswordChecker(password);
    assert.strictEqual(pc.hasUpperCase(), true)
}

const test2 = () => {
    let password = 'a'
    let pc = new PasswordChecker(password);
    assert.strictEqual(pc.hasUpperCase(), false)
}

test1()
test2()