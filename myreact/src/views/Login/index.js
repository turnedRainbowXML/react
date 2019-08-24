import React, { Component } from 'react'
import {Toast} from 'antd-mobile'
import {Link} from 'react-router-dom'
import MyForm from '@/components/MyForm'
import ctx from '@/assets/js/ctx'
import {connect} from 'react-redux'
import {changeToken} from '@/store/actionCreators'
import styles from './index.module.scss'

export class LoginUI extends Component {
    static contextType=ctx

    // 注意要用箭头函数否则读不到this.props
    onLogin=(res)=>{
        Toast.success('登录成功')
        console.log(this.props)
        // this.props中包含：{history: {…}, location: {…}, match: {…}, staticContext: undefined, changeToken: ƒ}
        // 上面对象展开之后有changeToken: token => {…}
        const {token}=res
        // console.log(token)
        // 将token存到本地
        localStorage.setItem('token',token)

        // 把token存到仓库
        // this.context.store.changeToken(token)
        this.props.changeToken(token)

         // 返回到上一页
         this.props.history.goBack()
    }

    
    render() {
        const {onLogin}=this
        return (
            <div>
            {/* 使用封装好的表单组件 */}
            <MyForm btnText="登录" reqPath="/user/login" reqSuccess={onLogin}>
                <h1 key="header">欢迎回来</h1>
                {/* <p key="yzm">
                    <input ref={el=>this.iptval=el} onChange={()=>this.inputChange()}/><span>1111</span>
                </p> */}
                <p key="footer"></p>
            </MyForm>
    
            <Link to="/user/register" replace>还没有账号？去注册</Link>
            </div>
        )
    }
}

function  mapDispatchToProps(dispatch){
    return {
        changeToken:(token)=>{
            dispatch(changeToken(token))
        }
    }
}

const LoginContainer=connect(null,mapDispatchToProps)(LoginUI)

export default LoginContainer
