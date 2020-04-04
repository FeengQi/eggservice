'use strict';

const Controller = require('egg').Controller;

class RegisterController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.createRule = {
      username: { type: 'string', required: true },
      password: { type: 'string', required: true },
      type: { type: 'string', required: false },
    };
  }

  async index() {
    const { ctx } = this;
    ctx.validate(this.createRule);
    ctx.body = await ctx.service.register.index(ctx.request.body);
  }
}

module.exports = RegisterController;
