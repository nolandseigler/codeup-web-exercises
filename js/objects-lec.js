(function(){
"use strict"
var myPets = [];

// var myPets = [];
var pet = {
    name: "Toby",
    species: "Dog",
    color: "Yellow",
    weight: 95,
    isHappy: true,
    play: function (toy) {
        return `${this.name} plays with a ${toy}`
    }
}
class Pet {
    constructor (name, species, color, weight, isHappy)  {
        this.name = name;
        this.species = species;
        this.color = color;
        this.weight = weight;
        this.isHappy = isHappy;
        this.fetch = function (toy) {
            return `${this.name} fetches the ${toy}.`
        }
    }
    play(toy) {
        return `${this.name} plays with a ${toy}.`
    }
}
let toby = new Pet("Toby", "Dog", "Yellow", 95, true);
console.log(toby.play("bone"));
var truck = new Object();
var cats = new Array();

truck.make = "Tesla";
truck.model = "CyberTruck";
truck.year = 2022;
truck.goGoGo = function () {
    console.log("*crashes into lightpole");
}
var objects = [
    pet,
    {
        name: "Woofer",
        species: "Dog",
        color: "Brown",
        weight: 150,
        isHappy: false,
        play: function (toy) {
            return `${this.name} plays with a ${toy}`
        }
    },
    {
        name: "Artemis",
        species: "Dog",
        color: "Grey",
        weight: 130,
        isHappy: true,
        play: function (toy) {
            return `${this.name} plays with a ${toy}`
        }
    }
]
objects.forEach(object => console.log(object.name));
console.log(objects[2].play("bone"));
})()