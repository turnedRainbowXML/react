import React, { Component } from 'react'
import styles from './index.module.scss'
import ctx from '@/assets/js/ctx'

export class Buy extends Component {
    static contextType=ctx
    constructor(){
        super()

        this.state={
            id:'',
            accountid:[],
            buyid:'',
            list:[],
            name:'',
        }
    }
    reqGoodsDetail() {
        // console.log(typeof  this.state.id,this.state.id)
        
        this.context.axios.post('/cart/detail', {
            goodsId: this.state.id
        }).then((res) => {
            const { code, msg, list } = res
            // console.log(res)
            if (code == 1) {
                this.setState({
                    list:list
                })
            } else {
                alert(msg)
            }
        })
    }
    render() {
        const {list}=this.state
        return (
            <div className={styles.buy}>
                <h2>填写订单</h2>
            <div className={styles.newaddress} >
                <i className={styles.newaddress1}>
                    {/* <img src={require("")} alt="" /> */}
                </i>
                <p>请完善收货地址</p>
                <i className={styles.youjiantou}>
                    {/* <img src={require("")} alt="" /> */}
                </i>
            </div>
            

            <div className={styles.foot1}>
                <ul >
                    <li className={styles.title}>
                        <div>
                            <img src={this.context.commonUrl+list.goodsImg} alt="" />
                        </div>
                        <div>
                            <span className={styles.goodsName}>{(list.goodsName)}</span>
                            <p className={styles.num}>数量：×{list.buyNum}</p>
                        </div>
                        <div>
                            <p className={styles.price}>￥{list.goodsPrice}</p>
                        </div>
                    </li>
                </ul>

                
            </div >

            <ul className={styles.item}>
                <li>
                    <p>订购人信息</p>
                    <span className={styles.item2}>请填写</span>
                    <span className={styles.item1}>
                        {/* <img src={require("")} alt="" /> */}
                    </span>
                </li>
                <li >
                    <p>送达日期</p>
                    <span className={styles.item2}>请选择</span>
                    <span className={styles.item1}>
                        {/* <img src="" alt /> */}
                    </span>
                </li>
                <li className={styles.itemh}>
                    < p > 贺卡留言</p >
                    <span className={styles.itemh1}>填写即赠精美贺卡</span>
                    < span className={
                        styles.itemh2}>
                        {/* <img src="" alt /> */}
                    </span >
                </li >
                <li className={styles.itemh}>
                    < p > 备注 / 优惠券 / 权益卡 / 发票</p >
                    <span className={styles.itemh2}>
                        {/* < img src="" alt /> */}
                    </span >
                </li >
            </ul >

            <div className={styles.account}>
                    < p > 商品总金额</p >
                    <div className={styles.totalPrice}>￥{list.goodsPrice * list.buyNum}</div>
                </div >
        </div >
        )
    }

    componentDidMount(){
        this.setState({
            id: this.props.match.params.id.split(',')
        },() => this.reqGoodsDetail())
        
    }
}

export default Buy
