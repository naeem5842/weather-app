const express = require("express");
const https = require("https");

const app = express();


app.get("/", function(req, res){

        const url ="https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=5ef7ad0fede34fc42546659a92e8f5fa&units=metric";

        https.get(url , function(response){
            console.log(response);
        });
        res.sendFile(__dirname+"/index.html");
});
 




app.listen(3000, function(){
    console.log("Server Started at port 3000");
});
