const expect = require('chai').expect;
const { removeDuplicates } = require('../src/removeDuplicates');

describe('removeDuplicates', () => {
    it('should remove one duplicate number in given array', () => {
        let nums = [1, 1, 2];
        const newLength = removeDuplicates(nums);
        expect(nums.slice(0, newLength)).to.eql([1, 2]);
        expect(newLength).to.equal(2);
    });
});