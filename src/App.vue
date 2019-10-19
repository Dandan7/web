<template>
  <div id="app">
    <cn-header></cn-header>
    <router-view name="main"></router-view>
    <router-view name="sidebar"></router-view>
  </div>
</template>

<script>
import cnHeader from './components/header'
export default {
  name: 'App',
  data(){
    return{
    }
  },
  components: {
    cnHeader,
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
}
 html{
    background-color: #DDDDDD;

 }
body,div,span,a,p,ul,li {
	margin: 0;
	padding: 0;
}
</style>
