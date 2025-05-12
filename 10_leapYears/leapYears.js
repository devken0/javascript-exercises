function isDivisibleBy(dividend, divisor){
    return dividend % divisor === 0;
}

const leapYears = function(year) {
    if (isDivisibleBy(year, 100) && !isDivisibleBy(year, 400)){
        return false;
    } else if (!isDivisibleBy(year, 4)){
        return false;
    } else return true;
};

// Do not edit below this line
module.exports = leapYears;
