'use strict';

const Controller = require('egg').Controller

class homeController extends Controller {
    async userLogin (){
        const { ctx,service,app } = this
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
        let {code , msg ,data} = res
        if (code == 200) {
            const token = app.jwt.sign({
                nick_name :req.phone
            }, app.config.jwt.secret, {
                expiresIn: '60s',
             });
            ctx.body= { code ,msg ,data ,token}
        }else {
            ctx.body= { code ,msg ,data }
        }
        ctx.status = code
    };
    async getUserInfo (){
        const { ctx , service } = this;
        const req = Object.assign(ctx.request.query);
        const res = await service.user.get_user_info(req);
        let { code , msg , data} = res;
        ctx.body = {code , data , msg};
        ctx.status = 200;
    };
}

module.exports = homeController