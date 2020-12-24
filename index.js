var express = require("express");
var app = express();

const request = require('request');
var bodyParser = require("body-parser");
var fs = require("fs");

app.use(bodyParser.urlencoded({extended: true}));
app.get(bodyParser.json());


app.use(express.static("public"));
app.set("view engine", "ejs");

// var DOMAIN = 'bdcs.net';
// var mailgun = require('mailgun-js')({apiKey: "83911d3790bdace5b6644d09718a88e9-2d27312c-dee54a76", domain: DOMAIN});

app.get("/", function(req,res){
    res.render('index');
});




app.listen(3000, function(){
    console.log("Server has Started!");
})

// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("Server has Started!");
// })
