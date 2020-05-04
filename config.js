import dotenv from 'dotenv'
dotenv.config()
const DB_URL=process.env.DB_URL
const brctyptSalt = process.env.BRCYPT_SALT_ROUND;
const JWT_KEY = process.env.JWT_KEY;


const GoogleClientId= process.env.GOOGLE_CLIENT_ID
const GoogleClientSecret= process.env.GOOGLE_CLIENT_SECRET
const GoggleRedirectUrl= process.env.REDIRECT_URL
const GoogleInfoUrl=process.env.GOOGLE_INFO_URL

export default {
    DB_URL,brctyptSalt,JWT_KEY,GoogleClientId,GoogleClientSecret,GoggleRedirectUrl,GoogleInfoUrl
}