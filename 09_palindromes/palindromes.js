const palindromes = function (text) {
    text = text.toLowerCase()
    let array = text.split("")
    let symb_to_del = [" ", ",", ".", "!"]
    for (let i = 0; i < array.length; i++) {
        if (symb_to_del.includes(array[i])) {
            array.splice(i, 1)
            i--
        }
    }
    
    let reverse = array.slice(0)
    reverse.reverse()
    
    if (reverse.length !== array.length) {
        return false
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== reverse[i]) {
            return false
        }
    }

    return true
};

// Do not edit below this line
module.exports = palindromes;

palindromes('Animal loots foliated detail of stool lamina.')