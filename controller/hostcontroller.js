
const HOME = require("../models/home");

const postt =  (req,res,next)=>{
    const home = new HOME(req.body.homename , req.body.homeprice , req.body.location , req.body.photo , req.body.ratings , req.body.description);
    home.save().then(()=>{
      console.log('home saved successfully');
    })
    res.redirect('/host-home');
  
    }
exports.postedithome =  (req,res,next)=>{
   
  const home = new HOME(req.body.homename , req.body.homeprice , req.body.location , req.body.photo , req.body.ratings , req.body.description , req.body.id);
   
  home.save();
  res.redirect('/host-home');
  
    }

exports.postdeletehome =  (req,res,next)=>{
  const homeid = req.params.homeid;

  HOME.delete_by_id(homeid).then(() => {
    res.redirect('/host-home');
  }).catch(error=>{
    console.log(error);
  })
 
  
    }

    const gett = (req,res,next)=>{
        res.render('host/edit-home.ejs' , {main_title : "Registration" , editing : false});
    }
    exports.edithome = (req,res,next)=>{
      const homeid = req.params.homeid;
      const editing = req.query.editing === 'true'; 
     
      HOME.find_by_id(homeid).then(home => {
        if(!home){
          console.log("home not found for editing");
          return res.redirect("/host-home")
        }
        res.render('host/edit-home.ejs' , {home:home , main_title : "hosthome" , editing : editing});
      })
    }

    
exports.hosthome = (req,res,next)=>{
  HOME.fatchall().then(registered_homes=>{

    res.render('host/hosthome-list' , {bhavya_homes : registered_homes, main_title : "hosthome"});
  });
}

    exports.postt = postt;
    exports.gett = gett;