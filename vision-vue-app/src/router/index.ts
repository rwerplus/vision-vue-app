import {createRouter, createWebHashHistory} from 'vue-router'
import routes from "./routes";
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
router.beforeEach((to, from,next) => {
    // 而不是去检查每条路由记录
    // to.matched.some(record => record.meta.requiresAuth)
    if (to.meta.requiresAuth
        // && ! auth.isLoggedIn()
    ) {
        // 此路由需要授权，请检查是否已登录
        // 如果没有，则重定向到登录页面
        return {
            path: '/login',
            // 保存我们所在的位置，以便以后再来
            query: {redirect: to.fullPath},
        }
    } else next();
})
export default router;