import Joi from 'joi'

const signUpValidation = Joi.object({
    name: Joi.string().required(),
    email:Joi.string().required(),
    password:Joi.string().required()
})

const loginGoogle = Joi.object({
    code: Joi.string().required()
})


const loginLocalValidation = Joi.object({
    email:Joi.string().required(),
    password:Joi.string().required()
})
  

export default {
    signUpValidation,loginLocalValidation,loginGoogle
}