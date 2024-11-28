import jwt from 'jsonwebtoken';
import config from '../config';
import { ErrorTypes, Request, Response } from '../types';
import response from './response';

export const signToken = (payload: string | object) => jwt.sign(payload, config.JWT_SECRET);
export const verifyToken = (payload: string) => {
  try {
    const decoded = jwt.verify(payload, config.JWT_SECRET);
    return decoded;
  } catch (err) {
    return null;
  }
};

export const decodeToken = (req: Request) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    const user = verifyToken(token);
    return user;
  }

  return null;
};

export const throwInvalidTokenError = (res: Response) => {
  return response(res, 401, 'Invalid Access Token', null, ErrorTypes.Auth);
};
