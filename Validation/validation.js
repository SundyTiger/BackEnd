const Joi = require('joi');
// function validateUser(user)
// {
    // const schema = {
    //     Email:Joi.string().max(50).email().required() ,
    //     PassWord:Joi.string().min(8).required()
    // }
//     return 
// }
const validateUser = Joi.object({
    Email:Joi.string().max(50).email().required() ,
    PassWord:Joi.string().min(8).required(),
    isSuper:Joi.boolean().optional(),
    isPrime:Joi.boolean().optional()
})
const validateAdmin = Joi.object({
    Email:Joi.string().max(50).email().required() ,
    PassWord:Joi.string().min(8).required(),
})

module.exports = {validateUser,validateAdmin};