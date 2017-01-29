var Shapes = require("./shapes.js");
var Triangle = require("./triangle.js");
var Square = require("./square.js");

var triangle1 = new Triangle(4,3,5);
var square1 = new Square(4);

console.log ("triangle1 instanceof shapes");
console.log (triangle1 instanceof Shapes);
console.log ("");
console.log ("triangle1 instanceof triangle");
console.log (triangle1 instanceof Triangle);
console.log ("");
console.log ("square1 instanceof shapes");
console.log (square1 instanceof Shapes);
console.log ("");
console.log ("square1 instanceof square");
console.log (square1 instanceof Square);
console.log ("");

triangle1.getType();
console.log ("");

square1.getType();
console.log ("");

// console.log(square1.getType);


