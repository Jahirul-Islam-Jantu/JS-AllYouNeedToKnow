const rect = function (width, height) {
  return {
    width: width,
    height: height,

    draw: function () {
      console.log("I am a rectangle");
      console.log(this);
      this.printProperties();
    },
    printProperties: function () {
      console.log(`My width is : ${this.width}`);
      console.log(`My height is : ${this.height}`);
    },
  };
};

const rect1 = rect(10, 5);
rect1.draw();

const rect2 = rect(500, 300);
rect2.draw();
