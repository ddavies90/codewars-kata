const { expect } = require("@jest/globals");
const expectExport = require("expect");
const monkeyCount = require("../kata/monkeys");

describe("monkeyCount", () => {
    it ("returns an array counting up from 1 to the amount of monkeys entered", () => {
    expect(monkeyCount(5)).toEqual([1, 2, 3, 4, 5]);
    expect(monkeyCount(3)).toEqual([1, 2, 3]),
    expect(monkeyCount(9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(monkeyCount(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(monkeyCount(20)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    });
});