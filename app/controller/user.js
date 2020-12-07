'use strict';

const Controller = require('egg').Controller

class homeController extends Controller {
    async userLogin (){
        const { ctx,service } = this
        //不好用
        // const createRule = {
        //     phone: { 
        //         type: 'string',
        //         length:11
        //     },
        //     password: { 
        //         type: 'string',
        //         min:4,
        //         max:8
        //     },
        // };
        // ctx.validate(createRule)
        const req = Object.assign(ctx.request.body);
        const res = await service.user.login(req);
        if (res.id) {
            ctx.body= { code : 200 ,msg : '登陆成功',data : res}
            ctx.status = 200
        }else {
            ctx.body= { code : 401 ,msg : res.msg}
            ctx.status = 200
        }

    };
}

module.exports = homeController