import React, { Component } from 'react'
import styles from './index.module.scss'
import ctx from '@/assets/js/ctx'
import {Modal,Button,Toast} from 'antd-mobile'
import classnames from 'classnames'
import {connect} from 'react-redux'
// import {changeToken} from '@/store/actionCreators'
import { Carousel } from 'antd-mobile'

export class GoodsDetailUI extends Component {
    static contextType = ctx
    constructor() {
        super()

        this.state = {
            id: '',
            info: null,
            isAdd: false,
            buyNum: 1,
            buySku: '',
            cartNum: 0,
            img:[]
            // token: ''
        }
    }
    reqGoodsDetail() {
        // console.log(this.state.id)
        this.context.axios.post('/goods/detail', {
            goodsId: this.state.id
        }).then((res) => {
            const { code, msg, info } = res

            if (code == 1) {
                // console.log(res)
                this.setState({
                    info,
                    img:info.swiperImg
                })
                // console.log(this.info)
            } else {
                alert(msg)
            }
        })
    }
// 请求购物车记录
    reqGoodNum(){
        this.context.axios.post('/cart/list',{
            // token:this.state.token
            token:this.props.token,
            noLogin:true
        })
        .then((res)=>{
            const{code,msg,list}=res
            if(code==1){
                // 这里显示的是购物车的记录的个数，不是商品的数量
                this.setState({
                    cartNum:list.length
                })
            }else{
                alert(msg)
            }
        })
    }
    toHome=()=>{
        this.props.history.push('/home')
    }
    toCartList=()=>{
        this.props.history.push('/cart/list')
    }
    addToCart=()=>{
        // if(!this.state.token){
            if(!this.props.token){
            this.props.history.push('/user/login')
        }else{
            this.setState({
                isAdd:!this.state.isAdd
            })
            // 模拟token失效
            // setTimeout(()=>{
            //     this.setState({
            //         token:''
            //     })
            // },3000)
        }
    }
    hideAdd=()=>{
        this.setState({
            isAdd:false
        })
    }
    chooseSku=(item)=>{
        // 如果没有选择任何规格
        if(!this.state.buySku){
            this.setState({
                buySku:item
            })
        }
        // 选择刚刚已经选择的规格
        else if(this.state.buySku==item){
            this.setState({
                buySku:''
            })
        }
        // 已经选择一个规格，现在选择和之前不一样的规格
        else{
            this.setState({
                buySku:item
            })
        }
    }

    onDecrease=()=>{
        if(this.state.buyNum==1){
            Toast.fail('至少选择一件商品')
        }else{
            this.setState({
                buyNum:this.state.buyNum-1
            })
        }
    }
    onIncrease=()=>{
        this.setState({
            buyNum:this.state.buyNum+1
        })
    }

    onAdd = () => {
        const {id,buySku,buyNum,token} = this.state

        // 校验规格
        if(!buySku){
            Toast.fail('请选择商品规格')
            return 
        }

        // 请求添加到购物车
        this.context.axios.post('/cart/add',{
            goodsId: id,
            buySku,
            buyNum,
            token:this.props.token
        }).then((res) => {
            const {code,msg} = res

            if(code == 1){
                Toast.success(msg)

                // 隐藏向上弹窗
                this.setState({
                    isAdd: false
                })

                // 再次请求获取购物车里面的商品数量
                this.reqGoodNum()
            }else{
                Toast.fail(msg)
            }
        })
    }    

    render() {
        const {info,isAdd,buyNum,buySku,cartNum} = this.state
        const {toHome,addToCart,hideAdd,chooseSku,onDecrease,onIncrease,onAdd,toCartList} = this

        return (
            <>
                {info && <div className={styles.goodsDetail}>
                    <div className={styles.bigImg}><img src={this.context.commonUrl+info.goodsImg} alt="" /></div>
                    {/* {(this.state.img.length != 0) &&
                    <Carousel className="myswiper"  infinite={true}>
                        {
                            this.state.img.map((e, i) => <img src={this.context.commonUrl+e} key={e} alt="轮播图" />)
                        }
                    </Carousel>
                } */}
                    <p className={styles.goodsName}>{info.goodsName}</p>
                    {/* <p className={styles.title}>{info.goodsTitle}</p> */}
                    <p className={styles.desc}>{info.goodsDesc}</p>
                    <p className={styles['price-num']}>
                        <span className={styles.price}>￥{info.goodsPrice}</span>
                        <span className={styles.originalPrice}>￥{info.originalPrice}</span>
                    </p>
                    <div className={styles.describe1}><span className={styles.describe}>{info.describe}</span></div>
                    <div>
                    <img src={require('@/assets/img/2.jpg')} alt="" />
                    <img src={require('@/assets/img/foot.jpg')} alt="" onClick={toCartList}/>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.service} >
                            <img src={require('@/assets/img/logo_07.png')} alt="" />
                            <span>客服</span>
                        </div>

                        <div className={styles.cartNum}>
                            <img src={require('@/assets/img/logo_01_20.png')} alt="" onClick={toCartList}/>
                            <span>购物车</span>
                            {cartNum != 0 && <span className={styles.cartNums}>{cartNum}</span>}
                            </div>
                        <div className={styles.addToCart} onClick={addToCart}>加入购物车</div>
                    </div>

                    <Modal visible={isAdd} popup animationType="slide-up" onClose={hideAdd}>
                        <div className={styles.buyInfo}>
                            <img className={styles.close} src={require('@/assets/img/close.png')} onClick={hideAdd} alt="" />

                            <div className={styles.buySku}>
                                <span className={styles.label}>购买规格：</span>
                                {
                                    info.goodsSkus.map((e, i) => <span className={classnames(styles.sku, { [styles.active]: buySku == e })} key={i} onClick={() => chooseSku(e)}>
                                        {e}
                                    </span>)
                                }
                            </div>

                            <div className={styles.buyNum}>
                                <span className={styles.label}>购买数量：</span>
                                <img src={require('@/assets/img/decrease.png')} onClick={onDecrease} alt="" />
                                <span className={styles.val}>{buyNum}</span>
                                <img src={require('@/assets/img/increase.png')} onClick={onIncrease} alt="" />
                            </div>

                            <button type="primary" onClick={onAdd}>确定</button>
                        </div>
                    </Modal>
                </div>}
            </>
        )
    }

    componentDidMount(){
        // 获取商品ID
        this.setState({
            id: this.props.match.params.id
        },() => this.reqGoodsDetail())
        // 从本地存储中获取token
        // const token = localStorage.getItem('token')
        // const token=this.props.token
        // 将token存入当前组件的state
        // this.setState({
        //     token
        // },() => {
        //     // 一进入详情页，就要请求获取购物车数量
        //     if(this.state.token) this.reqGoodNum()
        // })
        // 一进入详情页，就要请求获取购物车数量
        if(this.props.token) this.reqGoodNum()
    }
}

function mapStateToProps(state){
    return {
        token: state.token.token
    }
}

const GoodsDetailContainer = connect(mapStateToProps)(GoodsDetailUI)

export default GoodsDetailContainer
