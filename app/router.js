'use strict';

module.exports = app => {
  const { router, controller, model } = app;
  app.beforeStart(function* () {
    // 初始化表,表字段在model文件夹下
    // yield model.sync({ force: false });
    // 新增表字段的时候，可以
    // yield app.model.queryInterface.addColumn('users', 'type', Sequelize.STRING(30));
  });

  // RESTful 风格的路由 router.verb('router-name', 'path-match', middleware1, ..., middlewareN, app.controller.action);
  router.resources('top', '/api/v2/topic', 'topics');
  router.resources('login', '/api/login/account', 'login');
  router.resources('users', '/users', controller.users);
  // 普通路由 router.verb('path-match', middleware1, ..., middlewareN, app.controller.action);
  router.post('/api/register', controller.register.index);
  router.get('/api/notices', controller.notices.index);
  router.get('/api/currentUser', controller.currentUser.index);
  router.get('/api/fake_chart_data', controller.chartData.index);
  router.get('/api/geographic/province', controller.province.index);
  router.post('/api/upload', controller.upload.index);
};
