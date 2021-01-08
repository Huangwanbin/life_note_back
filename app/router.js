'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, jwt,controller } = app;
  router.post('/login', controller.user.userLogin);
  router.get('/', jwt, controller.home.index);
  router.get('/home',jwt, controller.home.info);
  router.get('/get_user_info', jwt, controller.user.getUserInfo);
};
