'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.createRule = {
      userName: { type: 'string', required: true },
      password: { type: 'string', required: true },
      type: { type: 'string', required: true },
    };
  }

  async create() {
    const { ctx } = this;
    ctx.validate(this.createRule);
    const obj = await ctx.service.login.create(ctx.request.body);
    ctx.body = obj;
    ctx.status = 201;
  }
}

module.exports = LoginController;
