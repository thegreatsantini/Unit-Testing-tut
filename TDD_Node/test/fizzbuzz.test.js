const expect = require('chai').expect;
const fizzbuzz = require('../fizzbuzz').fizzbuzz;

const checkFizzBuzz = (input, expected) => {
    const result = fizzbuzz(input);
    expect(result).to.equal(expected);
}

describe('Testing FIZZBUZZ', () => {
    it('should return fizz with 3', (done) => {
        checkFizzBuzz(3, 'fizz');
        done();
    });
    it ('Should return buzz with 5', (done)=> {
        checkFizzBuzz(5, 'buzz');
        done();
    })
    it('should return fizzbuzz with 15', (done)=> {
        checkFizzBuzz(15, 'fizzbuzz');
        done();
    })
    it("should return 'Not a multiple of 3 or 5' with 23", (done)=> {
        checkFizzBuzz(23, 'Not a multiple of 3 or 5');
        done();
    })
})