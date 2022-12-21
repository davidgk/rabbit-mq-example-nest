import * as Joi from 'joi';

export const envConfigParam = {
  envFilePath: [`.env.${process.env.NODE_ENV || 'local'}`],
  isGlobal: true,
  cache: true,
  validationSchema: Joi.object({
    NODE_ENV: Joi.string().valid('test', 'local', 'dev', 'prod').required(),
    PORT: Joi.number().required(),
  }),
};
