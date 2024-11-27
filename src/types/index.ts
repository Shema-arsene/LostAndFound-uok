import { Request, Response, NextFunction } from 'express';

export { Request, Response, NextFunction };

export interface RequestWithAuthInfo extends Request {
  user?: any;
}

export enum ErrorTypes {
  NotFound = 'NOT_FOUND',
  Conflict = 'CONFLICT_ERROR',
  Server = 'SERVER_ERROR',
  Bad = 'BAD_REQUEST',
  Validation = 'VALIDATION_ERROR',
  Auth = 'AUTHENTICATION_ERROR',
  Forbidden = 'FORBIDDEN',
}
