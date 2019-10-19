<template>
    <div class="header">
        <router-link :to="{name: 'root'}">
            <img src="../assets/cnodejs_light.svg" alt="">
        </router-link>
        <span><a href="#">关于</a></span>
    </div>
</template>
<script>
export default {
    name: 'header',
    data(){
        return{

        }
    }
}
</script>
<style scoped>
	.header {
		background-color : #5a5555 ;
		height: 50px;
	}
	a {
		text-decoration: none;
		color: #cbc9c9;
	}
	img {
		max-width: 120px;
		margin-left: 50px;
		margin-top: 10px;
	}
	 span {
		float: right;
		margin-right: 50px;
		margin-top: 10px;
	}
</style>
