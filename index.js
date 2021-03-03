const registerServices = require("./services/registerServices");
const loginService = require("./services/loginService");
var express = require('express');
var http = require('http');
const dbutility = require("./services/dbutility");
const forgotService = require("./services/forgotService");

//var http = require('url');
//var http = require('http');
var app = express();
var port = process.env.port || 4200;
app.use(express.static(__dirname + '/'));
app.use(express.json());
app.get('/', (req, res) => res.sendFile('/index.html'));

var server = http.createServer(app);
server.listen(port, () => console.log('Asset Naming Assistant Running on : ', port));

app.get('/testEndPoint', function (req, res) {
    var response = {
        "response": "Asset Naming Assistant is running"
    };
    res.json(response);
});


app.get('/testdb', function(req, res) {
    console.log("I'm here");
    dbutility.getInstanceBySiteId()
    .then(function(response){
        console.log(response)
        // res.send(response)
    }).catch(function(error){
        console.log(error);
    })
});

app.post('/login_user', function(req, res){
    loginService.checklogin(req.body)
    .then(function(response){
        console.log(response)
        res.send(response)
    }).catch(function(error){
        console.log(error);
    })
});

app.post('/register_user', function(req, res){
    registerServices.userlogin(req.body)
});


app.post('/forgot_user', function(req, res){
    forgotService.checkforgotusername(req.body)
});


app.get('/sucess_login', function(req, res){
    //forgotService.checkforgotusername(req.body)
    dbutility.get
});

