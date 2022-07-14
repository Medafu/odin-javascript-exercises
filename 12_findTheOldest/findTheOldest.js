const findTheOldest = function(people) {
    ages = []
    let currentYear = new Date().getFullYear()
    for (let i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath === undefined) {
            let age = currentYear - people[i].yearOfBirth
            ages.push(age)
            continue  
        }

        let age = people[i].yearOfDeath - people[i].yearOfBirth
        ages.push(age)
    }
    
    let highest = 0
    let index = null
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] > highest) {
            highest = ages[i]
            index = i
        }
    }

    return people[index]

};

// Do not edit below this line
module.exports = findTheOldest;