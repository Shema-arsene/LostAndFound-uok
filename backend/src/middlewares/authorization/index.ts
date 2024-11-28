import { throwInvalidTokenError } from './../../helpers/jwt';
import { decodeToken } from '../../helpers/jwt';
import response from '../../helpers/response';
import { ErrorTypes, NextFunction, RequestWithAuthInfo, Response } from './../../types/index';

export const isAdmin = async (req: RequestWithAuthInfo, res: Response, next: NextFunction) => {
  req.user = decodeToken(req);
  if (!req.user) {
    return throwInvalidTokenError(res);
  }

  if (req.user.role !== 'admin') {
    return response(res, 403, "You don't have access to do that action", null, ErrorTypes.Forbidden);
  }
  return next();
};
