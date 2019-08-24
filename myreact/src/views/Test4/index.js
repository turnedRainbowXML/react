import React, { Component } from 'react'
import styles from './index.module.scss'
import {changeCartList} from '@/store/actionCreators.js'
import {connect} from 'react-redux'

/*
    react-redux规定，每个组件分两部分：UI组件和Container组件
    UI组件负责展示props，不包含任何redux的API
    Container组件负责处理逻辑，包含各种redux的API
*/

export class Test4UI extends Component {
    constructor(){
        super()

        this.state = {
            goodsList: [
                {id: 1,name: '热干面',price: 4.5},
                {id: 2,name: '酱香饼',price: 5},
                {id: 3,name: '烧麦',price: 6},
                {id: 4,name: '绿豆沙',price: 2},
                {id: 5,name: '拿铁',price: 15}
            ]
        }
    }

    get cartTotal(){
        return this.props.cartList.reduce((prevTotal,currItem) => {
            return prevTotal + currItem.price*currItem.num
        },0)
    }

    render() {
        const {goodsList} = this.state
        const {cartList,addToCart} = this.props
        const {cartTotal} = this

        return (
            <div>
                <div>
                    <p>商品列表：</p>
                    {goodsList.map(e => (
                        <div className={styles.cell} key={e.id}>
                            <span className={styles.name}>{e.name}</span>
                            <span className={styles.price}>价格：￥{e.price}</span>
                            <button onClick={() => addToCart(e)}>添加到购物车</button>
                        </div>
                    ))}
                </div>

                <hr />

                <div>
                    <p>购物车列表：</p>
                    {cartList.map(e => (
                        <div className={styles.cell} key={e.id}>
                            <span className={styles.name}>{e.name}</span>
                            <span className={styles.price}>价格：￥{e.price}</span>
                            <span className={styles.num}>数量：{e.num}</span>
                        </div>
                    ))}
                </div>

                <hr />
                <div>结算总价：{cartTotal}</div>
            </div>
        )
    }
}

// 将仓库中的state中的参数映射到当前组件的props中
function mapStateToProps(state){
    console.log('state',state)

    return {
        cartList: state.cart.cartList
    }
}

// 将仓库中包含dispatch方法的函数映射到当前组件的props中
function mapDispatchToProps(dispatch){
    return {
        addToCart: (item) => {
            return  dispatch(changeCartList(item))
        }
    }
}

// 使用connect方法，连接UI组件和映射过来的props，生成一个Container组件
const Test4Container = connect(mapStateToProps,mapDispatchToProps)(Test4UI)

// 导出Container组件
export default Test4Container
