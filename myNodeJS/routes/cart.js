const express = require('express')
const Cart = require('../db/model/cart')
const Goods = require('../db/model/goods')
const jwt = require('../utils/jwt')

const router = express.Router()

// 定义一个全局的username
let username

// 拦截，判断用户是否登录
router.use('/',(req,res,next) => {
    const {token} = req.body

    // 校验token
    jwt.checkToken(token)
    .then((data) => { // 校验成功
        username = data.username

        next()
    })
    .catch(() => { // 校验失败
        res.send({
            code: -2,
            msg: '用户未登录'
        })
    })
})

// 新增
router.post('/add',(req,res) => {
    // 当用户选择完数量之后，把最终的数量传上来，buyNum就是一次性购买的数量
    const {goodsId,buySku,buyNum} = req.body

    // 在购物车集合中找到这个用户的这个商品的添加购物车记录
    Cart.find({
        username,
        goodsId,
        buySku
    })
    .then((data) => {
        if(data.length){ // 如果用户在购物车中添加过这个商品
            // 获取这条购物车数据
            const CartItem = data[0]

            Cart.updateOne(
                CartItem,
                {
                    $set: {buyNum: CartItem.buyNum + buyNum*1}
                }
            )
            .then(() => {
                res.send({
                    code: 1,
                    msg: '添加到购物车成功'
                })
            })
            .catch((err) => {
                console.log(err)
                res.send({
                    code: -1,
                    msg: '添加到购物车失败'
                })
            })            
        }else{ // 如果用户没有在购物车中添加过这个商品
            // 先查找这个商品的信息
            Goods.find({
                _id: goodsId
            })
            .then((data) => {
                // 找到之后，获取这条商品数据
                const goodsItem = data[0]
                
                // 往购物车集合中插入这条数据
                Cart.insertMany({
                    username,
<<<<<<< HEAD
=======

>>>>>>> 3f0caf0862752a9bcece2df71549c4e088f8b6b5
                    goodsId: goodsItem._id,
                    goodsName: goodsItem.goodsName,
                    goodsImg: goodsItem.goodsImg,
                    goodsPrice: goodsItem.goodsPrice,
                    goodsSkus: goodsItem.goodsSkus,
                    goodsNum: goodsItem.goodsNum,
                    goodsTitle: goodsItem.goodsTitle,
                    goodsDesc: goodsItem.goodsDesc,
<<<<<<< HEAD
                    swiperImg:goodsItem.swiperImg,
=======

>>>>>>> 3f0caf0862752a9bcece2df71549c4e088f8b6b5
                    buySku,
                    buyNum                    
                })
                .then(() => {
                    res.send({
                        code: 1,
                        msg: '添加到购物车成功'
                    })
                })
                .catch((err) => {
                    console.log(err)
                    res.send({
                        code: -1,
                        msg: '添加到购物车失败'
                    })
                })
            })            

        }
    })
})

// 获取
router.post('/list',(req,res) => {
    Cart.find({
        username
    })
    .then((data) => {
        res.send({
            code: 1,
            msg: '获取购物车列表成功',
            list: data
        })
    })
    .catch((err) => {
        console.log(err)
        res.send({
            code: -1,
            msg: '获取购物车列表失败'
        })        
    })
})

// 更新
router.post('/update',(req,res) => {
    // 当用户点击加或者减的时候，直接把最终的数量传上来
    const {id,buyNum} = req.body

    Cart.find({
        _id: id
    })
    .then((data) => {
        const cartItem = data[0]

        return Cart.updateOne(
            cartItem,
            {
                $set: {buyNum}
            }
        )
    })
    .then(() => {
        res.send({
            code: 1,
            msg: '更新购物车列表成功'
        })           
    })
    .catch((err) => {
        console.log(err)
        res.send({
            code: -1,
            msg: '更新购物车列表失败'
        })        
    })
})

// 删除
router.post('/del',(req,res) => {
    // id的格式是多个字符串
    const {id} = req.body

     // 将字符串转换成数组
    const id_arr = id.split(',')

    Cart.deleteMany({
        _id: {
            $in: id_arr
        }
    })
    .then(() => {
        res.send({
            code: 1,
            msg: '删除成功'
        })           
    })
    .catch((err) => {
        console.log(err)
        res.send({
            code: -1,
            msg: '删除失败'
        })        
    })
})
<<<<<<< HEAD
// 商品详情
router.post('/detail',(req,res) => {
    const {goodsId} = req.body
    // const id_arr = goodsId.split(',')
    Cart.find({
        _id:{
            $in:goodsId
        }
    })
    .then((data) => {
        res.send({
            code: 1,
            msg: '获取商品详情成功',
            list: data[0]
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
=======
>>>>>>> 3f0caf0862752a9bcece2df71549c4e088f8b6b5

module.exports = router