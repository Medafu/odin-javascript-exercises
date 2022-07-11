const getTheTitles = function(array) {
    titles = []
    array.forEach(e => {
        titles.push(e["title"])
    })
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;