const jwt = require('jsonwebtoken')

// 定义一个密钥
const secret = 'qwertyuiop'

// 定义一个用户信息
// const obj = {
//     username: 'xiaobu',
//     password: '123456'
// }

module.exports = {
    // 1.生成token
    createToken(obj){
        // 根据传入的用户信息生成对应的token，过期时间的单位是秒
        return jwt.sign(obj,secret
<<<<<<< HEAD
            // ,{expiresIn: 60 * 60}
            )
=======
           // {expiresIn: 60 * 60}
        )
>>>>>>> 3f0caf0862752a9bcece2df71549c4e088f8b6b5
    },
    // 2.检验token
    checkToken(token){
        // 使用promise对异步操作进行封装
        return new Promise((resolve,reject) => {
            // 检验传上来的token，看它到底代表哪个用户
            jwt.verify(token,secret,(err,data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject('token校验失败')
                }
            })
        })
    }
}