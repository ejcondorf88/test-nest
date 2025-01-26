

import * as Joi from 'joi';

export const joinSchemaValidation = Joi.object({
    MONGODB: Joi.string().required(),
   
});