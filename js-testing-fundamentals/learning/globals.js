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

global.test = test
global.expect = expect

/**
 * globals can exist in any part of the project, they just need to be defined on the `global` object.
 * convention says that any file that defines globals must _only_ define globals and must also exist in the root of the project.
 * Makes sense.
 */