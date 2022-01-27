<template>
  <router-view/>
</template>

<style lang="scss">
@import '@/assets/scss/_helper.scss';

#app {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  //padding: pxtorem(15) 0 pxtorem(19) pxtorem(19) ;
  //background-color: rgb(7,8,9);
}
//#nav {
//  flex: 1;
//  background: linear-gradient(90deg,rgb(8,12,13) 20%,transparent 0),linear-gradient(rgb(8,12,13) 20%,transparent 0);
//  background-size: 30px 30px;
//}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
