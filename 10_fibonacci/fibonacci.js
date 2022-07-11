const fibonacci = function(num) {
    let a = 1
    let b = 1

    num = parseInt(num)

    if (num < 0) {
        return "OOPS"
    }

    for (let i = 2; i <= num - 1; i++) {
        let temp_b = b
        b = a + b
        a = temp_b
    }
    return b
};

// Do not edit below this line
module.exports = fibonacci;

console.log(fibonacci(6))