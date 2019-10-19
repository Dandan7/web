import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/components/PostList'
import UserInfo from '@/components/userInfo'
import article from '@/components/article'
import sideBar from '@/components/sideBar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      components:{
        main:  PostList
      }
    },
    {
      name: 'user_info',
      path: '/user/:name',
      components:{
        main: UserInfo
      }
    },
    {
      name: "post_content",
      path: '/topic/:id&author=:name',
      components:{
        main: article,
        sidebar: sideBar,
      }
    },

  ]
})
