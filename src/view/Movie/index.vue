<template>
    <div>
    <Header/>
        <div id="content">
          <div class="movie_menu">
            <router-link to="/city" tag="div" class="city_name">
              <span>重庆</span><i class="iconfont">&#xe688;</i>
            </router-link>
            <div  class="hot_swtich">
             <router-link  to="nowpalying" tag="div" class="hot_item ">正在热映</router-link >
              <router-link to="comingsoon"  tag="div" class="hot_item ">即将上映</router-link >
            </div>
            <router-link  to="search"tag="div" class="search_entry">
              <i class="iconfont">&#xe694;</i>
            </router-link>
          </div>
          <keep-alive>
            <router-view/>
          </keep-alive>
        </div>
    <TabBar/>
    </div>
</template>

<script>
  import Header from '@/components/Header/index.vue'
  import TabBar from '@/components/TabBar/index.vue'

    export default {
        name: "Movieindex",
      components:{
        Header,
        TabBar
      }
    }
</script>

<style scoped>
  @import "../../assets/iconfont/iconfont.css";
  #content{ flex:1; overflow:auto;display: flex; position: relative; margin-bottom: 50px; flex-direction:column;}
  #content .movie_menu{width: 100%;height: 45px;border-bottom: 1px solid #e6e6e6;display: flex;justify-content: space-between}
  .movie_menu .city_name,.search_entry{margin-left:20px;height: 100%;line-height: 45px}
  .city_name i{font-size: 13px;border-left: 2px solid #fff; color: #666}
  .movie_menu .hot_swtich{display: flex;height: 100%;line-height: 45px}
  .movie_menu .hot_item{font-size: 15px;color: #666;width: 80px;text-align: center;margin: 0 12px;font-weight:700}
  .movie_menu .search_entry{margin-right:20px;height: 100%;line-height: 45px;color: red;font-weight: 700}
</style>
