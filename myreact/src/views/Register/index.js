import React, { Component } from 'react'
import MyForm from '../../components/MyForm';
import {Toast} from 'antd-mobile'
import {Link} from 'react-router-dom'
import styles from './index.module.scss'

export class Register extends Component {
    onRegister=(res)=>{
        Toast.success('注册成功',1,()=>{
             // 使用replace方法，跳转过去之后，自动删除上一页
             this.props.history.replace('/user/login')
        })
    }

    render() {
        const {onRegister}=this
        return (
            <div>
                {/* 使用封装好的表单组件 */}
                <MyForm btnText='注册' reqPath='/user/register' reqSuccess={onRegister}>
                    <h1 key='header'>注册</h1>
                    <p key='footer'>点击登录表示您已同意用户协议</p>
                    
                </MyForm>
                <Link to="/user/Login" replace>去登录</Link>
            </div>
        )
    }
}

export default Register
