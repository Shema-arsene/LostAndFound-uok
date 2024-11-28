import Joi from 'joi';
import { Response, NextFunction, ErrorTypes } from '../types';
import response from './response';

type JoiSchemaObject = Joi.ObjectSchema<object>;
export default (schema: JoiSchemaObject, toValidate: any, res: Response, next: NextFunction) => {
  const { error } = schema.validate(toValidate);
  return error ? response(res, 422, error.details[0].message, null, ErrorTypes.Validation) : next();
};
