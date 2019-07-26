import Vue from 'vue'
import Router from 'vue-router'
import  MovieRouter from  '@/router/movie/index'
import  MineRouter from  '@/router/mine/index'
import  CinemaRouter from  '@/router/cinema/index'

Vue.use(Router)

export default new Router({
  routes: [
    MovieRouter,
    // MineRouter,
    // CinemaRouter
  ]
})
