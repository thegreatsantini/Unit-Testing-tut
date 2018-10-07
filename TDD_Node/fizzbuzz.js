const fizzbuzz = (num) => {
    if ( num % 3 === 0 && num % 5 === 0 ) return 'fizzbuzz';
    else if (num % 3 === 0) return 'fizz';
    else if (num % 5 === 0) return 'buzz';
    else return 'Not a multiple of 3 or 5';
}

module.exports = {
    fizzbuzz: fizzbuzz
};