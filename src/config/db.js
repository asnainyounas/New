const mongoose=require('mongoose')
const config=require('./config')

async function coonectDB(){
 
    try{
        await mongoose.connect(config.MONGO_URI)
        console.log('db connected')
    }catch(err){
        console.log(err)
    }
}

module.exports=coonectDB