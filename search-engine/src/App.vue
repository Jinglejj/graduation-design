<template>
  <div id="app">
            <router-view/>
      <VueAudio :audio-info="info"></VueAudio>
  </div>
</template>
<script>
    import VueAudio from "./components/audio/VueAudio";
    export default {
        name: "app",
        data() {
            return {
                info:{
                    src: "http://106.14.137.176:8080/blog/static/1.mp3",
                    currentTime: 0,//音频当前时间
                    endTime: 258,//音频结束时间
                    title:'来自个人服务器数据比较慢',
                    text:'测试数所所所所所所所所所所所所测试数所所所所所所所所所所所所测试数所所所所所所所所所所所所测试数所所所所所所所所所所所所测试数所所所所所所所所所所所所测试数所所所所所所所所所所所所'
                }
            }
        },
        methods: {},
        components: {VueAudio},
        mounted() {

        }
    }
</script>
<style>
html,body{
  margin:0;
  padding: 0;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
