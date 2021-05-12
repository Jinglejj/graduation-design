<template>
    <div>

        <el-card class="box" shadow="hover">
            <div class="videoBox"   @click="playVideo()">
                <div>
                     <video :src="'http://106.53.148.120:8989/download?fileName='+videoInfo.file_name"
                       width="174" height="115"></video>
                </div>
                <div class="duration">
                    <i class="el-icon-caret-right"></i>
                    {{$utils(videoInfo.duration)}}
                </div>
            </div>
            <div style="margin-left: 10px">
                <div class="title">
                            {{videoInfo.file_name.replace(".wav","").replace(".mp4","")}}
                 </div>
                <p class="sentence_text" v-html="videoInfo.sentence_text[playIndex-1]"></p>
                <p class="resultsTips tips">{{videoInfo.start_time.length}}条结果</p>
            </div>
        </el-card>
        <template v-if="playFile">
            <el-dialog
                    :title="playFile.file_name.replace('.wav','').replace('.mp4','')"
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
                        :src="'http://106.53.148.120:8989/download?fileName='+playFile.file_name"
                        controls
                ></video>
                <div class="subtitle">
                    <p v-html=" playFile.sentence_text[playIndex-1]"></p>
                    <div style="width: 90px;margin: 0 auto;">
                        <el-button style="" size="small" @click="goLast()" circle icon="el-icon-arrow-left"
                                   :disabled="this.disabledLastPlay">
                        </el-button>
                        <el-button style="" @click="goNext()" size="small" circle icon="el-icon-arrow-right"
                                   :disabled="this.disabledNextPlay">
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
                playIcon: "el-icon-video-play",
                playFile: null,
                dialogVisible: false,
                playIndex: 1,
                playTime: 0
            }
        },
        methods: {
            playVideo() {
                this.showDialog()
            },
            showDialog() {
                this.dialogVisible = true;
                this.playFile = this.videoInfo;
                setTimeout(() => {
                    //不设置的话，获取不到videoPlayer元素
                    this.$refs.videoPlayer.currentTime = this.videoInfo.start_time[this.playIndex - 1];
                }, 400);
            },
            closeDialog() {
                this.playFile = null;
            }, goLast() {
                this.playIndex -= 1
                this.playTime = this.videoInfo.start_time[this.playIndex - 1]
                this.$refs.videoPlayer.currentTime = this.videoInfo.start_time[this.playIndex - 1]
            },
            goNext() {
                this.playIndex += 1
                this.playTime = this.videoInfo.start_time[this.playIndex - 1]
                this.$refs.videoPlayer.currentTime = this.videoInfo.start_time[this.playIndex - 1]
            },/*
                * 截取视频的第一帧
                */
            getVideoBase64(url) {
                return new Promise(function (resolve) {
                     let video = document.createElement("video");
                    video.setAttribute('src', url);
                    video.setAttribute('width', 400);
                    video.setAttribute('height', 240);
                    console.log(video)
                })
            }
        },
        components: {}
        ,
        mounted() {
            /*
                        * 调用方法
                        */
            this.getVideoBase64('http://106.53.148.120:8989/download?fileName='+this.videoInfo.file_name
            ).then(res => {
                console.log(res);
            })
        }
        ,
        props: ['videoInfo'],
        computed:
            {
                disabledLastPlay() {
                    if (this.playIndex <= 1) {
                        return true
                    }
                    return false
                }
                ,
                disabledNextPlay() {
                    if (this.playIndex >= this.videoInfo.start_time.length) {
                        return true
                    }
                    return false
                }
            }
    }
</script>

<style scoped>
    .tips {
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
    .videoBox{
        float: left;
        margin-right: 15px;
    }
    .videoBox:hover{cursor:pointer}
    .title:hover{
        cursor:pointer;
    }
    .title{
        color: #2440b3;
        font-size: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .sentence_text {
        margin-top: 5px;
    }
    .duration{
        color: #fff;
        background: rgba(0,0,0,.3);
        width: 54px;
        border-radius: 5px;
        line-height: 21px;
        font-size: 13px;
        position: relative;
        top: -28px;
        left: 120px;
        width: 54px;
    }
</style>
