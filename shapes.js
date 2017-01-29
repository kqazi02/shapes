"use strict";

function Shapes(shapeType) {

	if(!(this instanceof Shapes)){

		return new Shapes(shapeType);

	}

	this.type = shapeType;
	
}

Shapes.prototype.getType = function() {

	console.log ("This is a " + this.type);

}

module.exports = Shapes;
