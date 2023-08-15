const {sum, subtract} = require("../math")

/**
 * This is a little assertion library. While a simple test function like that in the comments works, it isn't the most elegant method.
 * This way is really nice because
 * 1. It is more readable
 * 2. It is  quite extendable
  * @param actual
 * @returns {{toBeEqualTo(*), toBe(*): void}}
 */

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        },
        toBeEqualTo(expected) {
            //     ===
        },
    }
}

// const test = (result, expected) => {
//     if (result !== expected) {
//         throw new Error(`${result} is not equal to ${expected}`)
//     }
// }

let result = sum (3, 7)
let expected = 10
expect(result).toBe(expected)
// test(result, expected)


result = subtract(7, 3)
expected = 4
expect(result).toBe(expected)
// test(result, expected)

