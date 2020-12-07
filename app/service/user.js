const Service = require('egg').Service

class UserService extends Service {
    async login (req){
        let userId = '' ,msg = ''
        if (!req.phone.length||!req.password.length) {
            msg = '手机号或密码不能为空！'
            return {
                msg
            }
        }else if (req.phone.length!==11||req.password.length<4||req.password.length>10) {
            msg = '手机号或密码长度不正确，请检查！'
            return {
                msg
            }
        }else if (req.password === '9527'&&req.phone === '18633833248') {
            userId = 1
            return {
                params : req,
                id : userId
            }
        }else if (req.password === '9527'&&req.phone === '18210004974') {
            userId = 2
            return {
                params : req,
                id : userId
            }
        }else {
            msg = '手机号或密码不正确，请检查！'
            return {
                msg
            }
        }
    };
}

module.exports = UserService