//> Prototype means making a clone to use
//* when construction is expensive
//* when we don't know type of object

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Shape {
  constructor() {
    this.unique = Math.random();
  }

  createObject() {
    return new Shape();
  }

  clone() {
    const object = this.createObject();
    object.unique = this.unique;
    return object;
  }

  print() {
    console.log("Printing unique : " + this.unique);
  }
}

class Line extends Shape {
  constructor() {
    super();
    this.another = `Math.random- ${Math.random() * 2}`;
  }

  clone() {
    const lineObj = super.clone();
    lineObj.another = this.another;
    return lineObj;
  }

  print() {
    console.log(
      "Printing Unique Line : " + this.unique + " another " + this.another
    );
  }
}

var shape = new Line();
shape.print();
var derivedShape = shape.clone();
derivedShape.print();
