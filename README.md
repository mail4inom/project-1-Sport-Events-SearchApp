# project-1-weedApp
google map API key: AIzaSyCrU3ELEY-jPyBrFN3FfHOArhn79rzCsvw

#SeatGeak API key: (Client ID) MTEwMzI0MzR8MTUyMjMzNDkxMy42MQ
Secret: 	1a9c.......

Your app secret is:   "1a9c1080cb2339dc3daaa55c51dedf0091851464ce8a389297a030c6c31a748c"

https://api.seatgeek.com/2/events?client_id=MYCLIENTID
******************************************************************************

# SeatGeak events API: https://api.seatgeek.com/2/events?client_id=MTEwMzI0MzR8MTUyMjMzNDkxMy42MQ

******************************************************************************
# Geolocation: https://api.seatgeek.com/2/events?geoip=true
  Example Request: https://api.seatgeek.com/2/events?geoip=98.213.245.205&range=12mi
  Example Response
{
    "meta": {
        "geolocation": {
            "lat": 42.2711,
            "lon": -89.0593,
            "range": "12mi"
        },
        "took": 5,
        "per_page": 10,
        "total": 13320,
        "page": 1
    },
    "events": [
        {...}
    ]
}
**************************************************************************
#Pagination: Definition
GET https://api.seatgeek.com/2/venues?per_page=25&page=3

Example Request
$ curl 'https://api.seatgeek.com/2/venues?per_page=25&page=3'

Example Response
{
    "meta": {
        "took": 5,
        "geolocation": null,
        "per_page": 25,
        "total": 13320,
        "page": 3
    },
    "venues": [
        {...}
    ]
}
****************************************************************