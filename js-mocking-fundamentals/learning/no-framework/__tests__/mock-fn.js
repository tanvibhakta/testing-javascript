const thumbWar = require("../../src/thumb-war");
const utils = require("../../src/utils");

/**
 * In jest, mocking happens inside the test itself.
 * Jest as a global is available only wihin the test functions.
 */

test("returns winner", () => {
    const originalGetWinner = utils.getWinner
    utils.getWinner = jest.fn((p1, p2) => p1)

    const winner = thumbWar("Tanvi", "Anu")
    assert.strictEqual(winner, "Tanvi")

    utils.getWinner = originalGetWinner;
})
