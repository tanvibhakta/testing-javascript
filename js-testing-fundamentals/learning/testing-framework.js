const {sum, subtract} = require("../math")

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        },

    }
}

/**
 * This assertion library now works, but
 * 1. it breaks at the first sign of trouble
 * 2. It's not clear which function is causing it to break without digging into the stack trace
 */


function test(title, callback){
    try {
        callback();
        console.log(`✅  ${title}`)
    } catch (error) {
        console.error(`❌  ${title}`)
        console.error(error)
    }
}

function sumTest() {
    const result = sum(3, 7)
    const expected = 10
    expect(result).toBe(expected)
}

function subtractTest() {
    const result = subtract(7, 3)
    const expected = 4
    expect(result).toBe(expected)

}

test("1. Sum adds numbers", sumTest)
test("2. Subtract subtracts numbers", subtractTest)


/**
 * The try catch ensures that the flow of control is not interrupted by the error.
 * This solution doesn't change our stack trace, but it does insist on giving us a better error message,
 * so the developer can help themselves with context.
 */