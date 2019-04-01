const expect = require('chai').expect;
const { topKFrequent } = require('../src/topKFrequent');

describe('topKFrequen', () => {
    it('should return single element', () => {
        const nums = [1];
        const k = 1;
        const output = topKFrequent(nums, k);
        expect(output).to.eql([1]);
    });

    it('should return top two most frequent numbers', () => {
        const nums = [1,1,1,2,2,3];
        const k = 2;
        const output = topKFrequent(nums, k);
        expect(output).to.eql([1, 2]);
    });
});