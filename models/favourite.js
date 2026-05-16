const { home_details } = require("../controller/usercontroller");
const { getdb } = require("../utils/database");



module.exports = class FAVOURITES{
       constructor(houseid){
          
              this.houseid = houseid;  }



        save(){
              const db = getdb();
              return db.collection('favourites').insertOne(this);


 }
        
 static get_favourites(){
       const db = getdb();
       return db.collection('favourites').find().toArray();
}
        
static delete_by_id(id , callback){   
    const db = getdb();
          return db.collection('favourites').deleteOne({houseid: id});
 }
} 