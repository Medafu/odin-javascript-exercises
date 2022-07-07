const sumAll = function(num1, num2) {
    if ((typeof num1 !== "number" || typeof num2 !== "number") || (num1 < 0 || num2 < 0)) {
        return "ERROR"
    }

    if (num1 > num2) {
        let temp_num1 = num1
        num1 = num2
        num2 = temp_num1
    }

    let result = 0
    for (;num1 <= num2; num1++)  {
        result += num1
    }

    return result
};

// Do not edit below this line
module.exports = sumAll;
