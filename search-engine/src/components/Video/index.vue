<template>
    <div>
        <el-card class="box" shadow="hover">
            <div>
                {{videoInfo.file_name}}
            </div>
            <i
                    :class="playIcon"
                    class="playButton"
                    @click="playVideo()"></i>
            <p class="sentence_text" v-html="videoInfo.sentence_text"></p>

        </el-card>
    </div>
</template>

<script>
    export default {
        name: "Video",
        data() {
            return {
                playIcon:"el-icon-video-play"
            }
        },
        methods: {
            playVideo(){
                this.$emit('playVideo', this.videoInfo); //父组件监听的名字必须是formSubmit
            }
        },
        components: {},
        mounted() {

        },props:['videoInfo']
    }
</script>

<style scoped>
    .playButton {
        font-size: 45px;
        margin-right: 10px;
        margin-top: 5px;
        float: left;
        cursor: pointer;
        color: #409eff;
        font-weight: bold;
    }
    .box {
        width: 595px;
        margin: 5px;
        padding: 5px;
        /*height: 140px;*/
    }
    .sentence_text{
        margin-top: 5px;
    }
</style>
