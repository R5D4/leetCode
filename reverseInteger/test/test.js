const expect = require('chai').expect;
const { reverse } = require('../src/reverse');

describe('reverse', () => {
    it('should return 321 for input 123', () => {
        const x = 123;
        const reversed = reverse(123);
        expect(reversed).to.equal(321);
    });
});