// 98 Church St, Mt Pleasant, SC 29464


mapboxgl.accessToken = mapboxToken;
var restaurantArr = [
    {
    name: "Red's Ice House",
    information: {
        foodType: "Seafood",
        hasAlcohol: true,
        daysOpen: "Open Monday through Saturday",
        hoursOpen: "from 11AM to 2AM",
        location: [-79.881297, 32.792081]
    },
    image: "img/reds.jpg"
},
    {
        name: "The Shelter",
        information: {
            foodType: "American",
            hasAlcohol: true,
            daysOpen: "Open Monday through Saturday",
            hoursOpen: "from 3PM to 2AM",
            location: [-79.879105, 32.791666]
        },
        image: "img/shelter.jpeg"
    },
    {
        name: "Vickery's Bar and Grill",
        information: {
            foodType: "Seafood",
            hasAlcohol: true,
            daysOpen: "Open Monday through Saturday",
            hoursOpen: "from 11AM to 12AM",
            location: [-79.883021, 32.792077]
        },
        image: "img/vickerys.jpeg"

    }
];
// console.log(restaurantArr[1].information.location);
var mapOptions = {
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    zoom: 5
};
var markerOptions = {
        color: "ff0000",
        draggable: false
    }

var map = new mapboxgl.Map(mapOptions);
const markerGen = (restaurantObj) => {
    var marker = new mapboxgl.Marker(markerOptions)
        .setLngLat(restaurantObj.information.location)
        .addTo(map);
    return marker;
};
const popupGen = (restaurantObj, marker) => {
        var popup = new mapboxgl.Popup()
            .setHTML(`<div><h1>${restaurantObj.name}</h1><h2>${restaurantObj.information.daysOpen} ${restaurantObj.information.hoursOpen}</h2><div class="img-container"><img src=${restaurantObj.image}></div></div>`)
            .addTo(map);
        marker.setPopup(popup)
            .togglePopup();
        return popup;
};
restaurantArr.forEach(element => {
    markerGen(element);
    var marker = markerGen(element);
    // map.on('click', function(e) {
        popupGen(element, marker);
    // });
});
// map.on('click', function(e) {
//     popupGen()
// });

// var marker = new mapboxgl.Marker(markerOptions)
//         .setLngLat([-79.881297, 32.792081])
//         .addTo(map);
// map.on('click', function(e) {
//     var popup = new mapboxgl.Popup()
//         .setHTML("Red's Ice House Mount Pleasant SC")
//         .addTo(map);
//     marker.setPopup(popup);
// })
// var marker2 = new mapboxgl.Marker(markerOptions)
//     .setLngLat([-98.489615, 29.426827])
//     .addTo(map);
// map.on('click', function(e) {
//     var popup2 = new mapboxgl.Popup()
//         .setHTML("Codeup: The Premier Career Accelerator in Texas. https://codeup.com")
//         .addTo(map);
//     marker2.setPopup(popup2);
// })


geocode("Red's Ice House Mount Pleasant SC", mapboxToken).then(result => {
    map.setCenter(result);
    console.log(result);
});
var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => map.setStyle('mapbox://styles/mapbox/streets-v9'));
var btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => map.setStyle('mapbox://styles/mapbox/dark-v10'));
var btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => map.setStyle('mapbox://styles/mapbox/satellite-streets-v11'));
var btn4 = document.getElementById("btn4");
btn4.addEventListener("click", () => map.setCenter([-98.489615, 29.426827]));
var btn5 = document.getElementById("btn5");
btn5.addEventListener("click", () => map.setCenter([-79.881297, 32.792081]));
var btn6 = document.getElementById("btn6");
btn6.addEventListener("click", () => {
    map.setCenter([-79.881297, 32.792081]);
    map.setZoom(17);
});
// var btn7 = document.getElementById("btn7");
// btn7.addEventListener("click", () => map.setZoom(map.zoom - 1));

var zoomSelect = document.getElementById("zoom-select");
zoomSelect.addEventListener("change", (event) => {
    var zoomValue = zoomSelect.options[zoomSelect.selectedIndex].value
    map.setZoom(parseInt(zoomValue))
})
// setTimeout(() => {map.setZoom(10)}, 5000);
// // setTimeout(() => {map.setZoom(15)}, 8000);
// // setTimeout(() => {map.setZoom(20)}, 11000);
// // setTimeout(() => {map.setZoom(18)}, 14000);
map.setZoom(17);


// setTimeout(() => {map.zoom = 15;}, 3000);
// setTimeout(() => {map.zoom = 20;}, 3000);
// setTimeout(() => {map.zoom = 15;}, 3000);
// setTimeout(() => {map.zoom = 10;}, 3000);

// //BELOW THIS LINE USES A PROMPT TO DO THE WORK
// var searchQuery = prompt("Where would you like to go?")
// geocode(searchQuery, mapboxToken).then(result => {
//     console.log(result);
//     var mapOptions = {
//         container: 'map',
//         style: 'mapbox://styles/mapbox/streets-v9',
//         zoom: 10,
//         center: result
//     };
//
//     var map = new mapboxgl.Map(mapOptions);
//
//     //recenter the map
//     // map.setCenter(result);
//     // map.setZoom(15);
//     //add a marker
//     var markerOptions = {
//         color: "ff0000",
//         draggable: true
//     }
//     var marker = new mapboxgl.Marker(markerOptions)
//         .setLngLat(result)
//         .addTo(map);
//     var popup = new mapboxgl.Popup()
//         .setHTML(searchQuery)
//         .addTo(map);
//     marker.setPopup(popup);
// });






