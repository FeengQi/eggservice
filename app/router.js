'use strict';

module.exports = app => {
  app.router.resources('top', '/api/v2/topic', 'topics');
  app.router.resources('login', '/api/login/account', 'login');
};
