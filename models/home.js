const { ObjectId } = require('mongodb');
const {getdb} = require('../utils/database');


module.exports = class HOME{
   
        constructor(housename , price , location , photo , ratings ,description , _id){
          
            this.housename = housename;
            this.price = price;
            this.location = location;
            this.photo = photo;
            this.ratings = ratings;
            this.description = description;

            if(_id){

              this._id = _id;
            }

        }
        save(){
          const db = getdb();
          let updatefeilds = {
            housename: this.housename, price : this.price, location: this.location , photo:this.photo , ratings: this.ratings ,description:this.description
          }
          if(this._id){//editing
            return db.collection('homes').updateOne({_id: new ObjectId(String(this._id))},{$set: updatefeilds});


          }else{//inserthome
            
            return db.collection('homes').insertOne(this);

          }

        }

        static fatchall(){
          const db = getdb();
          return db.collection('homes').find().toArray();
        }
        static find_by_id(homeid){
          const db = getdb();
          return db.collection('homes').find({_id: new ObjectId(String(homeid))}).next();
        }
        static delete_by_id(homeid){
          const db = getdb();
          return db.collection('homes').deleteOne({_id: new ObjectId(String(homeid))});
        }

}