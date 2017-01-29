// Use strict mode to prevent changes to global objects
"use strict";

var Shapes = require("./shapes.js");

// the following function takes 5 variables as arguments
// and return a Pentagon Object.
function Pentagon (side1, side2, side3, side4, side5){

	// if the user forgets to add keyword "new"
	// adds the "new" keyword
	if ( !(this instanceof Pentagon) ) {

		return new Pentagon (side1, side2, side3, side4, side5);
		
	}

	//assigns the input argument as properties of an object
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
	this.side5 = side5;
	this.type = "Pentagon";

}

// assigns Pentagon as an instace of shape, while keeping
// same constructor
Pentagon.prototype = new Shapes();
Pentagon.prototype.constructor = Pentagon;

module.exports = Pentagon;