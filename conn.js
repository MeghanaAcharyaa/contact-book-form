const mongoose = require("mongoose");
const conn = async () =>{
    try{
        await mongoose.connect("mongodb://localhost:27017/contactt").then(() => {
        console.log("Connected")
        },(error)=> {console.log(error)}) 
    }catch(error){
      console.log(error);
    }
}
conn(); 
