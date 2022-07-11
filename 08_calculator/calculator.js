const add = function(num1, num2) {
  return num1 + num2
}

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(...args) {
  let result = 0
  let array = args[0]
  array.forEach((e) => {
    result += e
  })
  return result
};

const multiply = function(...args) {
  let result = 1
  let array = args[0]
  array.forEach((e) => {
    result = result * e
  })
  return result
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num) {
	let result = 1
 
  if (num == 0) {
    return 1
  }

  for (; num > 1; num--) {
    result = result * num
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};