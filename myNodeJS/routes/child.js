const express = require('express')
const Child = require('../db/model/children')

const router = express.Router()

// 添加宝贝
router.post('/add',(req,res) => {
    const {username,sex,age} = req.body

    Child.insertMany({
        username,
        sex,
        age
    })
    .then(() => {
        res.send({
            code: 1,
            msg: '新增宝贝成功'
        })
    })
    .catch(() => {
        res.send({
            code: -1,
            msg: '新增宝贝失败'
        })
    })
})

module.exports = router