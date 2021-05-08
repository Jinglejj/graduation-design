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
            <p class="sentence_text" v-html="videoInfo.sentence_text[playIndex-1]"></p>
            <p class="resultsTips tips"  >{{videoInfo.start_time.length}}条结果</p>
        </el-card>
        <template v-if="playFile">
            <el-dialog
                    :title="playFile.file_name"
                    top="20vh"
                    :visible.sync="dialogVisible"
                    @close="closeDialog"
                    width="41%"
                    v-dialogDrag
            >
                <video
                        width="740"
                        height="430"
                        ref="videoPlayer"
                        id="videoPlayer"
                        :src="
            'http://106.53.148.120:8989/download?fileName=' + playFile.file_name
          "
                        controls
                ></video>
                <div class="subtitle">
                    <p v-html=" playFile.sentence_text[playIndex-1]"></p>
                    <div style="width: 90px;margin: 0 auto;">
                        <el-button style="" size="small" @click="goLast()" circle icon="el-icon-arrow-left"
                                   :disabled="this.disabledLastPlay"    >
                        </el-button>
                        <el-button style="" @click="goNext()" size="small"  circle icon="el-icon-arrow-right"
                                   :disabled="this.disabledNextPlay" >
                        </el-button>
                    </div>

                </div>
            </el-dialog>

        </template>
    </div>
</template>

<script>
    export default {
        name: "Video",
        data() {
            return {
                playIcon:"el-icon-video-play",
                playFile: null,
                dialogVisible: false,
                playIndex:1,
                playTime:0
            }
        },
        methods: {
            playVideo(){
                this.showDialog()
            },
            showDialog() {
                this.dialogVisible = true;
                this.playFile = this.videoInfo;
                setTimeout(() => {
                    //不设置的话，获取不到videoPlayer元素
                    this.$refs.videoPlayer.currentTime = parseInt(this.videoInfo.start_time[this.playIndex-1] / 1000);
                }, 400);
            },
            closeDialog() {
                this.playFile = null;
            },goLast() {
                this.playIndex -= 1
                this.playTime=this.videoInfo.start_time[this.playIndex - 1]
                this.$refs.videoPlayer.currentTime = this.videoInfo.start_time[this.playIndex - 1]
            },
            goNext() {
                this.playIndex += 1
                this.playTime= this.videoInfo.start_time[this.playIndex - 1]
                this.$refs.videoPlayer.currentTime = this.videoInfo.start_time[this.playIndex - 1]
            },

        },
        components: {},
        mounted() {

        },props:['videoInfo'],
        computed:{
            disabledLastPlay(){
                if(this.playIndex<=1){
                    return true
                }
                return false
            },
            disabledNextPlay(){
                if(this.playIndex>=this.videoInfo.start_time.length){
                    return true
                }
                return false
            }
        }
    }
</script>

<style scoped>
    .tips{
        float: right;
        line-height: 13px;
        margin: 0px;
    }
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
