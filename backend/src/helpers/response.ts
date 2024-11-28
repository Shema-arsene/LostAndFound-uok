import { ErrorTypes } from './../types/index';
import { Response } from '../types';

export default (res: Response, status: number, message: string, data: any, error?: ErrorTypes) =>
  res.status(status).json(error ? { status, message, error } : { status, message, data });
