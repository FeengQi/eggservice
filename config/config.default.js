/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {
    keys: appInfo.name + '_1585487249749_8990',
    // 配置需要的中间件，数组顺序即为中间件的加载顺序
    // 加载 errorHandler 中间件
    middleware: [ 'authentication', 'errorHandler', 'gzip' ],
    // 配置 errorHandler 中间件的配置
    errorHandler: {
      // match: '/api',
    },
    // 只对 /api 前缀的 url 路径生效
    authentication: {
      match: '/api',
    },
    security: {
      csrf: {
        enable: false,
      },
    },
    sequelize: {
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'egg-sequelize-doc-default',
    },
    // 配置 gzip 中间件的配置
    gzip: {
      threshold: 1024, // 小于 1k 的响应体不压缩
    },
    // multipart: {
    //   mode: 'file',
    // },
  };

  // use for cookie sign key, should change to your own and keep security

  // add your middleware config here
  // config.middleware = [];

  // add your user config here
  const userConfig = {
    // 公私钥匙路径
    priKeyPath: './pri.key',
    pubKeyPath: './pub.key',
    // 跳过鉴权的url
    skipAuthenticationPath: [
      '/api/login/account',
      '/api/register',
      '/api/upload',
    ],
  };

  return {
    ...config,
    ...userConfig,
  };
};
