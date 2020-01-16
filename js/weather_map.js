(() => {
    'use strict';
    $(document).ready(() => {
        //darksky vars
        const iconsObj = {"clearday": {"icon": Skycons.CLEAR_DAY, "color": "#fcba03"}, "clearnight": {"icon": Skycons.CLEAR_NIGHT, "color": "#fcba03"}, "rain": {"icon": Skycons.RAIN, "color": "blue"}, "snow": {"icon": Skycons.SNOW, "color": "white"}, "sleet": {"icon": Skycons.SLEET, "color": "white"}, "wind": {"icon": Skycons.WIND, "color": "white"}, "fog": {"icon": Skycons.FOG, "color": "white"}, cloudy: {"icon": Skycons.CLOUDY, "color": "grey"}, "partlycloudyday": {"icon": Skycons.PARTLY_CLOUDY_DAY, "color": "#fcba03"}, "partlycloudynight": {"icon": Skycons.PARTLY_CLOUDY_NIGHT, "color": "grey"}};
        //
        //darksky getWeather updates all weather
        const getWeather = function (inputArr) {
            $.ajax(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${DARK_SKY_KEY}/${inputArr[0]},${inputArr[1]}`).done(function(data) {
                let dailyDataArr = data['daily']['data']
                for (let i = 0; i <= 2; i++) {
                    const properMonth = inputDate => {
                        let inputDateArr = (inputDate.split(' '));
                        let monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        switch(inputDateArr[1]) {
                            case "Jan":
                                inputDateArr[1] = monthsArr[0];
                                break;
                            case "Feb":
                                inputDateArr[1] = monthsArr[1];
                                break;
                            case "March":
                                inputDateArr[1] = monthsArr[2];
                                break;
                            case "April":
                                inputDateArr[1] = monthsArr[3];
                                break;
                            case "May":
                                inputDateArr[1] = monthsArr[4];
                                break;
                            case "June":
                                inputDateArr[1] = monthsArr[5];
                                break;
                            case "July":
                                inputDateArr[1] = monthsArr[6];
                                break;
                            case "August":
                                inputDateArr[1] = monthsArr[7];
                                break;
                            case "September":
                                inputDateArr[1] = monthsArr[8];
                                break;
                            case "October":
                                inputDateArr[1] = monthsArr[9];
                                break;
                            case "November":
                                inputDateArr[1] = monthsArr[10];
                                break;
                            case "December":
                                inputDateArr[1] = monthsArr[11];
                                break;
                            default:
                                console.log("Error in switch month function switch") ;
                        };
                        return inputDateArr.join(' ');
                    };
                    //takes in date object and returns proper date format. Example: Sun Jan 13 2020 is returned as Sunday January 13, 2020
                    const properDate = inputDate => {
                        inputDate = inputDate.toDateString();
                        inputDate = properMonth(inputDate);
                        let inputDateArr = (inputDate.split(' '));
                        let datesArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                        switch(inputDateArr[0]) {
                            case "Sun":
                                inputDateArr[0] = datesArr[0];
                                break;
                            case "Mon":
                                inputDateArr[0] = datesArr[1];
                                break;
                            case "Tue":
                                inputDateArr[0] = datesArr[2];
                                break;
                            case "Wed":
                                inputDateArr[0] = datesArr[3];
                                break;
                            case "Thu":
                                inputDateArr[0] = datesArr[4];
                                break;
                            case "Fri":
                                inputDateArr[0] = datesArr[5];
                                break;
                            case "Sat":
                                inputDateArr[0] = datesArr[6];
                                break;
                            default:
                                console.log("Error in switch properDate function switch") ;
                        };
                        inputDateArr[2] = inputDateArr[2] + ',';
                        return inputDateArr.join(' ');
                    };
                    //DATA FROM DARK SKY API
                    let date = properDate(new Date(dailyDataArr[i]['time'] * 1000));
                    let icon = dailyDataArr[i]['icon'];
                    let high = Math.ceil(dailyDataArr[i]['temperatureHigh']);
                    let low = Math.ceil(dailyDataArr[i]['temperatureLow']);
                    let humidity = (parseInt((dailyDataArr[i]['humidity']) * 100)) + '%';
                    let wind = dailyDataArr[i]['windSpeed'];
                    let pressure = dailyDataArr[i]['pressure'];
                    //
                    //Render the html
                    if (i === 0) {
                        $('#today').html(`<div class="card-body m-auto d-flex flex-column align-items-center"><div class="card-title">${date}</div><canvas id="icon1" width="128" height="128"></canvas><div class="card-text" id="today-temps">Temperature: ${high}&deg; / ${low}&deg;</div><div class="card-text" id="today-humidity">Humidity: ${humidity}</div><div class="card-text" id="today-wind">Wind Speed: ${wind}</div><div class="card-text" id="today-pressure">Pressure: ${pressure}</div></div>`);
                        var skyconsToday = new Skycons({"color": iconsObj[icon.split('-').join('')]["color"]});
                        skyconsToday.add("icon1", iconsObj[icon.split("-").join('')]["icon"]);
                        skyconsToday.play();
                    } else if (i === 1) {
                        $('#tomorrow').html(`<div class="card-body m-auto d-flex flex-column align-items-center"><div class="card-title">${date}</div><canvas id="icon2" width="128" height="128"></canvas><div class="card-text" id="tomorrow-temps">Temperature: ${high}&deg; / ${low}&deg;</div><div class="card-text" id="tomorrow-humidity">Humidity: ${humidity}</div><div class="card-text" id="tomorrow-wind">Wind Speed: ${wind}</div><div class="card-text" id="tomorrow-pressure">Pressure: ${pressure}</div></div>`);
                        var skyconsTomorrow = new Skycons({"color": iconsObj[icon.split('-').join('')]["color"]});
                        skyconsTomorrow.add("icon2", iconsObj[icon.split("-").join('')]["icon"]);
                        skyconsTomorrow.play();
                    } else if (i === 2) {
                        $('#day-after').html(`<div class="card-body m-auto d-flex flex-column align-items-center"><div class="card-title">${date}</div><canvas id="icon3" width="128" height="128"></canvas><div class="card-text" id="day-after-temps">Temperature: ${high}&deg; / ${low}&deg;</div><div class="card-text" id="day-after-humidity">Humidity: ${humidity}</div><div class="card-text" id="day-after-wind">Wind Speed: ${wind}</div><div class="card-text" id="day-after-pressure">Pressure: ${pressure}</div></div>`);
                        var skyconsDayAfter = new Skycons({"color": iconsObj[icon.split('-').join('')]["color"]});
                        skyconsDayAfter.add("icon3", iconsObj[icon.split("-").join('')]["icon"]);
                        skyconsDayAfter.play();
                    } else {
                        console.log("error in getWeather");
                    }
                    //
                }
            });
        };
        //
        //mapbox functions
        function geoCenter(search, token) {
            var baseUrl = 'https://api.mapbox.com';
            var endPoint = '/geocoding/v5/mapbox.places/';
            return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
                .then(function(res) {
                    return res.json();
                }).then(function(data) {
                    return data.features[0].center;
                })
        };
        function geoSearch(search, token) {
            var baseUrl = 'https://api.mapbox.com';
            var endPoint = '/geocoding/v5/mapbox.places/';
            return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
                .then(function(res) {
                    return res.json();
                })
                .then(function(data) {
                    return data.features[0]["center"];
                })
                .then(function(result) {
                    return [result[1], result[0]];
                });
        };
        function reverseGeoSearch(coordinates, token) {
            var baseUrl = 'https://api.mapbox.com';
            var endPoint = '/geocoding/v5/mapbox.places/';
            var lng = coordinates[0];
            var lat = coordinates[1];
            return fetch(baseUrl + endPoint + lng + "," + lat + '.json' + "?" + 'access_token=' + token)
                .then(function(res) {
                    return res.json();
                })
                // to get all the data from the request, comment out the following three lines...
                .then(function(data) {
                    return data.features[0].place_name;
                });
        };
        //
        //mapbox vars
        mapboxgl.accessToken = mapboxToken;
        var mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/satellite-streets-v11',
            center: [-98.4936, 29.4241],
            zoom: 5
        };
        var markerOptions = {
            color: "ff0000",
            draggable: true
        };
        const map = new mapboxgl.Map(mapOptions);
        const marker = new mapboxgl.Marker(markerOptions)
            .setLngLat([-98.4936, 29.4241])
            .addTo(map);

        geoCenter("San Antonio, Texas", mapboxToken).then(result => {
            map.setCenter(result);
        });
        //function that fires first and renders all weather
        getWeather([29.4241, -98.4936]);
        //
        //centers map, adds trimmed location data to html, then updates marker, then updates weather
        $('#get-weather-button').click(function() {
            geoCenter($('#city-search-input').val(), mapboxToken).then(result => {
                map.setCenter(result);
                reverseGeoSearch(result, mapboxToken)
                    .then(result => {
                        let location = result.split(',')
                        while (location.length > 3) {
                            location.shift();
                        }
                        location = location.join(', ');
                        $('#location').html(location);
                    });
                marker.setLngLat(result);
            });
            geoSearch($('#city-search-input').val(), mapboxToken)
                .then(result => getWeather(result));
            $('#city-search-input').val('');
        });
        //update info based on new marker location
        marker.on('dragend', (function() {
            let lngLat = marker.getLngLat();
            let searchCoords = [lngLat['lat'], lngLat['lng']];
            getWeather(searchCoords);
            geoCenter([lngLat['lng'], lngLat['lat']], mapboxToken)
                .then(result => {
                    map.setCenter(result);
                    reverseGeoSearch(result, mapboxToken)
                        .then(result => {
                            let location = result.split(',')
                            while (location.length > 3) {
                                location.shift();
                            }
                            location = location.join(', ');
                            $('#location').html(location);
                        });
                });
        }));
    });
})();