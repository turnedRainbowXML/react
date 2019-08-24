/*
	这是一个路由文件，写一个路由文件，一般分4步
*/

// 1.引入express
var express = require('express');
<<<<<<< HEAD
const User=require('../db/model/users')
const jwt = require('../utils/jwt')
=======
>>>>>>> 3f0caf0862752a9bcece2df71549c4e088f8b6b5

// 2.实例化路由，所有这个页面后面所有的操作都是针对router
var router = express.Router();

// 3.写接口，第一个方法是请求方式，有GET和POST
// 第一个参数是请求路径，实际的请求路径是外层路径加上这里的请求路径
// 第二个参数是回调函数，参数分别是请求对象、响应对象和next方法
<<<<<<< HEAD
// router.get('/index', function (req, res, next) {
// 	// 使用解析语法获取GET请求的参数
// 	const { username, sex } = req.query

// 	// 调用res的send方法直接返回一段字符串
// 	// res.send(`hello ${username}`);
// 	res.send(req.query)
// });

// // 添加拦截器
// router.get('/lanjieqi', (req, res, next) => {
// 	const { gift, money } = req.query

// 	if (!gift && !money) {
// 		res.send({
// 			gift: "件数",
// 			money: '数字'
// 		})
// 	} else if (gift && !money) {
// 		res.send('缺少money')
// 	} else if (!gift && money) {
// 		res.send('缺少gift')
// 	} else if (money < 100 && gift < 5) {
// 		res.send('在忙，money要凑够100,礼物要凑够5件')
// 	} else if (gift >= 5 && money < 100) {
// 		res.send('在忙，money要凑够100')
// 	} else if (gift < 5 && money >= 100) {
// 		res.send('在忙，gift要凑够5件')
// 	} else {
// 		next()
// 	}
// }, (req, res) => {
// 	res.send('恭喜你，完成任务')
// })

// // 登录，get请求
// router.get('/login',(req,res)  =>{
// 	const {
// 		username,
// 		password
// 	}=req.query;//包含在路由中每个查询字符串参数属性的对象。如果没有，默认为{}
// 	if(username=='xiaobu' && password=='123456'){
// 		res.send({
// 			code:1,
// 			msg:'登录成功'
// 		})
// 	}else{
// 		res.send({
// 			code:-1,
// 			msg:'登录失败'
// 		})
// 	}
// })

// // 登录，post请求
// router.post('/login',(req,res) =>{
// 	if(username=='xiaobu' && paassword=='123456'){
// 		res.send({
// 			code:1,
// 			msg:'登录成功'
// 		})
// 	}else{
// 		res.send({
// 			code:-1,
// 			msg:'登录失败'
// 		})
// 	}
// })


/**
 * @api {post} /users/register 这只是一个测试POST请求的接口
 * @apiName 注册-POST
=======
router.get('/index', function (req, res, next) {
	// 使用解析语法获取GET请求的参数
	const {username,sex} = req.query

	// 调用res的send方法直接返回一段字符串
	// res.send(`hello ${username}`);
	res.send(req.query)
});

// 添加拦截器
router.get('/hello',(req,res,next) => {
	const {money} = req.query

	if(!money){
		res.send({
			money: '数字'
		})
	}else if(money<100){
		res.send('在忙，下次带money能不能凑够一个毛爷爷')
	}else{
		next()
	}
},(req,res) => {
	res.send('赶紧进来坐吧')
})

/**
 * @api {get} /users/login 只是一个测试GET请求的接口
 * @apiName 登录-GET
>>>>>>> 3f0caf0862752a9bcece2df71549c4e088f8b6b5
 * @apiGroup Users
 *
 * @apiParam {String} username 用户名
 * @apiParam {String} password 密码
 *
 * @apiSuccess {Number} code 状态码
<<<<<<< HEAD
 * @apiSuccess {String} msg 提示信息
 */



// 注册
router.post('/register',(req,res)=>{
	const{username,password}=req.body

	User.find({
		username
	})
	.then((data)=>{
		if(data.length){
			res.send({
				code:-1,
				msg:'用户名存在',
				
			})
		}else{
			return User.insertMany({
				username,
				password
			})
		}
		
	})
	.then((obj)=>{
		if(obj){
			res.send({
				code:1,
				msg:'注册成功'
			})
		}else{
			res.send({
				code:-1,
				msg:'注册失败'
			})
		}
	})
	.catch(()=>{
		res.send({
			code:-1,
			msg:'内部错误'
		})
	})
})


/**
 * @api {post} /users/login 这只是一个测试POST请求的接口
=======
 * @apiSuccess {String} msg  提示信息
 */

// 登录，get请求
router.get('/login',(req,res) => {
	const {username,password} = req.query

	if(username == 'xiaobu' && password == '123456'){
		res.send({
			code: 1,
			msg: '登录成功'
		})
	}else{
		res.send({
			code: -1,
			msg: '登录失败'
		})		
	}
})

/**
 * @api {post} /users/login 只是一个测试POST请求的接口
>>>>>>> 3f0caf0862752a9bcece2df71549c4e088f8b6b5
 * @apiName 登录-POST
 * @apiGroup Users
 *
 * @apiParam {String} username 用户名
 * @apiParam {String} password 密码
<<<<<<< HEAD
 
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg 提示信息
 */


// 登录
router.post('/login',(req,res)=>{
	const{username,password}=req.body

	User.find({
		username,
		password
	})
	.then((data)=>{
		if(data.length){
			const token=jwt.createToken({	//生成一个token
				username,		//存入用户名
				// password		//一般不存密码
			})
			res.send({
				code:1,
				msg:'登录成功',
				token
			})
		}else{
			res.send({
				code:-1,
				msg:'登录失败'//登录失败可能是用户名不存在或者密码错误
			})
		}
	})
	.catch(()=>{
		res.send({
			code:-1,
			msg:'内部错误'
		})
	})
})



// 4.导出整个路由
module.exports = router;
=======
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 */

// 登录，post请求
router.post('/login',(req,res) => {
	const {username,password} = req.body

	if(username == 'xiaobu' && password == '123456'){
		res.send({
			code: 1,
			msg: '登录成功'
		})
	}else{
		res.send({
			code: -1,
			msg: '登录失败'
		})		
	}
})

// 4.导出整个路由
module.exports = router;
>>>>>>> 3f0caf0862752a9bcece2df71549c4e088f8b6b5
