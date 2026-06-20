
const express = require('express');
const parser = require('body-parser');
const app = express();
require('dotenv').config();


const userrouter = require('./routes/userrouter');
const {hostrouter} = require('./routes/hostrouter');


const path = require('path');
const rootdir = require('./utils/pathutils')
 


app.set('view engine' , 'ejs');
app.set('views' , 'views');

app.use(express.static(path.join(rootdir , 'public')));

app.use(parser.urlencoded());
app.use(userrouter);
app.use(hostrouter);

const {E404} = require('./controller/errorcontroller');
const {mongoconnect} = require('./utils/database');
app.use(E404);

let port = 3001;
mongoconnect(client =>{
   
    app.listen( port,() =>{
        console.log(`http://localhost:${port}`)
       
    })
})
