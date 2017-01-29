// Use strict mode to prevent changes to global objects
"use strict";

var Shapes = require("./shapes.js");

// the following function takes 5 variables as arguments
// and return a Pentagon Object.
function Square (side){

	// if the user forgets to add keyword "new"
	// adds the "new" keyword
	if ( !(this instanceof Square) ) {

		return new Square(side);
	
	}

	//assigns the input argument as properties of an object
	this.side = side;
	this.type = "Square";

}

// assigns Pentagon as an instace of shape, while keeping
// same constructor
Square.prototype = new Shapes();
Square.prototype.constructor = Square;

module.exports = Square;