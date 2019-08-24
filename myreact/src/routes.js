// 引入各种路由组件
import lazyLoad from './assets/js/lazyLoad'
import Error from './views/Error'
import Home from './views/Home'
// import GoodsList from './views/GoodsList'
import GoodsDetail from './views/GoodsDetail'
import Register from './views/Register'
import Login from './views/Login'
import AccountCenter from './views/AccountCenter'
import Products from './views/Products'
import CartList from './views/CartList'
import Lunbo from './views/Lunbo'
import Lunbo1 from './views/Lunbo1'
import Buy from './views/Buy'
const GoodsList = lazyLoad(() => import('./views/GoodsList'))



// 配置不同路由的路径和组件内容
const routes = [
    // 首页
    {
        path: '/home', // 路由路径
        key: 'home', // 路由名称
        component: Home, // 路由组件
        exact: true
    },
    // 商品列表
    {
        path: '/goods/list', 
        key: 'goodsList', 
        component: GoodsList, 
    },
    // 商品详情
    {
        path: '/goods/detail/:id', 
        key: 'goodsDetail', 
        component: GoodsDetail, 
    },
    {
        path: '/user/login', 
        key: 'Login', 
        component: Login, 
    },
    {
        path: '/user/register', 
        key: 'register', 
        component: Register, 
    },
    {
        path: '/cart/list', 
        key: 'cartList', 
        component: CartList, 
    },
    {
        path: '/accountCenter', 
        key: 'accountCenter', 
        component: AccountCenter, 
    },
    {
        path: '/products', 
        key: 'products', 
        component: Products, 
    },
    {
        path: '/lunbo', 
        key: 'lunbo', 
        component: Lunbo, 
    },
    {
        path: '/lunbo1', 
        key: 'lunbo1', 
        component: Lunbo1, 
    },
    {
        path: '/buy/:id', 
        key: 'buy', 
        component: Buy, 
    },
    
    // 404
    {
        path: '*',
        key: 'error',
        component: Error
    }         
]

export default routes