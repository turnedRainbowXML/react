import React, { Component } from 'react'
import styles from './index.module.scss'

export class Lunbo extends Component {
    render() {
        return (
            <div className={styles.lunbo}>
               <img src={'http://i.lifevccdn.com/upload/combinationchart/1d519e79301f4344827ea3c7ca398ce0.jpg'} alt="" />
               <img src={'http://i.lifevccdn.com/upload/combinationchart/369692205b764b99843477a7fe4eaca4.jpg'} alt="" />
               <img src={'http://i.lifevccdn.com/upload/combinationchart/f525353c445b4d1bab661bcc3e005075.jpg'} alt="" />
               <img src={'http://i.lifevccdn.com/upload/combinationchart/9193f067164f446da459aab4183ef552.jpg'} alt="" />
                
            </div>
        )
    }
}

export default Lunbo
