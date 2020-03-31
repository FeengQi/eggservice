'use strict';

const Service = require('egg').Service;
// const fs = require('fs');
const jwt = require('jsonwebtoken');

// var cert = fs.readFileSync(__dirname, 'public.pem');  // get public key

class LoginService extends Service {
  async create(params) {

    const token = jwt.sign(params, '132');

    // this.checkSuccess(result);
    // let bool = jwt.verify(token, '132');

    return {
      status: 'ok',
      type: '',
      token,
      currentAuthority: 'admin',
    };
  }
}

module.exports = LoginService;
