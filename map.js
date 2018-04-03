$(document).ready(function () {

    var latitude, longitude;
    var options = {
        enableHighAccuracy: true,
        maximumAge: 0
    };

    function success(pos) {
        var crd = pos.coords;

        latitude = crd.latitude;
        longitude = crd.longitude;

        console.log('Your current position is:');
        console.log(`Latitude : ${latitude}`);
        console.log(`Longitude: ${longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);

    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options, getCuisines);


    function getCuisines() {
       

        var queryUrl = "https://developers.zomato.com/api/v2.1/geocode?lat=" + latitude + "&lon=" + longitude
        $.ajax({
            url: queryUrl,
            method: "GET",
            headers: {
                "Accept": "application/json",
                "user-key": "6ee815bea30088659eeacc20eaae0d97"
            }
        }).then(function (response) {
            console.log(response);


            for (let i = 0; i < response.nearby_restaurants.length; i++) {
                // console.log(response.)
                var rnewDiv = $("<div>");
                var rname = response.nearby_restaurants[i].restaurant.name;
                var rcuisine = response.nearby_restaurants[i].restaurant.cuisines;
                var rurl = response.nearby_restaurants[i].restaurant.url;
                var raddress = response.nearby_restaurants[i].restaurant.location.address;
                var rpricing = response.nearby_restaurants[i].restaurant.price_range;
                var rrating = response.nearby_restaurants[i].restaurant.user_rating.aggregate_rating;

                var rtitle = $("<h4>").text(rname);
                var rurL = $("<h4>").text(rurl);
                var cuisineType = $("<h4>").text(rcuisine);
                var raddresS = $("<h4>").text("Restaurant Location: "+ raddress);
                var rpricinG = $("<h4>").text("Price Range: " + rpricing);
                var rratinG = $("<h4>").text("Average Customer Rating: " + rrating)

                rnewDiv.append(rtitle, cuisineType, raddresS, rpricinG, rratinG, rurL);
                $("#routput").append(rnewDiv);
            }



        });
    };
    $('#getRestaurants').on('click', getCuisines)
});


