const mongoose = require('mongoose')

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect('mongodb+srv://ChatApp:Strikemachine3@chatapp.iqsgyfs.mongodb.net/');
         console.log(`mongo db connected:${conn.connection.host}`)
    }catch(error){
       console.log(`Error:${error.message}`);
       process.exit();
    }
};

module.exports = connectDB;

