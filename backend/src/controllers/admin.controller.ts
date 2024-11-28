import config from '../config';
import response from '../helpers/response';
import { signToken } from './../helpers/jwt';
import { Response, Request, ErrorTypes } from '../types';

class AdminController {
  static async login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      if (username !== config.ADMIN_USERNAME || password !== config.ADMIN_PASSWORD) {
        return response(res, 400, 'Username or Password is incorrect!', null, ErrorTypes.Auth);
      }
      const token = signToken({ username, password, role: 'admin' });
      return response(res, 201, 'Logged in successfuly', {
        username,
        role: 'admin',
        token,
      });
    } catch (error) {
      response(res, 500, error || error.message, null, ErrorTypes.Server);
    }
  }
}

export default AdminController;
