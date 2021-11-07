/*
* @param routes:配置项目路由路径及规则
* */
const HelloWorld = () => import('../components/HelloWorld.vue')
const About = () => import('../components/About.vue')
/*
* 有时候我们想把某个路由下的所有组件都打包在同个异步块 (chunk) 中。只需要使用命名 chunk，一个特殊的注释语法来提供 chunk name (需要 Webpack > 2.4)：
* */
// const UserDetails = () =>
//     import(/* webpackChunkName: "group-user" */ './UserDetails.vue')
// const UserDashboard = () =>
//     import(/* webpackChunkName: "group-user" */ './UserDashboard.vue')
// const UserProfileEdit = () =>
//     import(/* webpackChunkName: "group-user" */ './UserProfileEdit.vue')

const routes = [
  {
    path: "/",
    name: "Home",
    component: HelloWorld,
  },
  {
    path: '/about',
    name: "About",
    component: About,
  }
];

export default routes;