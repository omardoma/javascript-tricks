function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.getArea = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            /*
                Problem: this refers to the function wrapping it
                and when we type this here we want to refer to the 
                prototype but will refer to function()
            */
            resolve(this.width * this.height);
        }, 0);
    });
}

Rectangle.prototype.getAreaSelf = function () {
    // Solve the problem by saving a reference to the this we want
    const self = this;
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(self.width * self.height);
        }, 0);
    });
}

Rectangle.prototype.getAreaArrow = function () {
    // Solve the problem by using arrow functions that preserve the original scope
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(this.width * this.height);
        }, 0);
    });
}


const rec = new Rectangle(200, 100);

rec.getArea().then(function (area) {
    console.log(area);
});

rec.getAreaSelf().then(function (area) {
    console.log(area);
});

rec.getAreaArrow().then(function (area) {
    console.log(area);
});