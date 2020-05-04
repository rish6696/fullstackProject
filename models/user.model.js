import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    source:{type:String,required:true},
    name: { type: String, required: true },
    email: { type: String ,unique:true },
    hashPassword:{type:String},
    createdAt: { type: Date, default: Date.now() }
})

export default userSchema