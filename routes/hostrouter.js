const express = require('express');

const hostrouter = express.Router();

const hostcontroller = require('../controller/hostcontroller');



hostrouter.get("/submit-details" , hostcontroller.gett);
hostrouter.post("/submit-details" , hostcontroller.postt);
hostrouter.get("/host-home" , hostcontroller.hosthome);
hostrouter.get("/edithome/:homeid" , hostcontroller.edithome);
hostrouter.post("/edithome" , hostcontroller.postedithome);
hostrouter.post("/delete-home/:homeid" , hostcontroller.postdeletehome);



 

exports.hostrouter = hostrouter;
