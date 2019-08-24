import React from 'react'; // 引入类库文件
import './App.scss' // 引入当前组件的全局样式
import styles from './App.module.scss' // 引入当前组件的模块化样式

import './App.module.scss'; 

import {Route,Link,NavLink,Switch,Redirect,withRouter} from 'react-router-dom' // 引入React的内置组件Route
import routes from './routes.js'

function App(props) {
	
	const pathname = props.location.pathname
	// 当前路由为首页、商品列表的时候，才会显示底部导航
	const showNav = /home|products|(goods\/list)|(cart\/list)|accountCenter/.test(pathname)

	const element = (
		<div className="App">
			<Switch>
				<Redirect from="/" to="/home" exact />
				{
					routes.map(e => <Route {...e} />)
				}
			</Switch>
			{/* 导航栏 */}
			{showNav && <div className="nav">
				{/* 添加replace，跳转过去之后会删掉上一条历史记录 */}
				<NavLink to="/home" replace>首页</NavLink>
				<NavLink to="/products" replace>全部产品</NavLink>
				<NavLink to="/goods/list" replace>闲逛</NavLink>
				<NavLink to="/cart/list" replace>购物车</NavLink>
				<NavLink to="/accountCenter" replace>账户中心</NavLink>
			</div>}			
		</div>
	)
	return element
}
export default withRouter(App)