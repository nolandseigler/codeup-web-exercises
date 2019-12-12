(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: null,
        area: null,
        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            this.area = Math.PI * Math.pow(this.radius, 2);
            return this.area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            this.area = doRounding ? Math.round(this.getArea()) : doRounding;
            console.log("Area of a circle with radius: " + this.radius + ", is: " + this.area)
            return this.area;
        }
    };

    // log info about the circle
    // console.log("Raw circle information");
    // circle.logInfo(false);
    // console.log(circle.getArea());;
    // console.log("Circle information rounded to the nearest whole number");
    // circle.logInfo(true);
    circle.radius = 3;
    console.log(circle.getArea());
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    // console.log("Raw circle information");
    // circle.logInfo(false);
    // console.log(circle.getArea());
    // console.log("Circle information rounded to the nearest whole number");
    // circle.logInfo(true);
    console.log(circle.getArea());
    circle.logInfo(true);
})();