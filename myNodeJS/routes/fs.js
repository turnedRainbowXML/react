const express = require('express')
const fs = require('fs')
const path = require('path')

const router = express.Router()

// 写接口
router.get('/index',(req,res) => {
    // 1.使用fs模块的readFile读取public目录下的html文件，第一个参数是文件路径，第二个参数是一个回调函数
    // 2.这里的路径必须使用path模块的join方法进行拼接，第一个参数是__dirname，第二个参数是相对路径
    fs.readFile(path.join(__dirname, '../public/htmls/index.html'),'utf8',(err,data) => {
        if(!err){
            // 2.把读取到的内容返回给前端
            res.send(data)   
        }else{
            console.log(err)
            res.send('后端出错啦')
        }
    })
})

// 新建文件
router.get('/writeFile',(req,res) => {
    // 使用writeFile新建文件，第一个参数是路径，第二个参数是写入的内容，第三个参数是回调函数
    // 如果文件不存在，就新建一个，如果存在，就覆盖里面的内容
    fs.writeFile(path.join(__dirname, '../public/htmls/xiaobu.txt'),'xiaobunihao',(err) => {
        if(!err){
            res.send('新建成功')   
        }else{
            console.log(err)
            res.send('新建失败')
        }
    })
})

// 追加内容
router.get('/appendFile',(req,res) => {
    // 使用appendFile追加内容，第一个参数是路径，第二个参数是写入的内容，第三个参数是回调函数
    fs.appendFile(path.join(__dirname, '../public/htmls/xiaobu.txt'),'\nxiaobunihao2',(err) => {
        if(!err){
            res.send('追加成功')   
        }else{
            console.log(err)
            res.send('追加失败')
        }
    })
})

// 读取文件
router.get('/readFile',(req,res) => {
    // 使用readFile读取内容，第一个参数是路径，第二个参数是utf8，第三个参数是回调函数
    fs.readFile(path.join(__dirname, '../public/htmls/xiaobu.txt'),'utf8',(err,data) => {
        if(!err){
            res.send(data)   
        }else{
            console.log(err)
            res.send('读取失败')
        }
    })
})

// 重命名文件
router.get('/rename',(req,res) => {
    // 使用rename重命名内容，第一个参数是路径，第二个参数是新的名称，第三个参数是回调函数
    fs.rename(path.join(__dirname, '../public/htmls/xiaobu.txt'),path.join(__dirname, '../public/htmls/xiaobu2.txt'),(err) => {
        if(!err){
            res.send('重命名成功')   
        }else{
            console.log(err)
            res.send('重命名失败')
        }
    })
})

// 删除文件
router.get('/unlink',(req,res) => {
    // 使用unlink删除文件，第一个参数是路径，第二个参数是回调函数
    fs.unlink(path.join(__dirname, '../public/htmls/xiaobu2.txt'),(err) => {
        if(!err){
            res.send('删除成功')   
        }else{
            console.log(err)
            res.send('删除失败')
        }
    })
})

// 新建目录：fs.mkdir
router.get('/mkdir',(req,res) => {
<<<<<<< HEAD
    // 使用mkdir新建文件，第一个参数是路径，第二个参数是写入的内容，第三个参数是回调函数
=======
    // 使用mkdir新建目录，第一个参数是路径，第二个参数是回调函数
>>>>>>> 3f0caf0862752a9bcece2df71549c4e088f8b6b5
    fs.mkdir(path.join(__dirname, '../public/htmls/test'),(err) => {
        if(!err){
            res.send('新建成功')   
        }else{
            console.log(err)
            res.send('新建失败')
        }
    })
})

// 读取目录：fs.readdir
<<<<<<< HEAD
router.get('/readdir',(req,res) => {
    // 使用readdir读取内容，第一个参数是路径，第二个参数是utf8，第三个参数是回调函数
    fs.readdir(path.join(__dirname, '../public/htmls'),'utf8',(err,data) => {
        if(!err){
            res.send(data)   
        }else{
            console.log(err)
            res.send('读取失败')
        }
    })
})

// 重命名目录：fs.rename
router.get('/rename',(req,res) => {
    // 使用rename重命名内容，第一个参数是路径，第二个参数是新的名称，第三个参数是回调函数
    fs.rename(path.join(__dirname, '../public/htmls/test'),path.join(__dirname, '../public/htmls/test11'),(err) => {
        if(!err){
            res.send('重命名成功')   
        }else{
            console.log(err)
            res.send('重命名失败')
        }
    })
})

// 删除目录：fs.rmdir
router.get('/rmdir',(req,res) => {
    // 使用rmdir删除文件，第一个参数是路径，第二个参数是删除的内容，第三个参数是回调函数
=======

// 重命名目录：fs.rename

// 删除目录：fs.rmdir
router.get('/rmdir',(req,res) => {
    // 使用rmdir删除目录，第一个参数是路径，第二个参数是回调函数
>>>>>>> 3f0caf0862752a9bcece2df71549c4e088f8b6b5
    fs.rmdir(path.join(__dirname, '../public/htmls/test'),(err) => {
        if(!err){
            res.send('删除成功')   
        }else{
            console.log(err)
            res.send('删除失败')
        }
    })
})
<<<<<<< HEAD
=======

>>>>>>> 3f0caf0862752a9bcece2df71549c4e088f8b6b5
module.exports = router