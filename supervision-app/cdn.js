const cdn = {
  css: [
    // element-ui css
    'https://cdn.bootcdn.net/ajax/libs/element-ui/2.12.0/theme-chalk/index.css',
  ],
  js: [
    // vue
    'https://cdn.bootcdn.net/ajax/libs/vue/2.6.10/vue.min.js',
    // vue-router
    'https://cdn.bootcdn.net/ajax/libs/vue-router/3.1.3/vue-router.min.js',
    // vuex
    'https://cdn.bootcdn.net/ajax/libs/vuex/3.1.2/vuex.min.js',
    // axios
    'https://cdn.bootcdn.net/ajax/libs/axios/0.18.0/axios.min.js',
    // element-ui js
    'https://cdn.bootcdn.net/ajax/libs/element-ui/2.12.0/index.js',
  ],
}
const externals = {
  'vue': 'Vue',
  'axios': 'axios',
  'element-ui': 'ELEMENT',
  'vue-router': 'VueRouter',
  'vuex': 'Vuex',
}

module.exports = {
  cdn, externals,
}