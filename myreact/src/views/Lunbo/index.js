import React, { Component } from 'react'
import styles from './index.module.scss'

export class Lunbo extends Component {
    render() {
        return (
            <div className={styles.lunbo}>
               <img src={'http://i.lifevccdn.com/upload/combinationchart/0a0e0e9d1b5d456684b9ff8b815057ea.jpg'} alt="" />
               <img src={'http://i.lifevccdn.com/upload/combinationchart/338bbd6197b34b19931a0d3a25e3d3e1.jpg'} alt="" />
               <img src={'http://i.lifevccdn.com/upload/combinationchart/d3f0b782d7064174a7d8762cf24bdd94.jpg'} alt="" />
               <img src={'http://i.lifevccdn.com/upload/combinationchart/bfb765c938434e63bc53362b35a987b5.jpg'} alt="" />
                
            </div>
        )
    }
}

export default Lunbo
