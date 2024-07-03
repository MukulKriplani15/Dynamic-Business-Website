const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/dynamic",{

}).then(()=>{
    console.log("Connected");
}).catch((error)=>{
    console.log(error);
})