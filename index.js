const express = require("express");
const https = require("https");

const app = express();


app.get("/", function(req, res){

        const url ="https://api.openweathermap.org/data/2.5/weather?q=satara&appid=5ef7ad0fede34fc42546659a92e8f5fa&units=metric";

        https.get(url , function(response){
            console.log(response.statusCode);
            response.on("data", function(data){
                const weatherData = JSON.parse(data);
                // console.log(weatherData);
                const temp = weatherData.main.temp;
                console.log(temp);
                const description =weatherData.weather[0].description;
                console.log(description);
                const icon = weatherData.weather[0].icon;
                const imgurl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";

                
                res.write("<p>The weather is "+ description +"</p>");
                res.write("<h1>The temprature is " + temp + "C</h1>");
                res.write("<img src = "+imgurl+ ">");
                res.send();
            });
            
        });
        // res.sendFile(__dirname+"/index.html");
});
 




app.listen(3000, function(){
    console.log("Server Started at port 3000");
});
