var express=require('express');
var body_parser=require('body-parser');
var request = require('request').defaults({json:true});
var app=express();
var register=require('/register'); 
app.post('/register',register.test);
var server = app.listen(8080,function(){
    var host="127.0.0.1";
    var port="8080";
    console.log("App is listening at http://%s:%s\n",host,port);
});