import React, { Component } from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'

class Products extends Component {

    constructor(props) {
        super(props) // 必须调用super，否则无法获取this
        // console.log('constructor')
        this.state = {
            list1: [
                {
                    type: 1,
                    name: "全屋家具",
                    list2: [
                        {
                            type: '1-1',
                            name: "床和席梦思",
                            src: require("@/assets/img/qw1.jpg")
                        },
                        {
                            type: '1-2',
                            name: "沙发",
                            src: require("@/assets/img/qw2.jpg")
                        }
                    ]
                },
                {
                    type: 2,
                    name: "下厨",
                    list2: [
                        {
                            type: '2-1',
                            name: "锅具",
                            src: require("@/assets/img/xiachu1.jpg")
                        },
                        {
                            type: '2-2',
                            name: "厨房电器",
                            src: require("@/assets/img/xiachu2.jpg")
                        },
                        {
                            type: '2-3',
                            name: "厨房小帮手",
                            src: require("@/assets/img/xiachu3.jpg")
                        },
                        {
                            type: '2-4',
                            name: "水杯水壶",
                            src: require("@/assets/img/xiachu4.jpg")
                        },
                        {
                            type: '2-5',
                            name: "餐具",
                            src: require("@/assets/img/xiachu5.jpg")
                        },
                        {
                            type: '2-6',
                            name: "餐厨美食",
                            src: require("@/assets/img/xiachu6.jpg")
                        }
                    ]
                },
                {
                    type: 3,
                    name: "床品",
                    list2: [
                        {
                            type: '3-1',
                            name: "夏被盖毯",
                            src: require("@/assets/img/cp1.jpg")
                        },
                        {
                            type: '3-2',
                            name: "凉席",
                            src: require("@/assets/img/cp2.jpg")
                        },
                        {
                            type: '3-3',
                            name: "拆件随心配",
                            src: require("@/assets/img/cp3.jpg")
                        },
                        {
                            type: '3-4',
                            name: "安睡枕",
                            src: require("@/assets/img/cp4.jpg")
                        },
                        {
                            type: '3-5',
                            name: "床品套件",
                            src: require("@/assets/img/cp5.jpg")
                        },
                        {
                            type: '3-6',
                            name: "被子床褥",
                            src: require("@/assets/img/cp6.jpg")
                        },
                        {
                            type: '3-7',
                            name: "盖毯披毯",
                            src: require("@/assets/img/cp7.jpg")
                        }
                    ]
                },
                {
                    type: 4,
                    name: "家务",
                    list2: [
                        {
                            type: '4-1',
                            name: "酵素洗衣液",
                            src: require("@/assets/img/jw1.jpg")
                        },
                        {
                            type: '4-2',
                            name: "家务工具",
                            src: require("@/assets/img/jw2.jpg")
                        },
                        {
                            type: '4-3',
                            name: "家庭清洁剂",
                            src: require("@/assets/img/jw3.jpg")
                        },
                        {
                            type: '4-4',
                            name: "储物收纳",
                            src: require("@/assets/img/jw4.jpg")
                        },
                        {
                            type: '4-5',
                            name: "生活单品",
                            src: require("@/assets/img/jw5.jpg")
                        }
                    ]
                },
                {
                    type: 5,
                    name: "生活日用",
                    list2: [
                        {
                            type: '5-1',
                            name: "香氛",
                            src: require("@/assets/img/ry1.jpg")
                        },
                        {
                            type: '5-2',
                            name: "旅行箱包",
                            src: require("@/assets/img/ry2.jpg")
                        },
                        {
                            type: '5-3',
                            name: "文具",
                            src: require("@/assets/img/ry3.jpg")
                        },
                        {
                            type: '5-4',
                            name: "椅垫靠背",
                            src: require("@/assets/img/ry4.jpg")
                        },
                        {
                            type: '5-5',
                            name: "生活电器",
                            src: require("@/assets/img/ry5.jpg")
                        },
                        {
                            type: '5-6',
                            name: "晴雨伞",
                            src: require("@/assets/img/ry6.jpg")
                        }
                    ]
                },
                {
                    type: 6,
                    name: "洗沐",
                    list2: [
                        {
                            type: '6-1',
                            name: "Lifevc/Beauty",
                            src: require("@/assets/img/xm1.jpg")
                        },
                        {
                            type: '6-2',
                            name: "口腔护理",
                            src: require("@/assets/img/xm2.jpg")
                        },
                        {
                            type: '6-3',
                            name: "纸品棉品",
                            src: require("@/assets/img/xm3.jpg")
                        },
                        {
                            type: '6-4',
                            name: "洗沐用品",
                            src: require("@/assets/img/xm4.jpg")
                        },
                        {
                            type: '6-5',
                            name: "毛浴巾",
                            src: require("@/assets/img/xm5.jpg")
                        },
                        {
                            type: '6-6',
                            name: "美妆电器",
                            src: require("@/assets/img/xm6.jpg")
                        }
                    ]
                },
                {
                    type: 7,
                    name: "家居服",
                    list2: [
                        {
                            type: '7-1',
                            name: "内裤袜子",
                            src: require("@/assets/img/jjf1.jpg")
                        },
                        {
                            type: '7-2',
                            name: "起居服",
                            src: require("@/assets/img/jjf2.jpg")
                        },
                        {
                            type: '7-3',
                            name: "家居拖鞋",
                            src: require("@/assets/img/jjf3.jpg")
                        },
                        {
                            type: '7-4',
                            name: "婴童服",
                            src: require("@/assets/img/jjf4.jpg")
                        },

                        {
                            type: '7-5',
                            name: "保暖家居服",
                            src: require("@/assets/img/jjf5.jpg")
                        }
                    ]
                }
            ],
            currIndex: 0
        }
    }
    changeRight(index) {
        // console.log(index)
        this.setState({
            currIndex: index
        })
    }
    reqList=(type)=>{
        // console.log(type)
    }
    search=()=>{
        this.props.history.push('/goods/list')
    }
    render() {
        return (
            <div className={styles.products}>
                <div className={styles.top}>
                    <div className={styles.scan1}>
                        <img className={styles.scan} src={require('@/assets/img/logo_10.png')} alt="" />
                    </div>
                    <div>全部产品</div>
                    <div className={styles.sever}>
                            <img className={styles.search} src={require('@/assets/img/logo_01_05.png')} alt="" onClick={this.search}/>
                            <img className={styles.service} src={require('@/assets/img/logo_07.png')} alt="" />
                    </div>
                </div>

                <div className={styles.classify}>
                    <section>
                        {/* 第一层 */}
                        <div className={styles.left}>
                            <ul>
                                {this.state.list1.map((e, i) => <li className={ this.state.currIndex == i ? styles.active : ''} key={e.type} onClick={() => this.changeRight(i)}>{e.name}</li>)}
                            </ul>
                        </div>
                        <div className={styles.right}>
                            {/* 第二层  */}
                            {/* <img src={require('http://img02.hua.com/slider/19_qixi_0725_pc.jpg')} alt="" /> */}
                            <h3>—{this.state.list1[this.state.currIndex].name}—</h3>
                            <ul className={styles.list} onClick={this.search} >
                                {this.state.list1[this.state.currIndex].list2.map(e => <li key={e.type} onClick={()=>this.reqList(e.type)}>
                                    <img src={e.src} alt=""/>
                                    <span>{e.name}</span>
                                </li>)}
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        )
    }

    componentDidMount(){
        this.reqList()
    }
}

// 导出
export default Products