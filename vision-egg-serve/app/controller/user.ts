import { Controller } from 'egg';

class UserController extends Controller {
  async user() {
    const { ctx } = this;
    ctx.body = {
      msg: 'ok',
      status: '200',
    };
  }
  async login() {
    const { ctx } = this;
    ctx.body = ctx;
  }
}

export default UserController;
