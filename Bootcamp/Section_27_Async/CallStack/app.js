const multiply = (x,y) => x*y
const square = x => x*x
const isRightTriangle =(a,b,c)=> square(a) + square(b) === square(c)

console.log('Before')
isRightTriangle(3,4,5);
console.log('After')
