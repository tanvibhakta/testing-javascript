const {sumAsync, subtractAsync} = require("../math")

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        },

    }
}
 async function test(title, callback){
    try {
        await callback();
        console.log(`✅  ${title}`)
    } catch (error) {
        console.error(`❌  ${title}`)
        console.error(error)
    }
}

async function sumTest() {
    const result = await sumAsync(3, 7)
    const expected = 10
    expect(result).toBe(expected)
}

async function subtractTest() {
    const result = await subtractAsync(7, 3)
    const expected = 4
    expect(result).toBe(expected)

}

test("1. Sum adds numbers", sumTest)
test("2. Subtract subtracts numbers", subtractTest)

/**
 * promises must be handled by the testing utility in order to give accurate results
 */