(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
var planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    var newString = planetsArray.join("<br>");
    console.log(newString);

const arrayToUl = function(inputArr) {
    for (var i = 0; i < inputArr.length; i++) {
        inputArr[i] = "<li>" + inputArr[i] + "</li>";
    }
    inputArr.unshift("<ul>");
    inputArr.push("</ul>");
    return inputArr.join(' ');
}


document.getElementById("planets").innerHTML = arrayToUl(planetsArray);
})();