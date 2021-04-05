<template>

    <el-card class="box" shadow="hover">
        <div class="title">
            <h2>{{this.audioInfo.title}}</h2>
        </div>
        <div class="control">
            <audio ref='audio'
                   :src="audioInfo.src"
                   @timeupdate="onPlay()"
            ></audio>
            <div >
                <i
                        :class="playIcon"
                        class="playButton"
                        @click="playAudio()"></i>
                <span class="currentTime">{{myTransTime(audioInfo.currentTime)}}</span>
                <div class="percentage">
                    <el-slider v-model="percentage" :show-tooltip="false" @change="updateAudio"></el-slider>
                </div>
                <span class="endTime">{{myTransTime(audioInfo.endTime)}}</span>
                <div class="volumeBox"
                     @mouseenter="seeVolumeIcon"
                     @mouseleave="hideVolume"
                >
                    <div style="margin-top: 5px;">
                        <i :class="volumeIcon"
                           v-show="showVolumeIcon"
                           class="bell"
                           @click="handleMute"
                        ></i>
<!--                        <el-slider-->
<!--                                v-show="showVolume"-->
<!--                                v-model="volume"-->
<!--                                class="volume"-->
<!--                                @change="changeVolume()"-->
<!--                        >-->
<!--                        </el-slider>-->
                    </div>
                </div>
            </div>
        </div>
        <div class="text">
            <p>{{this.audioInfo.text}}</p>
        </div>
    </el-card>
</template>
<script>
    import {transTime} from '../../utils/index'

    export default {
        name: "VueAudio",
        data() {
            return {
                volume: 100,
                tempVolume: 0,//存储静音之前的音量
                playIcon: "el-icon-video-play",
                volumeIcon: "el-icon-bell",
                showVolume: false,//音效的调整框
                showVolumeIcon: true//音效图标
            }
        },
        methods: {
            format() {
                return '';
            },
            playAudio() {
                var audio = this.$refs.audio;
                if (audio.paused) {
                    // 开始
                    this.playIcon = "el-icon-video-pause"
                    audio.play();

                } else {
                    // 暂停
                    this.playIcon = "el-icon-video-play"
                    audio.pause();
                }
            },
            updateAudio() {
                var audio = this.$refs.audio
                 audio.currentTime = this.audioInfo.currentTime
            },
            /**
             * @param value 百分比 整数
             * */
            changePercentage(newValue) {//用于 非播放时 调整进度条 currentTime的修改
                var current = parseInt(newValue / 100 * this.audioInfo.endTime)
                this.audioInfo.currentTime = current
            },
            // changeVolume() {
            //     var audio = this.$refs.audio
            //     audio.volume = this.volume / 100
            //     if (this.volume == 0) {
            //         this.volumeIcon = "el-icon-close-notification"
            //     } else {
            //         this.volumeIcon = "el-icon-bell"
            //     }
            // },
            onPlay() {//播放时 调整进度条 currentTime的修改
                this.audioInfo.currentTime = this.$refs.audio.currentTime
            },
            myTransTime(value) {
                return transTime(value);
            },
            handleMute() {
                var audio = this.$refs.audio;
                if (this.volume === 0) {
                    // 已静音=》恢复
                    this.volume = this.tempVolume
                    audio.volume = this.volume / 100
                    this.volumeIcon = "el-icon-bell"
                } else {
                    // 正常=》静音
                    this.tempVolume = this.volume//保存静音之前的音量
                    if (this.tempVolume == 0) {//如果静音之前的音量是0，改成一百
                        this.tempVolume = 100
                    }
                    this.volume = 0
                    this.volumeIcon = "el-icon-close-notification"
                    audio.volume = this.volume / 100
                }
            },
            seeVolumeIcon() {
                this.showVolume = true
            },
            hideVolume() {
                this.showVolume = false
            }
        }, props: ['audioInfo'],
        components: {},
        mounted() {
        }, computed: {
            percentage: {//进度条改变才生效
                get() {
                    return this.audioInfo.currentTime / this.audioInfo.endTime * 100
                }, set(newValue) {
                    //调整音频进度
                    this.changePercentage(newValue)
                }
            }
        }
    }
</script>

<style scoped>
    .playButton {
        font-size: 45px;
        margin-right: 5px;
        margin-top: 5px;
        float: left;
        cursor: pointer;
        color: #409eff;
        font-weight: bold;
    }

    .currentTime {
        float: left;
        margin-left: 5px;
        margin-top: 20px;
        font-weight: bold;
    }

    .endTime {
        float: left;
        margin-left: 230px;
        margin-top: 20px;
        font-weight: bold;
    }

    .percentage {
        width: 200px;
        margin-left: 105px;
        position: absolute;
        margin-top: 10px
    }

    .volumeBox {
        position: relative;
        float: left;
        margin-top: 10px;
        width: 75px;
        height: 30px

    }
    .volumeBox >>>.el-slider__button{
            width: 10px;
            height: 10px;
    }
    .percentage >>>.el-slider__button{
        width: 12px;
        height: 12px;
    }
    .bell {
        font-size: 25px;
        cursor: pointer;
        float: left;
        margin-left:10px;
        font-weight: bold;
    }

    .volume {
        margin-left: 40px;
        width: 70px;
        position: absolute;
        margin-top: -5px;
    }

    .box {
        width: 800px;
    }

    .control {
        width: 800px;
        height: 50px;
    }

    .text {
        text-align: left;
        text-indent: 2em;
    }
    .title{
        height: 30px;
        margin-top: -25px;
    }
</style>
