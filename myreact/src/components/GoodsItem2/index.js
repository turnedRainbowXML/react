import React, { Component } from 'react'
import styles from './index.module.scss'
import ctx from '@/assets/js/ctx'
import { withRouter } from 'react-router-dom'

@withRouter

class GoodsItem extends Component {
    static contextType = ctx

    toDetail = (id) => {
        this.props.history.push('/goods/detail/' + id)
    }

    render() {
        const { itemInfo } = this.props

        return (
                <ul className={styles.goodsItem} onClick={() => this.toDetail(itemInfo._id)}>
                    <li>
                        <i><img src={itemInfo.src} alt="" /></i>
                        <p className={styles.goodsName}>{itemInfo.goodsName}</p>
                        <p className={styles.price}>￥{itemInfo.goodsPrice}</p>
                    </li>
                </ul>
        )
    }
}

// export default withRouter(GoodsItem)
export default GoodsItem
