class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Shape {
  constructor(start, end, color = 0, thickness = 1, fillStyle = 1) {
    this.start = start;
    this.end = end;
    this.color = color;
    this.thickness = thickness;
    this.fillStyle = fillStyle;
  }

  draw() {}

  clone() {
    const obj = new Shape(
      this.start,
      this.end,
      this.color,
      this.thickness,
      this.fillStyle
    );
    return obj;
  }
}

class Line extends Shape {
  draw() {
    console.log(
      `Drawing Line from ${this.start.x}:${this.start.y} to ${this.end.x}:${this.end.y}`
    );
  }
}

class Rectangle extends Shape {
  draw() {
    console.log(
      `Drawing Rectangle from ${this.start.x}:${this.start.y} to ${this.end.x}:${this.end.y}`
    );
  }
  // clone() {
  //   return this;
  // }
}

const shapeList = [];
const shape = new Line(new Point(0, 0), new Point(10, 10));
shape.draw();
console.log(shape.clone());
const rectangle = new Rectangle(new Point(0, 0), new Point(20, 20));
rectangle.draw();
const rectangle2 = new Rectangle(new Point(0, 0), new Point(30, 30));
rectangle2.draw();
console.log(rectangle.clone());

shapeList.push(shape);
shapeList.push(rectangle);
shapeList.push(rectangle2);
// console.log("shapeList: ", shapeList);
