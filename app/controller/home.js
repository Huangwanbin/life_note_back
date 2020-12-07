'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  };
  async info() {
    const { ctx } = this;
    ctx.body = {
      name:"xiaoming",
      age:15,
      id:1
    };
  };
}

module.exports = HomeController;
