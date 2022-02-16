const Joi = require("joi");

const validateUser = Joi.object({
  Email: Joi.string().max(50).email().required(),
  PassWord: Joi.string().min(8).required(),
  isSuper: Joi.boolean().optional(),
  isPrime: Joi.boolean().optional(),
});
const validateAdmin = Joi.object({
  Email: Joi.string().max(50).email().required(),
  PassWord: Joi.string().min(8).required(),
});
const validateMovie = Joi.object({
  Title: Joi.string().min(3).required(),
  Name: Joi.string().min(3).required(),
  Lenth: Joi.string().required(),
  Year: Joi.number().required(),
  Stream: Joi.string().required(),
  Geners: Joi.string().required(),
  Certified: Joi.string().required(),
  Language: Joi.string().required(),
  Description: Joi.string().required(),
});
const validateSeries = Joi.object({
  Title: Joi.string().min(3).required(),
  Name: Joi.string().min(3).required(),
  Geners: Joi.string().required(),
  Language: Joi.string().required(),
  Certified: Joi.string().required(),
  Description: Joi.string().required(),
  Channel: Joi.string().required(),
});
module.exports = { validateUser, validateAdmin, validateMovie, validateSeries };
