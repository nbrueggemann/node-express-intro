class Shape {
    constructor(shapeId) {
        this._shapeId = shapeId;
    }

    calculateArea() {
        // Base method should be implmeneted by sub classes
    }

    getShapeId() {
        return this._shapeId;
    }
}

module.exports = Shape;