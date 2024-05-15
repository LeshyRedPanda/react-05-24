import Joi from 'joi';

export const postValidator =
Joi
    .object({
        title:Joi.string().required().messages({
            'string.required': 'title cannot be empty', //.required
            'string.empty': 'title cannot be empty', //.empty
        })
            // .pattern()
            // .length()

        ,
        body:Joi.string().required().messages({
            'string.required': 'body cannot be empty',
            'string.empty': 'body cannot be empty'
        }),
        userId:Joi.number().required().min(1).max(10).messages({
            'number.required': 'userId cannot be empty',
            'number.base':'userId must be a number', // .base - only base parameter of field (number/string/)
            'number.min':'userId cannot be lt 1',
            'number.max':'userId cannot be gt 10 '


        })
    })

