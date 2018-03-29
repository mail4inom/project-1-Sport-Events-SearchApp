$(document).ready(function () {
    // var performers = "performers";
var form = $('#form');
function getResults(e) {
    e.preventDefault();
    var queryURL = "https://api.seatgeek.com/2/events?client_id=MTEwMzI0MzR8MTUyMjMzNDkxMy42MQ";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var response = response.events;
        for (var i = 0; i < response.length; i++) {

            var name = response[i].title;
            console.log(name);
            var address = response[i].venue.address;
            console.log(address);
            var img = response[i].performers.url;

            var h3 = $("<h3>").text(name);

            var a = $("<p>").text(address);

            var image = $("<img>");

            image.attr("src", img);

            $(".output").append(h3, a, image);

        }
    })
};

$("#submitSearch").on("click", getResults);
form.on("submit", function(e) {
    e.preventDefault();
});

console.log(form);
});
