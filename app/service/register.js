'use strict';

const Service = require('egg').Service;

class RegisterService extends Service {
  async index(params) {
    const { ctx } = this;
    const { username, password, type } = params;
    const user = await this.ctx.model.User.findAll({
      where: {
        username,
      },
    });
    let bodyContent;
    if (user.length !== 0) {
      bodyContent = {
        status: 200,
        message: '用户名已存在',
      };
      ctx.status = 200;
    } else {
      await ctx.model.User.create({ username, password, type });
      ctx.status = 201;
      bodyContent = {
        status: 201,
        message: '创建成功',
      };
    }
    return bodyContent;
  }
}

module.exports = RegisterService;
