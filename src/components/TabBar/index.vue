<template>
<footer id="footer">
  <ul>
    <router-link tag="li" to="/">
      <i class="iconfont">&#xe603;</i>
      <p>电影</p>
    </router-link>
    <router-link  tag="li" to="/cinema">
      <i class="iconfont">&#xe61d;</i>
      <p>影院</p>
    </router-link >
    <router-link  tag="li" to="/mine">
      <i class="iconfont">&#xe62b;</i>
      <p>我的</p>
    </router-link>
  </ul>
</footer>
</template>

<script>
    export default {
        name: "TabBarindex"
    }
</script>

<style scoped>
@import "../../assets/iconfont/iconfont.css";
#footer{width: 100%;height: 50px;background: white;border-top:2px gainsboro solid;position: fixed;left: 0;bottom: 0;right: 0}
#footer ul{display: flex; text-align: center;height: 50px;align-items: center}
#footer ul li{flex: 1;height: 40px}
#footer ul i{font-size: 20px}
#footer ul p{font-size: 12px;line-height: 18px}
#footer ul li.router-link-exact-active{color:red}
</style>
