var express = require('express');
var router = express.Router();

/*
<<<<<<< HEAD
模板引擎有很多种，我们这里只教ejs，因为它最简单，如何它的简单性，因为它差不多就是一个html文件，不同之处就是它是动态生成的
2.使用模板引擎之前，要先安装，然后在app.js文件中引入并设置
*/

/* GET home page. */
router.get('/', function(req, res, next) {
  //使用render方法渲染页面

  /*
  1.从views目录中读取一个ejs文件
  2.把json数据插入这个ejs文件
  3.渲染成html并返回给前端
  */
  res.render('index', { title: 'Express' });
=======
	1.模板引擎有很多种，我们这里只教ejs，因为它最简单，如何它的简单性，因为它差不多就是一个html文件，不同之外就是它是动态生成的
	2.使用模板引擎之前，要先安装，然后在app.js文件中引入并设置
*/
router.get('/', function (req, res, next) {
	/*
		1.从views目录中读取一个ejs文件
		2.把json数据插入这个ejs文件
		3.渲染成html并返回给前端
	*/
	res.render('index', {
		title: 'myNodeJS',
		title2: '欢迎来到小布学堂',
		content: '敌军还有30秒到达战场，碾碎他们'
	});
>>>>>>> 3f0caf0862752a9bcece2df71549c4e088f8b6b5
});

module.exports = router;
