function repeatString(word, number) {
    let string = "";
    if (number < 0) {
        return "ERROR";
    }
    for (let i = 0; i < number; i++) {
        string += word;
    }
    return string
}

// Do not edit below this line
module.exports = repeatString;
