const express = require('express')
const multer = require('multer')
const path = require('path')

const router = express.Router()

// 配置图片的存储位置
const storage = multer.diskStorage({
    // 目录
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname,'../public/images/people'))
    },
    // 文件名
    filename: function (req, file, cb) {
        // console.log(file)
        cb(null, Date.now() + '-' + file.originalname)
    }
})

// 实例化
const upload = multer({ 
    storage: storage
})
// .single('人物') // 上传单张
// .array('人物',2) // 最多2张
.any('人物') // 任意张

// 写接口
router.post('/img',(req,res) => {
    upload(req, res,(err) => {
        if(!err){
            // 当只能上传一张
            if(req.file){
                res.send({
                    code: 1,
                    msg: '上传单张成功',
                    url: [`/images/people/${req.file.filename}`]
                })
            }
            // 当上传多张
            else if(req.files){
                // 使用map方法生成新的数组,数组元素只是一个url
                const url = req.files.map(e => `/images/people/${e.filename}`)

                res.send({
                    code: 1,
                    msg: '上传多张成功',
                    url
                })                
            }
        }else{
            console.log(err)
            res.send({
                code: -1,
                msg: '上传失败'
            })
        }
    })    
})

module.exports = router