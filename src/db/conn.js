const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/dynamic",{
mongoose.connect("mongodb+srv://the_mukul15:CNuKLNkPStTpKDyL@cluster0.70uifbi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{

}).then(()=>{
    console.log("Connected");
}).catch((error)=>{
    console.log(error);
})