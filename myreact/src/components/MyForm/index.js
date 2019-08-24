import React, { Component } from 'react'
import styles from './index.module.scss'
import { Button, Toast } from 'antd-mobile';
import ctx from '@/assets/js/ctx'

export class MyForm extends Component {
    static contextType = ctx

    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    iptUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    iptPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    onClick = () => {
        const { username, password } = this.state
        const { reqPath, reqSuccess } = this.props

        //前端检验，用户名和密码必填
        if (!username || !password) {
            Toast.fail('请填写用户名和密码', 3)
            return false
        }

        // 发出请求
        this.context.axios.post(reqPath, {
            username,
            password
        }).then((res) => {
            const { code, msg } = res

            if (code == 1) {
                reqSuccess(res)
            } else {
                Toast.fail(msg)
            }
        })
        
    }
    render() {
        const { btnText, children } = this.props
        const { iptUsername, iptPassword, onClick } = this

        // 获取父组件传入的内容即children，并通过父组件传入的标记找到它在子组件中对应的位置
        const header = children.find(e => e.key == 'header')
        const footer = children.find(e => e.key == 'footer')
        const yzm=children.find(e => e.key == 'yzm')
        return (
            <div className={styles.myForm}>
                {/* 接收父组件传入的头部内容 */}
                {header}

                <div className={styles.cell}>
                    <label htmlFor="username">用户名</label>
                    <input id="username" type="text" onChange={iptUsername} />
                </div>

                <div className={styles.cell}>
                    <label htmlFor="password">密码</label>
                    <input id="password" type="text" onChange={iptPassword} />
                </div>
                {yzm}

                <Button type="primary" onClick={onClick}>{btnText}</Button>

                {/* 接收父组件传入的底部内容 */}
                {footer}
            </div>
        )
    }
}

export default MyForm
