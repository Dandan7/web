<template>
<div class="UserInfo">
    <div class="load" v-if="flag">loading</div>
    <div class="user" v-else>
        <div class="content">
                <img :src="userinfor.avatar_url" alt="">
                <span>{{ userinfor.loginname }}</span><br/>
                <span>{{ userinfor.score }}积分</span><br/>
                <span>注册时间：{{ userinfor.create_at | formatDate }}</span>
        </div>
        <div class="reply_topic">
            回复的主题：
            <ul>
                <li v-for="(item,i) in userinfor.recent_replies" :key="i">
                    <router-link :to="{name: 'post_content', params: {id:item.id,name: item.author.loginname}}" :title="item.title">
                    {{ item.title }}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="topic">
            创建的主题：
            <ul>
                <li v-for="(item,i) in userinfor.recent_topics" :key="i">
                    <router-link :to="{name: 'post_content', params: {id:item.id,name: item.author.loginname}}" :title="item.title">
                    {{ item.title }}
                    </router-link>
                </li>
            </ul>
        </div>
           
        <!-- <img :src="userinfor.avatar_url" alt=""> -->
    </div>

</div>
</template>
<script>
export default {
    name: 'UserInfo',
    data(){
        return{
            flag: false,
            userinfor: {},
        }
    },
    methods: {
        getData(){
            this.$http({
                url: `https://cnodejs.org/api/v1/user/${this.$route.params.name}`,                method: 'get',

            }).then((response) => {
                if(response.data.success === true){
                    this.userinfor = response.data.data;
                    // console.log(this.userinfor);
                    this.flag = false;

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
.UserInfo .user{
    padding: 10px 50px;
}
.UserInfo .user .content{
    background-color: #fff;
    padding: 10px;
}
.UserInfo .user .content img{
    width: 80px;
    height: 80px;
}
.UserInfo .user .reply_topic,
.UserInfo .user .topic{
    background-color: rgb(248, 246, 246);
    margin-top: 10px;
    padding: 10px;
    font-size: 14px;
}
.UserInfo .user .reply_topic ul,
.UserInfo .user .topic ul{
    background: #fff;
    margin: 10px 0px;
}
.UserInfo .user .reply_topic li,
.UserInfo .user .topic li{
    list-style: none;
    height: 30px;
    line-height: 30px;
}
.user a{
    text-decoration: none;
    /* color: black; */
}
</style>