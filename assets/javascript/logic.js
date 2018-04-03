$(document).ready(function () {
    $(".title").hide();
    $(".alert").hide();
    $("#search").on("click", function (event) {
        $(".black").css("background-color", "white")
        $(".hide").hide();
        $(".title").show();
        $(".output").show();
        $(".output").empty();
        event.preventDefault();
        var postalCode = "postal_code";
        var geolocation = "geoip=true";
        var searchInput = $("#input").val().trim();
        var zipCode = $("#zipCode").val().trim();
        $("#zipCode").val(" ");
        $("#input").val(" ");
        if (searchInput === "" ) {
           
            $(".hide").show();
           $(".title").hide();
            return;
        }
        if (zipCode === ""){

            $(".alert").show();
           $(".hide").show();
           $(".title").hide();
           zipCode = geolocation;
        }else{
            $(".alert").hide();
        }
        var queryURL = "https://api.seatgeek.com/2/events?postal_code="+zipCode+"&range=100mi&q=" + searchInput + "&client_id=MTEwMzI0MzR8MTUyMjMzNDkxMy42MQ";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var response = response.events;

            for (var i = 0; i < response.length; i++) {

                var divRow = $("<div>").addClass("row  jumbo");
                var newDiv = $("<div>").addClass("col-md-6 col-xs-6");
                var newDivImg = $("<div>").addClass("col-md-6 col-xs-6");


                var name = response[i].title;

                var address = response[i].venue.address;
                var city = response[i].venue.extended_address;
                var country = response[i].venue.country;
                var time = response[i].datetime_local;
                var place = response[i].venue.name;

                var aPrice = response[i].stats.average_price;
                var hPrice = response[i].stats.highest_price;
                var lPrice = response[i].stats.lowest_price;
                var url = response[i].url;

                time = new Date(time);

                aPrice = aPrice.toFixed(2);
                hPrice = hPrice.toFixed(2);
                lPrice = lPrice.toFixed(2);

                var img = response[i].performers[0].images.huge;

                if (img === undefined) {
                    img = "assets/images/image5.jpeg";
                }

                var title = $("<p>").text(name);
                title.addClass("eventName")
                var addresS = $("<p>").text(address + " " + city + " " + country + ".");
                var timE = $("<p>").text(time);
                var placE = $("<p>").text(place);
                placE.addClass("place");

                var avPrice = $("<p>").text("Average price: " + "$" + aPrice);
                var hiPrice = $("<p>").text("Highest price: " + "$" + hPrice);
                var loPrice = $("<p>").text("Lowest price: " + "$" + lPrice);

                var tickets = $("<p>");
                var showEvents = $("<a>");
                showEvents.addClass("btn btn-primary button")
                showEvents.attr("href", url);
                showEvents.text("Buy Ticket");

                tickets.append(showEvents);

                tickets.attr("id", "showEvents");

                var image = $("<img>");
                image.addClass("apiImage")
                image.attr("src", img);

                newDiv.append(placE, addresS, timE, avPrice, hiPrice, loPrice, tickets);
                newDivImg.append(title, image);
                divRow.append(newDivImg, newDiv);
                $(".output").append(divRow);
                }
                    
        });

    });

});