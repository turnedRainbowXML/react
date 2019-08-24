import React, { Component } from 'react'
import styles from './index.module.scss'
import ctx from '@/assets/js/ctx'
import {changeToken} from '@/store/actionCreators'
import {connect} from 'react-redux'
import {Link} from  'react-router-dom'

export class AccountCenterUI extends Component {
    static contextType = ctx

    constructor(){
        super()
        this.state={
            userinfo:null
        }
    }
    reqinfo(){
        this.context.axios.post('/user/info',{
            token:this.props.token
        })
        .then((res)=>{
            const{code,msg,info}=res
            // console.log(res)
            if(code==1){
                // const Newuserinfo=info
                this.setState({
                    userinfo:info
                })
                // console.log(this.state.userinfo)
            }else{
                alert(msg)
            }
            
        })
    }
    exit = () => {
        localStorage.setItem('token','')
        // 将当前组件中的token和userInfo清空
        // const Newuserinfo=''
        this.setState({
            // token: '',
            userinfo: null
        })
    }
    render() {
        return (
            <div className={styles.accountCenter}>
                {/* zhzx (2) */}
                <div className={styles.top}>
                    <h3>我的</h3>
                    <div>
                    <img className={styles.service} src={require('@/assets/img/logo_07.png')} alt="" />
                    </div>
                </div>
                <header>
                    <div className={styles.qrCode}>
                    <img src={require('@/assets/img/zhzx (2).png')} alt="" />
                    </div>
                    <div className={styles.member}>
                        {this.state.userinfo
                        ?  <p className={styles.name}>{this.state.userinfo.username}<span onClick={this.exit}>退出登录</span></p>
                        :  <div className={styles.user}><Link to="/user/login">登录</Link>&nbsp;<Link to="/user/register">注册</Link></div>
                    }
                        <p><img src={require('@/assets/img/zhzx (4).png')} alt="" /></p>
                    </div>
                    <div className={styles.jiantou}>
                    <img src={require('@/assets/img/zhzx (3).png')} alt="" />
                    </div>
                </header>
                <div className={styles.quan}>
                <img src={require('@/assets/img/zhzx (10).png')} alt="" />
                </div>
                <div className={styles.dingdan}>
                    <div className={styles.dingdan1}>
                        <p>我的订单</p>
                        <p>查看全部 ></p>
                    </div>
                        
                    <ul className={styles.dingdan2}>
                        <li>
                        <img src={require('@/assets/img/zhzx (6).png')} alt="" />
                        <p>待付款</p>
                        </li>
                        <li>
                        <img src={require('@/assets/img/zhzx (7).png')} alt="" />
                        <p>待发货</p>
                        </li>
                        <li>
                        <img src={require('@/assets/img/zhzx (8).png')} alt="" />
                        <p>已收货</p>
                        </li>
                        <li>
                        <img src={require('@/assets/img/zhzx (9).png')} alt="" />
                        <p>待评价</p>
                        </li>
                        <li>
                        <img src={require('@/assets/img/zhzx (1).png')} alt="" />
                        <p>售后</p>
                        </li>
                    </ul>
                </div>
                <ul className={styles.message}>
                    <li>
                        <p>在线客服</p>
                        <img src={require('@/assets/img/zhzx (5).png')} alt="" />
                    </li>
                    <li>
                        <p>电话客服</p>
                        <img src={require('@/assets/img/zhzx (5).png')} alt="" />
                    </li>
                    <li>
                        <p>会员建议</p>
                        <img src={require('@/assets/img/zhzx (5).png')} alt="" />
                    </li>
                    <li>
                        <p>收货地址</p>
                        <img src={require('@/assets/img/zhzx (5).png')} alt="" />
                    </li>
                </ul >


            </div>
        )
    }
    componentDidMount(){
        // this.reqinfo()
        if(this.props.token) this.reqinfo()
    }
}


// 获取
function mapStateToProps(state){
    return{
        token:state.token.token
    }
}
// 改变
function mapDispatchToProps(dispatch){
    return{
        changeToken:(token)=>{
            dispatch(changeToken(token))
        }
    }
}
const AccountCenterContainer=connect(mapStateToProps,mapDispatchToProps)(AccountCenterUI)

export default AccountCenterContainer

// export default AccountCenter
