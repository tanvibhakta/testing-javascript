const assert = require("assert");
const thumbWar = require("../../src/thumb-war");
const utils = require("../../src/utils");

const originalGetWinner = utils.getWinner
// the monkey patch
utils.getWinner = (p1, p2) => p1

const winner = thumbWar("Tanvi", "Anu")
assert.strictEqual(winner, "Tanvi")

/**
 * TIL that you can override the methods of modules used inside functions by redeclaring them outside the place the
 * parent function will be called. However, as expected, this would only work if the module as a whole was being imported
 * its methods were being used, because it is the named methods that are directly being overridden.
 */

//  the clean up
utils.getWinner = originalGetWinner;