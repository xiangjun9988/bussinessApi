'use strict';

// 路由
module.exports = app => {
  const { router, controller } = app;
  app.get('/', app.controller.home.index);
  app.get('/demo', app.controller.home.demo);
  // 登录接口
  router.post('/login/login', controller.login.login);
  // 根据手机号发送验证码
  router.post('/login/sendCode', controller.login.sendCode);
  // 手机号码注册用户
  router.post('/login/regWithPhone', controller.login.regWithPhone);
  // 根据手机号码登录
  router.post('/login/LoginByPhone', controller.login.LoginByPhone);
  // 邮箱注册用户
  router.post('/login/regWithEmail', controller.login.regWithEmail);
  // 根据邮箱登录
  router.post('/login/LoginByEmail', controller.login.LoginByEmail);
  // 用户名注册用户
  router.post('/login/regUser', controller.login.regUser);
  // 用户根据用户名登录
  router.post('/login/LoginByName', controller.login.LoginByName);

  // 用户的路由信息
  router.get('/user/list', controller.user.list);
  router.get('/user/info', controller.user.userInfo);
  router.get('/user/listByPage', controller.user.getListWithPage);
  router.get('/user/getUserById', controller.user.find);
  router.post('/user/add', controller.user.add);
  router.put('/user/update', controller.user.update);
  router.delete('/user/delete', controller.user.destroy);
  router.get('/shop/list', controller.shop.list);
  router.get('/shopping/list', controller.shopping.list);
};
