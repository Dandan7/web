<template>
    <div class="article">
        <div class="load" v-if="flag">loading</div>
        <div class="article_information" v-else>
            <div class="main">
            <h1>{{ art.title }}</h1>
            <ul>
                <li>• 分类：{{ articleType }}</li>
                <li>• 访问量：{{art.visit_count}}次</li>
                <li>• 发布于：{{art.create_at | formatDate}}</li>
                <li>• 作者：{{art.author.loginname}}</li>
            </ul>
            <div v-html="art.content" id="content"></div>

        </div>
        <div class="reply">
                <ul>
                    <li v-for="(item,i) in art.replies" :key="i">
                        <router-link :to="{name: 'user_info',params: {name: item.author.loginname}}">
                        <img :src="item.author.avatar_url" alt="">
                        </router-link>
                        <router-link :to="{name: 'user_info',params: {name: item.author.loginname}}">
                        {{ item.author.loginname }}
                        </router-link>
                        <span>{{ i+1 }}楼</span>
                        <p v-html="item.content"></p>
                    </li>
                </ul>
        </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            flag: false,
            art: {},
        }
    },
    computed: {
        articleType(){
            var type = this.art.tab.toString();
            if(type =="ask"){
                return "问答"
            }else if(type =="share"){
                return "分享"
            }else if(type =="job"){
                return "招聘"
            }else if(type =="good"){
                return "精华"
            }else{
                return "其他"
            }
        },
    },
    methods: {
        
        getData(){
            this.$http({
                url: `https://cnodejs.org/api/v1/topic/${this.$route.params.id}`,
                method: 'get',
               }).then((response) => {
                if(response.data.success === true){
                    this.flag = false;
                    this.art = response.data.data;
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
<style>
@import url("../assets/markdown-github.css");
.article{
    padding: 10px 60px;
    float: left;
    width: 75%;
    box-sizing: border-box;
}
.article .main{
    background-color: #fff;
    /* text-align: center; */
    padding: 10px 30px;
}
.article .main h1{
    font-size: 20px;
}
.article .main ul li{
    font-size: 14px;
    display: inline-block;
    color: #a8a3a3;
    margin: 0 15px 10px 0;
}
.article .main #content{
    font-size: 18px;
    line-height: 25px;
    padding: 1px 2px;
}
.article .reply{
    background-color: #fff;
    margin-top: 10px;
    padding: 10px;
}
.article .reply ul li{
    border-bottom: 1px solid #ccc;
    list-style: none;
    padding: 15px;
}
.reply span{
    font-size: 13px;
    margin-left: 10px;
    vertical-align: super;
}
.reply a{
    text-decoration: none;
    color: black;
    font-weight: 600;
}
.reply a:nth-of-type(2){
    margin-top: -14px;
    vertical-align: super;
}
.reply a img{
    width: 35px;
    height: 35px;
}
.reply p{
    margin-left: 20px;
    margin-top: 5px;
}

</style>