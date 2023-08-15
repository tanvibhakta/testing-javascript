const assert = require("assert");
const jest = require("jest");
const thumbWar = require("../../src/thumb-war");
const utils = require("../../src/utils");

function fn(impl) {

}
const originalGetWinner = utils.getWinner
utils.getWinner = jest.fn((p1, p2) => p1)

/**
 * While our implementation is (presumably) correct, we want to ensure that the implementation of the getWinner function
 * within thumb war is correct as well (for example, if p2 is left out, we don't see a bug as per our current tests)
 */

const winner = thumbWar("Tanvi", "Anu")
assert.strictEqual(winner, "Tanvi")

utils.getWinner = originalGetWinner;