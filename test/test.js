import chai, { expect } from 'chai'
import words from '../src/main.js'


describe('Words', () => {

  it("should return {olly: 2, in: 1, come: 1, free: 1}", () => {
    const expectedResult = {olly: 2, in: 1, come: 1, free: 1};
    expect(words('olly olly in come free')).to.deep.equal(expectedResult);
  });

});



