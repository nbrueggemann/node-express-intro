const Shape = require('./shape');

class Circle extends Shape {
    constructor(radius, shapeId) {
        super(shapeId);

        this._radius = radius;
    }

    calculateArea() {
        return Math.PI * (Math.pow(this._radius, 2));
    }
}

module.exports = Circle;