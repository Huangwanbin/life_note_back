'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/home', controller.home.info);
  router.post('/login', controller.user.userLogin);
  router.get('/get_user_info',controller.user.getUserInfo);
};
