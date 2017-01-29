// Use strict mode to prevent changes to global objects
"use strict";

var Shapes = require("./shapes.js");

// the following function takes 5 variables as arguments
// and return a Triangle Object.
function Triangle (side1, side2, side3){

	// if the user forgets to add keyword "new"
	// adds the "new" keyword
	if ( !(this instanceof Triangle) ) {

		return new Triangle(side1, side2, side3);
	
	}

	//assigns the input argument as properties of an object
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.type = "Triangle";
	
}

// assigns Triangle as an instace of shape, while keeping
// same constructor
Triangle.prototype = new Shapes();
Triangle.prototype.constructor = Triangle;

module.exports = Triangle;
