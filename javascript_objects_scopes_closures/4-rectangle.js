#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    } else {
      // to create an empty object if either w or h
      //is not a positive integer or equal to 0.
      Object.create(null);
    }
  }

  print() {
    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }

  rotate() {
    // to exchange the width and height of the rectangle.
    const temp = this.width;
    this.width = this.height;
    this.height = temp;
  }

  double() {
    // to multiply the width and height of the rectangle by 2.
    this.width *= 2;
    this.height *= 2;
  }
}

module.exports = Rectangle;
