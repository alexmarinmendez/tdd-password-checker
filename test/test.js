import assert from 'assert'
import { PasswordChecker } from "../src/main.js"

let password = 'A'
let pc = new PasswordChecker(password);
assert.strictEqual(pc.hasUpperCase(), true)