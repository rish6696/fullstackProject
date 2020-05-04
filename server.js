import express from 'express'
import dotenv from 'dotenv'
import route from './routes/index'
import mongoose from 'mongoose'
import config from './config'
import cors from 'cors'
import cookieParser from 'cookie-parser'


const PORT = process.env.PORT||8555;
const app=express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
//app.use(cors())
app.use(cookieParser())


 

mongoose.connect(config.DB_URL)
.then(x=>console.log('mongodb connected successfully'))
.catch(e=>console.log(e))


app.use('/v1',route)

app.use('/',express.static(__dirname+'/client/build'));

app.listen(PORT,x=>console.log(`server started at port ${PORT}`))