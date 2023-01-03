import assert from 'assert'
import { PasswordChecker } from "../src/main.js"

const test1 = () => {
    console.log('Test #1')
    let password = 'A'
    let pc = new PasswordChecker(password);
    assert.strictEqual(pc.hasUpperCase(), true)
}

const test2 = () => {
    console.log('Test #2')
    let password = 'aaSaaa'
    let pc = new PasswordChecker(password);
    assert.strictEqual(pc.hasUpperCase(), true)
}

const test3 = () => {
    console.log('Test #3')
    let password = 'aA'
    let pc = new PasswordChecker(password);
    assert.strictEqual(pc.hasUpperCase(), true)
}

test1()
test2()
test3()