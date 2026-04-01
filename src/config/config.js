const dotenv=require('dotenv')
dotenv.config()

   if(!process.env.MONGO_URI){
        throw new Error('MONGO_URI is not defined')
    }

    if(!process.env.ACCESS_TOKEN_SECRETE){
        throw new Error('JWT_SECRETE is not defined')
    }

    if(!process.env.REFRESH_TOKEN_SECRETE){
        throw new Error('REFRESH_TOKEN_SECRETE is not defined')
    }
    
    if(!process.env.GOOGLE_CLIENT_ID){
        throw new Error('GOOGLE_CLIENT_ID is not defined')
    }

    if(!process.env.GOOGLE_CLIENT_SECRET){
        throw new Error('GOOGLE_CLIENT_SECRET is not defined')
    }

    if(!process.env.GOOGLE_REFRESH_TOKEN){
        throw new Error('GOOGLE_REFRESH_TOKEN is not defined')
    }

    if(!process.env.GOOGLE_USER){
        throw new Error('GOOGLE_USER is not defined')
    }

const config={
    MONGO_URI:process.env.MONGO_URI,
    ACCESS_TOKEN_SECRETE:process.env.ACCESS_TOKEN_SECRETE,
    REFRESH_TOKEN_SECRETE:process.env.REFRESH_TOKEN_SECRETE,
    GOOGLE_CLIENT_ID:process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET:process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_REFRESH_TOKEN:process.env.GOOGLE_REFRESH_TOKEN,
    GOOGLE_USER:process.env.GOOGLE_USER
}

module.exports=config