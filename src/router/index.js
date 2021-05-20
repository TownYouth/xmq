import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index'
import login from '../views/login'
import error from '../views/error'
import missing from '../views/404'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login', meta:{ title: '前端面试题-登录页' } },
  { path: '/login', component: login, name: 'login', meta:{ title: '前端面试题-登录页' } },
  { path: '/index', component: index, name: 'index', meta:{ title: '前端面试题-首页' } },
  { path: '/error', component: error, name: 'error', meta:{ title: '前端面试题-报错页' } },
  { path: '*', redirect: '/404' },
  { path: '/404', component: missing, name: 'missing', meta:{ title: '前端面试题-404' } }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  // 动态修改页面标题
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // 验证是否登录
  if (to.path === '/login') return next()
  if (to.path === '/error' && from.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) {
    document.title = '前端面试题-登录页'
    next('/login')
    return
  }
  next()
})

export default router
