const Rectangle = function (width, height) {
  this.width = width;
  this.height = height;

  this.draw = function () {
    console.log("I am constructor Pattern");
    console.log(this);
    this.printProperties();
  };

  this.printProperties = function () {
    console.log(`My width is ${this.width}`);
    console.log(`My height is ${this.height}`);
  };
};

const rect = new Rectangle(15, 20);
rect.draw();
