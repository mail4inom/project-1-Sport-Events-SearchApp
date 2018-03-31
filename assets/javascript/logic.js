$(document).ready(function () {
    $(".title").hide();
    $("#search").on("click", function (event) {
        $(".black").css("background-color", "white")
        $(".hide").hide();
        $(".title").show();
        $(".output").show();
        $(".output").empty();
        event.preventDefault();
        var searchInput = $("#input").val().trim();
        $("#input").val(" ");
        if (searchInput === "") {
            return;
        }
        var queryURL = "https://api.seatgeek.com/2/events?geoip=true&&range=100mi&q=" + searchInput + "&client_id=MTEwMzI0MzR8MTUyMjMzNDkxMy42MQ";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var response = response.events;

            for (var i = 0; i < response.length; i++) {

                var divRow = $("<div>").addClass("row  jumbo");
                var newDiv = $("<div>").addClass("col-md-6 col-xs-6");
                var newDivImg = $("<div>").addClass("col-md-6 col-xs-6 text-center");


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

                var title = $("<h2>").text(name);
                var addresS = $("<h4>").text(address + " " + city + " " + country + ".");
                var timE = $("<h4>").text(time);
                var placE = $("<h4>").text(place);

                var avPrice = $("<h4>").text("Average price: " + "$" + aPrice);
                var hiPrice = $("<h4>").text("Highest price: " + "$" + hPrice);
                var loPrice = $("<h4>").text("Lowest price: " + "$" + lPrice);

                var tickets = $("<a>");
                tickets.attr("href", url);
                tickets.text("Buy Ticket");
                var showEvents = $("<button>");
                showEvents.append(tickets);
                showEvents.attr("id", "showEvents");

                var image = $("<img>");
                image.attr("src", img);

                newDiv.append(title, placE, addresS, timE, avPrice, hiPrice, loPrice, showEvents);
                newDivImg.append(image);
                divRow.append(newDiv, newDivImg);
                $(".output").append(divRow);

            }
        });

    });

});