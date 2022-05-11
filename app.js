const express = require("express");
const app = express();
const port = 3000;

const https = require("https");

const apiKey = "0c2b596c09985c396d056af4cd286574"
const lat = "35";
const lon = "139";
const api = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;

app.get("/", function (req, res) {
    https.get(api, function(response){
        //console.log(response.statusCode);
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temperature = weatherData.main.temp;
            console.log(temperature);

            res.write("<h1> Shuzenji's temperature is " + temperature + "</h1>")
            res.send();
        });
        //res.send("Server is running");
    });
});

app.listen(port, function () {
    console.log("Server is running on port" + port + ".");
});

