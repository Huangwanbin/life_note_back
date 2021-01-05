const Service = require('egg').Service

class UserService extends Service {
    async login (req){
        if (!req.phone.length||!req.password.length) {
            return {
                code: 401,
                msg: '手机号或密码不能为空！'
            }
        }else if (req.phone.length!==11||req.password.length<4||req.password.length>10) {
            return {
                code: 401,
                msg: '手机号或密码长度不正确，请检查！'
            }
        }else if (req.password === '9527') {
            const user = await this.app.mysql.get('user_info',{'phone':req.phone})
            return user ? { code :200, msg: '登陆成功' ,data: user } : { code : 401 ,msg:'用户名不存在，请先注册后再登录！'}
        }else {
            return {
                code: 401,
                msg: '手机号或密码不正确，请检查！'
            }
        }
    };
    async get_user_info (req){
        const { user_id } = req;
        if (!user_id) return { code :401 , msg : '缺少user_id参数标识，请检查后再试!'}
        const user = await this.app.mysql.get('user_info',{'user_id':user_id})
        if (user) return {code :200 , data:user }
        else return { code: 400, msg : '未查找到该用户信息，请注册后再试！'}
    }
}

module.exports = UserService