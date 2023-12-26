const reverseString = function(string) {
    let newString = "";
    let length = string.length;
    for (length; length >= 0; length--) {
        newString += string.charAt(length);
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
