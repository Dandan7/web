<template>
    <div class="sidebar">
        <!-- {{ userinfo }} -->
        <div class="load" v-if="flag">loading</div>
        <div class="author_information" v-else>
        <div class="author">
            <div class="head" style="margin-bottom: 10px">作者</div>
            <router-link :to="{name:'user_info', params:{name: userinfo.loginname}}">
                <img :src="userinfo.avatar_url" alt="">
            </router-link>
        <span class="grey">{{ userinfo.loginname }}</span><br/>
        <span>积分：{{userinfo.score}}</span>
        </div>
        <div class="topic">
            作者最近主题：
            <ul>
                <li v-for="(item,i) in userinfo.recent_topics" :key="i">
                    <router-link :to="{name:'post_content', params: {id:item.id, name:item.author.loginname}}" :title="item.title">
                       • {{ item.title }}
                    </router-link>
                </li>
            </ul>

        </div>
        <div class="reply_">
            作者最近回复：
            <ul>
                <li v-for="(item,i) in userinfo.recent_replies" :key="i">
                    <router-link :to="{name:'post_content', params: {id:item.id, name:item.author.loginname}}" :title="item.title">
                        • {{ item.title }}
                    </router-link>
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
            msg: "1314",
            flag: false,
            userinfo: {}
        }
    },
methods: {
        getData(){
            this.$http({
                url: `https://cnodejs.org/api/v1/user/${this.$route.params.name}`,
                method: 'get',
            }).then((response) => {
                if(response.data.success === true){
                    this.flag = false;
                    this.userinfo = response.data.data;
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
.sidebar{
        width: 25%;
        float: right;
        box-sizing: border-box;
        padding: 10px;

}

.sidebar .author,
.sidebar .reply_,
.sidebar .topic{
    background: #fff;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;
}
.sidebar .author img{
    width: 80px;
}
.grey{
    color: #a8a2a2;
    margin-left: 8px;

}
.sidebar .reply_ ul li,
.sidebar .topic ul li{
    list-style: none;
    line-height: 20px;
    margin-top: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.sidebar a{
    text-decoration: none;
    font-size: 12px;
}
</style>