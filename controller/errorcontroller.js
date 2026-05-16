exports.E404 = (req,res,next)=> {
 res.status(404).render('404' , {main_title : "Error"});
}