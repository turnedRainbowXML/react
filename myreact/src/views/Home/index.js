import React, { Component } from 'react'
import styles from './index.module.scss'
import { Carousel, Button } from 'antd-mobile'
import GoodsItem2 from '@/components/GoodsItem2'
import {Link} from 'react-router-dom'
import BackToTop from '@/components/BackToTop'
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

export class Home extends Component {
    constructor() {
        super()
        this.state = {
            swiperItems: [
                {type:1,src:'http://i.lifevccdn.com/upload/IndexBanner/ea4447d014f64c01a40793c22ad9eddf_d1242x0.jpg'},
                {type:1,src:'http://i.lifevccdn.com/upload/IndexBanner/a50a9416b6ca40df8137034ede69c5a8_d1242x0.jpg'},
                {type:1,src:'http://i.lifevccdn.com/upload/IndexBanner/fbe92a7f2f9a4230b07ee2d1a5d5c33d_d1242x0.jpg'},
                {type:1,src:'http://i.lifevccdn.com/upload/IndexBanner/3e0a1926a54c4a59a8a035a8f02114df_d1242x0.jpg'},
                {type:1,src:'http://i.lifevccdn.com/upload/IndexBanner/2fa6781b336f4c949642ff3b4d7ae0e7_d1242x0.jpg'},
                {type:1,src:'http://i.lifevccdn.com/upload/IndexBanner/185b6eb0db454bdfb37d63b604b4c119_d1242x0.jpg'},
                {type:1,src:'http://i.lifevccdn.com/upload/IndexBanner/d103f3bbfb204ca8997951939e012b34_d1242x0.jpg'},
                {type:1,src:'http://i.lifevccdn.com/upload/IndexBanner/47c772e7be3e4b3da832c34f920a7381_d1242x0.jpg'},
                {type:1,src:'http://i.lifevccdn.com/upload/IndexBanner/18f7187e2e8d41329510738859a6c92c_d1242x0.jpg'}
            ],
            fenlei: [
                { type: 1, name: "新品体验券", src: require("@/assets/img/fenlei (2).png") },
                { type: 2, name: "0.01元拼团", src: require("@/assets/img/fenlei (3).png") },
                { type: 3, name: "断码出清", src: require("@/assets/img/fenlei (4).png") },
                { type: 4, name: "69元选5件", src: require("@/assets/img/fenlei (1).png") },
            ],
            NewItems: [
                { _id: '5d5612b88f1ad7c7a4c71edb', goodsName: "儿童安全牙刷", src: require("@/assets/img/New (4).png"), goodsPrice: 19 },
                { _id: '5d5611338f1ad7c7a4c71ed9', goodsName: "白领养生壶", src: require("@/assets/img/New (2).png"), goodsPrice: 299 },
                { _id: '5d5614c78f1ad7c7a4c71ede', goodsName: "天然相思木锅铲", src: require("@/assets/img/New (3).png"), goodsPrice: 25 },
                { _id: '5d56137a8f1ad7c7a4c71edc', goodsName: "轻薄60支棉内裤", src: require("@/assets/img/New (6).png"), goodsPrice: 59 },
                { _id: '5d56145a8f1ad7c7a4c71edd', goodsName: "双拖头免手洗拖把", src: require("@/assets/img/New (7).png"), goodsPrice: 179 },
                { _id: '5d5612048f1ad7c7a4c71eda', goodsName: "五谷杂粮保鲜桶", src: require("@/assets/img/New (5).png"), goodsPrice: 29 },
            ],
            AugustItems: [
                { type: 2,src:require("@/assets/img/8yue (2).png")},
                { type: 2,src:require("@/assets/img/8yue (3).png")},
                { type: 2,src:require("@/assets/img/8yue (4).png")},
                { type: 2,src:require("@/assets/img/8yue (1).png")}
            ],
            yiyueItems: [
                { type: 1, goodsName: "氨基酸洗发水", src: require("@/assets/img/yiyue (6).png"), goodsPrice: 49 },
                { type: 2, goodsName: "纯棉洗脸巾", src: require("@/assets/img/yiyue (1).png"), goodsPrice: 15 },
                { type: 3, goodsName: "衣橱芳香袋", src: require("@/assets/img/yiyue (2).png"), goodsPrice: 29 },
                { type: 4, goodsName: "电动牙刷", src: require("@/assets/img/yiyue (3).png"), goodsPrice: 199},
                { type: 5, goodsName: "酵素洗衣液", src: require("@/assets/img/yiyue (4).png"), goodsPrice: 29 },
                { type: 6, goodsName: "超值家庭装", src: require("@/assets/img/yiyue (5).png"), goodsPrice: 99 }
            ],
            qiju: [
                { _id: '5d5a05d433574841afb7be63', goodsName: "有氧纱透气夏被", src: require("@/assets/img/qj (5).png"), goodsPrice: 179 },
                { _id: '5d5a06b233574841afb7be64', goodsName: "典雅蕾丝家居服", src: require("@/assets/img/qj (6).png"), goodsPrice: 75 },
                { _id: '5d5a073233574841afb7be65', goodsName: "60支棉亲肤内裤", src: require("@/assets/img/qj (1).png"), goodsPrice: 59 },
                { _id: '5d5a07a833574841afb7be66', goodsName: "时尚夹角拖鞋", src: require("@/assets/img/qj (2).png"), goodsPrice: 24 },
                { _id: '5d5a088a33574841afb7be67', goodsName: "随心配床笠/床单", src: require("@/assets/img/qj (3).png"), goodsPrice: 89 },
                { _id: '5d5a08db33574841afb7be68', goodsName: "乳胶床褥垫", src: require("@/assets/img/qj (4).png"), goodsPrice: 499 }
            ],
            xiachu:[
                { type: 1, goodsName: "四段保温电热水壶", src: require("@/assets/img/xiachu (2).png"), goodsPrice: 199 },
                { type: 2, goodsName: "日本大金系列不粘锅", src: require("@/assets/img/xiachu (3).png"), goodsPrice: 129 },
                { type: 3, goodsName: "多功能沥水篮", src: require("@/assets/img/xiachu (4).png"), goodsPrice: 35 },
                { type: 4, goodsName: "高硼硅玻璃随行杯", src: require("@/assets/img/xiachu (5).png"), goodsPrice: 59 },
                { type: 5, goodsName: "多功能养生壶", src: require("@/assets/img/xiachu (6).png"), goodsPrice: 299 },
                { type: 6, goodsName: "五谷杂粮保鲜桶", src: require("@/assets/img/xiachu (1).png"), goodsPrice: 29 }
            ],
            jiaju:[
                { type: 1, goodsName: "科技布舒适靠背软床", src: require("@/assets/img/qw (2).png"), goodsPrice: 2798 },
                { type: 2, goodsName: "3D悬浮式护脊席梦思", src: require("@/assets/img/qw (3).png"), goodsPrice: 2798 },
                { type: 3, goodsName: "舒适靠背真皮沙发", src: require("@/assets/img/qw (4).png"), goodsPrice: 8998 },
                { type: 4, goodsName: "经典绒布鸡蛋椅", src: require("@/assets/img/qw (1).png"), goodsPrice: 1998 }
            ],
            ry:[
                { type: 1, goodsName: "迷你桌面清洁器", src: require("@/assets/img/ry (2).png"), goodsPrice: 40 },
                { type: 2, goodsName: "充电式LED小夜灯", src: require("@/assets/img/ry (3).png"), goodsPrice: 69 },
                { type: 3, goodsName: "可遥控空气循环扇", src: require("@/assets/img/ry (4).png"), goodsPrice: 399 },
                { type: 4, goodsName: "8K玻纤晴雨两用伞", src: require("@/assets/img/ry (5).png"), goodsPrice: 79 },
                { type: 5, goodsName: "高端合金框旅行箱", src: require("@/assets/img/ry (6).png"), goodsPrice: 499 },
                { type: 6, goodsName: "吸水速干干发帽", src: require("@/assets/img/ry (1).png"), goodsPrice: 15 }
            ],
            jw:[
                { type: 1, goodsName: "酵素洗衣液", src: require("@/assets/img/jw (2).png"), goodsPrice: 29 },
                { type: 2, goodsName: "防霉防蛀挂环", src: require("@/assets/img/jw (3).png"), goodsPrice: 59 },
                { type: 3, goodsName: "省力旋风拖把", src: require("@/assets/img/jw (4).png"), goodsPrice: 179 },
                { type: 4, goodsName: "牛津布百纳包", src: require("@/assets/img/jw (5).png"), goodsPrice: 59 },
                { type: 5, goodsName: "电热蚊香液", src: require("@/assets/img/jw (6).png"), goodsPrice: 12 },
                { type: 6, goodsName: "懒人沙发", src: require("@/assets/img/jw (1).png"), goodsPrice: 399 }
            ]
        }
    }

    reqNewList=(id)=>{
        // console.log(id)
        this.props.history.push('/goods/detail/' + id)
    }
    search=()=>{
        this.props.history.push('/goods/list')
    }
    lunbo=(type)=>{
        // console.log(type)
        if(type==1){
            this.props.history.push('/lunbo')
        }else if(type==2){
            this.props.history.push('/lunbo1')
        }
    }

    render() {
        return (
            <div className={styles.home}>
                <div className={styles.top}>
                    <div className={styles.scan}>
                        <span><img src={require('@/assets/img/logo_10.png')} alt="" /></span>
                    </div>
                    <div className={styles.logo}>
                        <span className={styles.logo}><img src={require('@/assets/img/logo_03.png')} alt="" /></span>
                    </div>
                    <div className={styles.sever}>
                        <span className={styles.search} onClick={this.search}><img src={require('@/assets/img/logo_01_05.png')} alt="" /></span>
                        <span className={styles.service}><img src={require('@/assets/img/logo_07.png')} alt="" /></span>
                    </div>
                </div>
                {(this.state.swiperItems.length) &&
                    <Carousel className="myswiper" autoplay={true} infinite={true}>
                        {
                            this.state.swiperItems.map((e, i) => <img src={e.src} key={e.src} alt="轮播图" onClick={()=>this.lunbo(e.type)}/>)
                        }
                    </Carousel>
                }
                <p className={styles.public}>超过2000万条用户好评，值得信赖的全屋家居品牌</p>
                <ul className={styles.fenlei} >
                    {this.state.fenlei.map((e, i) => <li key={e.type} onClick={this.search}>
                        <i><img src={e.src} alt="" /></i>
                        <span>{e.name}</span>
                    </li>)
                    }
                </ul>
                {/* NEW */}
                <h2 className={styles.title}><img src={require('@/assets/img/New (1).png')} alt="" /></h2>
                <ul className={styles.New}>
                    {this.state.NewItems.map((e, i) => <li key={e._id} onClick={()=>this.reqNewList(e._id)}>
                        <i><img src={e.src} alt=""/></i>
                        <p className={styles.goodsName}>{e.goodsName}</p>
                        <p className={styles.price}>￥{e.goodsPrice}</p>
                    </li>)
                    }
                </ul>
                <div className={styles.more}>
                    <Link to="/goods/list" replace>选购所有新品</Link>
                </div>
                <div className={styles.jpg}><img src={require('@/assets/img/2.jpg')} alt="" /></div>
                {/* 8月生活企划案 */}
                <div className={styles.August}>
                    <h2>8月生活企划案</h2>
                    <p>MUST HAVE</p>
                    <ul className={styles.August1} >
                        {this.state.AugustItems.map((e, i) => <li key={i} onClick={()=>this.lunbo(e.type)}>
                            <i><img src={e.src} alt="" /></i>
                        </li>)
                        }
                    </ul>
                </div>
                <div className={styles.jpg}><img src={require('@/assets/img/3.jpg')} alt=""/></div>
                <div className={styles.jpg}><img src={require('@/assets/img/4.jpg')} alt=""/></div>
                {/* 一月一次 */}
                <h2 className={styles.title}><img src={require('@/assets/img/yiyueyici.png')} alt=""/></h2>
                <ul className={styles.New}>
                    {this.state.yiyueItems.map((e, i) => <li key={e.type} onClick={this.search}>
                        <i><img src={e.src} alt="" /></i>
                        <p>{e.goodsName}</p>
                        <p className={styles.price}>￥{e.goodsPrice}</p>
                    </li>)
                    }
                </ul>
                <div className={styles.jpg}><img src={require('@/assets/img/5.png')} alt=""/></div>
                {/* 起居 */}
                <div className={styles.qiju}>
                    <h1>起居</h1>
                    <p>BEDROOM</p>
                    {
                        // this.state.goodsList.map(e => <GoodsItem itemInfo={e} key={e._id} />)
                        this.state.qiju.map(e => <GoodsItem2 itemInfo={e} key={e._id} />)
                    }
                </div>
                <div className={styles.jpg}><img src={require('@/assets/img/6.jpg')} alt=""/></div>
                {/* 下厨 */}
                <div className={styles.xiachu}>
                    <h1>下厨</h1>
                    <p>KITCHEN</p>
                    {
                        // this.state.goodsList.map(e => <GoodsItem itemInfo={e} key={e._id} />)
                        this.state.xiachu.map(e => <GoodsItem2 itemInfo={e} key={e.type}/>)
                    }
                </div>
                <div className={styles.jpg}><img src={require('@/assets/img/7.jpg')} alt=""/></div>
                {/* 全屋家具 */}
                <div className={styles.jiaju}>
                    <h1>全屋家具</h1>
                    <p>LIVINGHOUSE</p>
                    {
                        // this.state.goodsList.map(e => <GoodsItem itemInfo={e} key={e._id} />)
                        this.state.jiaju.map(e => <GoodsItem2 itemInfo={e} key={e.type} />)
                    }
                </div>
                {/* 日用 */}
                <div className={styles.ry}>
                    <h1>日用</h1>
                    <p>HOMEWERA</p>
                    {
                        // this.state.goodsList.map(e => <GoodsItem itemInfo={e} key={e._id} />)
                        this.state.ry.map(e => <GoodsItem2 itemInfo={e} key={e.type} />)
                    }
                </div>
                {/* 家务 */}
                <div className={styles.jw}>
                    <h1>家务</h1>
                    <p>HOMEWERA</p>
                    {
                        // this.state.goodsList.map(e => <GoodsItem itemInfo={e} key={e._id} />)
                        this.state.jw.map(e => <GoodsItem2 itemInfo={e} key={e.type} />)
                    }
                </div>
                {/* 回到顶部 */}
                <BackToTop />
                <div className={styles.jpg}><img src={require('@/assets/img/foot.jpg')} alt="" /></div>
            </div>
        )
    }
}

export default Home
