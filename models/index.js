import mongoose from 'mongoose'
import userSchema from './user.model'

function userModel(){
    return mongoose.model('users',userSchema)
}

export default{
    userModel
}