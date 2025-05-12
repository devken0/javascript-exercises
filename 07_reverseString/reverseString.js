const reverseString = function(myString) {
    let char, result = "";
    for (i = 1; i <= myString.length; i++){
        result += myString.at(-i);
    }
    return result;
};



// Do not edit below this line
module.exports = reverseString;
