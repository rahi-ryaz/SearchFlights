
const express=require("express"); 
const bodyParser =require('body-parser');

const {PORT} = require("./config/serverConfig");
const ApiRoutes = require('./routes/index');

 
const setupandStartServer = async () => {

   const app=express();

   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended:true}));

   app.use('/api',ApiRoutes);

   app.listen(PORT, ()=>{
        console.log(`Server Started at ${PORT}`);
    })
}

setupandStartServer();




