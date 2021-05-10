const { isValidWalk } = require("../kata/takeATenMinuteWalk");

const isTrue = [
    ['n','s','n','s','n','s','n','s','n','s'],
    ['e','w','e','w','n','s','n','s','e','w'],
    ['n','s','e','w','n','s','e','w','n','s'],
    ['n','n','n','s','s','s','e','w','n','s']
];

const isFalse = [
    ['n'],
    ['n','s'],
    ['n','s','n','s','n','s','n','s','n','s','n','s'],
    ['n','s','e','w','n','s','e','w','n','s','e','w','n','s','e','w'],
    ['n','s','n','s','n','s','n','s','n','n'],
    ['e','e','e','w','n','s','n','s','e','w'], 
    ['n','e','n','e','n','e','n','e','n','e'],
    ['n','w','n','w','n','w','n','w','n','w'],
    ['e','s','e','s','e','s','e','s','e','s'],
    ['w','s','w','s','w','s','w','s','w','s']
];

describe("isValidWalk", ()=> {
    it("returns true if the walk in the array takes exactly 10 minutes and ends up back where you started. Assuming one instance in the array is a direction and the length of one block and takes one minute to complete", () => {
        expect(isValidWalk(isTrue[0])).toBe(true);
        expect(isValidWalk(isTrue[1])).toBe(true);
        expect(isValidWalk(isTrue[2])).toBe(true);
        expect(isValidWalk(isTrue[3])).toBe(true);
    });
    it('returns false when the walk does not take exactly 10 minutes', () => {
        expect(isValidWalk(isFalse[0])).toBe(false);
        expect(isValidWalk(isFalse[1])).toBe(false);
        expect(isValidWalk(isFalse[2])).toBe(false);
        expect(isValidWalk(isFalse[3])).toBe(false);
    });
    it('returns false when walk takes 10 minutes but you do not end up back where you started', () => {
        expect(isValidWalk(isFalse[4])).toBe(false);
        expect(isValidWalk(isFalse[5])).toBe(false);
        expect(isValidWalk(isFalse[6])).toBe(false);
        expect(isValidWalk(isFalse[7])).toBe(false);
        expect(isValidWalk(isFalse[8])).toBe(false);
        expect(isValidWalk(isFalse[9])).toBe(false);
    });
});