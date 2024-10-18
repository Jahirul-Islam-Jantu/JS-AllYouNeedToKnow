const Rectangle = function (width, height) { // in Object Oriented programming we make this function in constructor pattern. passes two arguments in parameter and receive them with this.parameter.
    this.width = width;
    this.height = height;
    const position = { // we can abstruct a property in oop concept with declare them in variable not with this keyword. if we use this.position this can be use outside from this block, but if we use a variable to store position this will be the property of this inner scope.
        x: 50,
        y: 40
    }


    const printProperties = function () {
        console.log(`My width is ${this.width}`);
        console.log(`My height is ${this.height}`);
    }.bind(this); // there is a problem if we declare a property in a variable that we can not call object properties with this keyword inside function, to solve this we have to use bind method outside the function to bind this keyword with variable.
    this.draw = function () {
        console.log("I am constructor Pattern");
        console.log("Position is X: " + position.x + " Y:"  + position.y);
        printProperties();
    };


};

const rect = new Rectangle(15, 20);
rect.draw();



