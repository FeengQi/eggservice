'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.resources('top', '/api/v2/topic', 'topics');
  router.resources('login', '/api/login/account', 'login');
  router.resources('users', '/users', controller.users);
};
