const sumAll = function(first, second) {
    let sum = 0;
    let start;
    let end;
    if (typeof first ==="number" &&
    typeof second ==="number" &&
    (first >= 0 && second >= 0)) {
        console.log("I CAN WORK WITH THIS: " + second)
        if (first < second) {
            start = first;
            end = second;
        }
        else {
            start = second;
            end = first;
        }

        for (start; start <= end; start++) {
            sum += start;
        }
        console.log(sum);
        return sum;
    }
    else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
