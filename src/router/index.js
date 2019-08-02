import Vue from 'vue'
import Router from 'vue-router'
//提取出去的写法
// import  MovieRouter from  '@/router/movie/index'
// import  CinemaRouter from  '@/router/cinema/index'
// import  MineRouter from  '@/router/mine/index'

import  MovieRouter from  '@/view/movie/index'
import  MineRouter from  '@/view/Mine/index'
import  CinemaRouter from  '@/view/Cinema/index'


import  CityRouter from  '@/components/City/index'
import  ComingRouter from  '@/components/ComingSoon/index'
import  NowRouter from  '@/components/NowPlaying/index'
import  SearchRouter from  '@/components/Search/index'

Vue.use(Router)

export default new Router({
  routes: [
     // MovieRouter,
     // MineRouter,
     // CinemaRouter,
  {
      path:'/',
      name:'MovieRouter',
      component:MovieRouter,
      children:[
        {
          path:'city',
          component:CityRouter
        },
        {
          path:'comingsoon',
          component:ComingRouter
        },
        {
          path:'nowpalying',
          component:NowRouter
        },
        {
          path:'search',
          component:SearchRouter
        },


      ]
    },
    {
      path:'/mine',
      name:'MineRouter',
      component:MineRouter
    },
    {
      path:'/cinema',
      name:'CinemaRouter',
      component:CinemaRouter
    }
  ]
})
