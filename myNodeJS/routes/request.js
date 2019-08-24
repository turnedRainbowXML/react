var express = require('express');
var request = require('request');
var router = express.Router();

// 请求百度
router.get('/baidu', function (req, res, next) {
    // 直接把request当成方法来用
    // 如果使用GET请求，第一个参数是请求路径，第二个参数是回调函数
    request('http://www.baidu.com',(err,response,body) => {
        if(!err){
            // body就是html字符串
            res.send(body)
        }else{
            res.send('请求百度失败')
        }
    })
});

module.exports = router;
