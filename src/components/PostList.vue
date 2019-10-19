<template>
    <div class="postList">
        <div class="load" v-if="flag">loading</div>
        <div class="posts" v-else>
            <ul>
                <li v-for="(post,i) in posts" :key="i">
                    <router-link :to="{name: 'user_info',params: {name: post.author.loginname}}" :title="post.author.loginname">
                        <img :src="post.author.avatar_url" alt="">
                    </router-link>

                    <router-link :to="{name: 'post_content', params: {id: post.id,name: post.author.loginname}}">
                        {{ post.title }}
                    </router-link>
                    
                        <span class="comment">评论：{{ post.reply_count }}</span>
                        <span class="visit">浏览：{{ post.visit_count }}</span>
                    


                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PostList',
    data(){
        return{
            flag: false,
            posts: {}
        }
    },
    methods: {
        getData(){
            this.$http({
                url: 'https://cnodejs.org/api/v1/topics',
                method: 'get',
                params: {
                    page: 1,
                    limit:20,
                }
            }).then((response) => {
                if(response.data.success === true){
                    this.flag = false;
                    this.posts = response.data.data;
                }
            }).catch(function(error){
                console.log(error);
            });
        }
        	  
    },
    beforeMount () {
        this.flag = true;
        this.getData();
    }

}
</script>
<style scoped>
.postList{
    background-color: rgb(221, 221, 221);
    padding: 10px 50px;
    /* margin: 0 auto; */
}
.postList .posts{
    background-color: #fff;
    margin: 0 auto;
    padding: 10px
}
.postList .posts li{
    line-height: 30px;
    margin-bottom: 8px;
    border-bottom: 1px solid rgb(221, 221, 221);
    list-style: none;
}
 .postList .posts ul li img{
    width: 30px;
    height: 30px;
}
 .postList .posts ul li a{
     text-decoration: none;
     max-width: 70%;
     color: black;
     margin: 0 10px;
     display: inline-block;
     vertical-align: middle;
     overflow: hidden;
 }
  .postList .posts ul li a:visited{
      color: #858585;
  }

.postList .posts ul li span{
     float: right;
     font-size: 14px;
     text-align: center;
     margin: 0 10px;
}

</style>