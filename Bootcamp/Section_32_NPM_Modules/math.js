const add = (x, y) => x+y
const PI = 3.1415926
const square = x => x**2

// args = process.argv.slice(2)

// console.log(square(args[0]))

// Add to exports separately
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

// module.exports object
// module.exports = {
//     add: add,
//     PI: PI,
//     square: square 
// }

// exports is a shortcut for module.exports
exports.add = add;
exports.PI = PI;
exports.square = square;