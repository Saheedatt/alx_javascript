#!/usr/bin/node
const BaseSquare = require('./5-square');

class Square extends BaseSquare {
  constructor(size) {
    //calling constructor of the parent class using super
    super(size);
  }
  
  charPrint(c) {
    if (c === undefined) {
      c = 'X';
    }

    if (this.width && this.height) {
      for(let i = 0; i< this.height; i++)
      console.log(c.repeat(this.width));
    }
  }
}

module.exports = Square;