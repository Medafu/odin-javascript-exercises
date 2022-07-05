const repeatString = function(string, number) {
    let save_string = string
    if (number == 0) {
        return ''
    } else if (number < 0) {
        return 'ERROR'
    } else if (string == '') {
        return string
    }
    
    for (let i = 1; i < number; i++) {
        string += save_string
    }
    return string
};

// Do not edit below this line
module.exports = repeatString;
