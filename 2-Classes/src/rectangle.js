const Shape = require('./shape');

class Rectangle extends Shape {
    constructor(width, height, shapeId) {
        super(shapeId);
        
        this._width = width;
        this._height = height;
    }

    calculateArea() {
        return this._width * this._height;
    }
}

module.exports = Rectangle;