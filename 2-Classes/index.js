const Circle = require('./src/circle');
const Rectangle = require('./src/rectangle');

let myCircle = new Circle(3, "My Circle");
let circleArea = myCircle.calculateArea();

let myRectangle = new Rectangle(3, 8, "My Rectangle");
let rectangleArea = myRectangle.calculateArea();

console.log("The area of " + myCircle.getShapeId() + " is: " + circleArea);
console.log("The area of " + myRectangle.getShapeId() + " is: " + rectangleArea);


