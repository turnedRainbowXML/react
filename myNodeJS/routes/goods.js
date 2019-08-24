const express = require('express')
const Goods = require('../db/model/goods')

const router = express.Router()

// 添加商品
router.post('/add',(req,res) => {
    const {goodsName,goodsImg,goodsPrice,goodsNum,goodsTitle,goodsDesc} = req.body

    Goods.insertMany({
        goodsName,goodsImg,goodsPrice,goodsNum,goodsTitle,goodsDesc
    })
    .then(() => {
        res.send({
            code: 1,
            msg: '新增商品成功'
        })
    })
    .catch(() => {
        res.send({
            code: -1,
            msg: '新增商品失败'
        })
    })
})

// 查询商品，模糊查询
router.post('/search',(req,res) => {
    const {keyword} = req.body

    // 定义一个正则表达式
    const regExp = new RegExp(keyword,'ig')

    Goods.find({
        // 或者
        $or: [
            {
                goodsName: {$regex: regExp}                
            },            
            {
                goodsTitle: {$regex: regExp}                
            },
            {
                goodsDesc: {$regex: regExp} 
            }
        ]       
    })
    .then((data) => {
        res.send({
            code: 1,
            msg: '查询商品成功',
            list: data
        })
    })
    .catch(() => {
        res.send({
            code: -1,
            msg: '查询商品失败'
        })
    })
})

// 商品分页
router.post('/list',(req,res) => {
    let {pageNum,pageSize} = req.body

    pageNum = pageNum-0 || 1
    pageSize = pageSize-0 || 10

    Goods.find({})
    .skip((pageNum-1)*pageSize) // 先跳过前面pageNum-1页数据
    .limit(pageSize) // 再取剩下这一页上的数据
    .then((data) => {
        res.send({
            code: 1,
<<<<<<< HEAD
            msg: '获取商品列表成功',
=======
            msg: '获取商品列表成功啦',
>>>>>>> 3f0caf0862752a9bcece2df71549c4e088f8b6b5
            list: data
        })
    })
    .catch(() => {
        res.send({
            code: -1,
            msg: '获取商品列表失败'
        })
    })
})

// 商品排序
router.post('/sort',(req,res) => {
    const {rank,order} = req.body

    Goods.find({})
    .sort({
        [rank]: order // 升序就是1，降序就是-1
    })
    .then((data) => {
        res.send({
            code: 1,
            msg: '排序成功',
            list: data
        })
    })
    .catch(() => {
        res.send({
            code: -1,
            msg: '排序失败'
        })
    })
})

// 划分价格
router.post('/price',(req,res) => {
    const {start,end} = req.body

    Goods.find({
        // 并且
        $and: [
            {
                goodsPrice: {$gte: start-0}
            },
            {
                goodsPrice: {$lte: end-0}
            }
        ]
    })
    .then((data) => {
        res.send({
            code: 1,
            msg: '划分成功',
            list: data
        })
    })
    .catch(() => {
        res.send({
            code: -1,
            msg: '划分失败'
        })
    })
})

// 商品详情
router.post('/detail',(req,res) => {
    const {goodsId} = req.body

    Goods.find({
        _id: goodsId
    })
    .then((data) => {
        res.send({
            code: 1,
            msg: '获取商品详情成功',
            info: data[0]
        })
    })
    .catch((err) => {
        console.log(err)
        res.send({
            code: -1,
            msg: '获取商品详情失败'
        })
    })
})

// 商品分类
router.post('/type',(req,res) => {
    const {type} = req.body

    Goods.find({
        goodsType: type
    })
    .then((data) => {
        res.send({
            code: 1,
            msg: '商品分类成功',
            list: data
        })
    })
    .catch((err) => {
        res.send({
            code: -1,
            msg: '商品分类失败'
        })
    })
})

// 轮播图
router.post('/swiper',(req,res) => {
    Goods.find()
    .sort({
        goodsNum: -1
    })
    .limit(3)
    .then((data) => {
        res.send({
            code: 1,
            msg: '获取轮播图成功',
            list: data
        })        
    })
    .catch((err) => {
        console.log(err)
        res.send({
            code: -1,
            msg: '获取轮播图失败'
        })
    })    
})

// 商品列表接口,包含模糊查询和分页
router.post('/list2',(req,res) => {
    let {keyword,goodsType,rank,order,start,end,pageNum,pageSize} = req.body

    pageNum = pageNum-0 || 1
    pageSize = pageSize-0 || 10

    // 定义一个带关键字的正则表达式
    const regExp = new RegExp(keyword,'ig')

    // 1.先模糊查询
    Goods.find({
        // 或者
        $or: [
            {
                goodsName: {$regex: regExp}                
            },            
            {
                goodsTitle: {$regex: regExp}                
            }
            // {
            //     goodsDesc: {$regex: regExp} 
            // }
        ]     
    })
    // 2.再分类
    .find(
        (!goodsType && goodsType !== 0) ? {} : {goodsType: goodsType-0}
    )
    // 3.再排序
    .sort(
        !rank ? {} : {[rank]: order}
    )
    // 4.再筛选
    .find({
        // 并且
        $and: [
            !start ? {} : {goodsPrice: {$gte: start-0}},
            // !end ? {} : {goodsPrice: {$lte: end-0}}
            !end ? {} : {goodsPrice: {$lte: end-0}}
        ]
    })
    // 5.最后分页
    .skip((pageNum-1)*pageSize) // 先跳过前面pageNum-1页数据
    .limit(pageSize) // 再取剩下这一页上的数据
    .then((data) => {
        res.send({
            code: 1,
            msg: '获取商品列表成功',
            list: data
        })
    })
<<<<<<< HEAD
    .catch(() => {
=======
    .catch((err) => {
        console.log(err)
>>>>>>> 3f0caf0862752a9bcece2df71549c4e088f8b6b5
        res.send({
            code: -1,
            msg: '获取商品列表失败'
        })
    })
})

module.exports = router