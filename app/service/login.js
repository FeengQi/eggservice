'use strict';

const Service = require('egg').Service;
const jwt = require('jsonwebtoken');
var cert = fs.readFileSync(__dirname, 'public.pem');  // get public key

class LoginService extends Service {
  async create(params) {
    // const result = await
    const result = {
      status: 'ok',
      type: '',
      currentAuthority: 'admin',
    };

    var token = jwt.sign(params, cert);

    // this.checkSuccess(result);
    let bool = jwt.verify(token, cert);
    console.log(1111, bool);
    return {
      status: 'ok',
      type: '',
      token: token,
      currentAuthority: 'admin',
    };
  }
}

module.exports = LoginService;
