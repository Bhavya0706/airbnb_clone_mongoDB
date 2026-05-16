


const FAVOURITES = require('../models/favourite');
const HOME = require('../models/home');


index = (req,res,next)=>{

 HOME.fatchall().then(registered_homes=>{
    res.render('store/index' , {bhavya_homes : registered_homes , main_title : "index"});
 });
 

}

exports.home = (req,res,next)=>{
    HOME.fatchall().then(registered_homes =>{
        res.render('store/home-list' , {bhavya_homes : registered_homes , main_title : "home"});
    });
}

exports.bookings = (req,res,next)=>{
    res.render('store/bookings' , {main_title : "bookings"});
}

exports.favorites = (req,res,next)=>{
    
        FAVOURITES.get_favourites().then(favourites=>{
         
            favourites = favourites.map(fav => fav.houseid);
            console.log(favourites);
            HOME.fatchall().then(homes =>{
                const favourite_homes = homes.filter((homes) => favourites.includes(homes._id.toString()));
                
                res.render('store/favorite-list' , {bhavya_homes : favourite_homes , main_title : "favourites"});
            })

            
            });
        }

    

exports.postfavorites = (req,res,next)=>{
    
 const fav_id = req.body.id;
 const fav = new FAVOURITES(fav_id);
  fav.save().then(result =>{
    console.log(result);
        
    }).catch(err=>{
   console.log('error in adding the home in favopurites', err);
    }).finally(()=>{
     res.redirect('/favourites');
    })

     
}
exports.postremovefavorites = (req,res,next)=>{
    
 const fav_id = req.params.homeid;
 console.log(fav_id);
 FAVOURITES.delete_by_id(fav_id).then(()=>{
    res.redirect('/favourites')
 })



    
}
exports.home_details = (req,res,next)=>{
    const id = req.params.Dynamic_home_id;

   HOME.find_by_id(id).then(home=> {

    res.render('store/home-detail' , {home : home ,main_title : "home"});
   })
        
  

}

exports.index = index;
