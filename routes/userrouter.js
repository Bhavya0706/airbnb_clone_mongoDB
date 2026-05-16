const express = require('express');
const {index} = require('../controller/usercontroller');
const usercontroller = require('../controller/usercontroller')
const userrouter = express.Router();




userrouter.get("/" , index);
userrouter.get("/bookings" , usercontroller.bookings);
userrouter.get("/home-list" , usercontroller.home);
userrouter.get("/favourites" , usercontroller.favorites);
userrouter.post("/favourites" , usercontroller.postfavorites);
userrouter.get("/home-list/:Dynamic_home_id" , usercontroller.home_details);
userrouter.post("/favourites/:homeid" , usercontroller.postremovefavorites);

module.exports = userrouter;