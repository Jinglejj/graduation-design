<template>

    <el-card class="box" shadow="hover">
<!--        <div class="title">-->
<!--            <h2>Title</h2>-->
<!--        </div>-->
        <div class="control">
            <audio ref='audio'
                   :src="audioInfo.file_name"
                   @timeupdate="onPlay()"
            ></audio>
            <div>
                <i
                        :class="playIcon"
                        class="playButton"
                        @click="playAudio()"></i>
                <span class="start_time">{{myTransTime(audioInfo.start_time)}}</span>
                <div class="percentage">
                    <el-slider v-model="percentage" :show-tooltip="false" @change="updateAudio"></el-slider>
                </div>
                <span class="duration">{{myTransTime(audioInfo.duration)}}</span>
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
        <p class="sentence_text" v-html="this.audioInfo.sentence_text">
        </p>
    </el-card>
</template>
<script>
    import {transTime} from '../../utils/index'

    export default {
        name: "Audio",
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
                audio.currentTime = this.audioInfo.start_time
            },
            /**
             * @param value 百分比 整数
             * */
            changePercentage(newValue) {//用于 非播放时 调整进度条 currentTime的修改
                console.log("newValue:" + newValue + "\t duration" + this.audioInfo.duration)
                this.audioInfo.start_time = parseInt(newValue / 100 * this.audioInfo.duration)
            },
            // changeVolume() {
            //     var Audio = this.$refs.Audio
            //     Audio.volume = this.volume / 100
            //     if (this.volume == 0) {
            //         this.volumeIcon = "el-icon-close-notification"
            //     } else {
            //         this.volumeIcon = "el-icon-bell"
            //     }
            // },
            onPlay() {//播放时 调整进度条 currentTime的修改
                console.log("currentTime" + this.$refs.audio.currentTime)
                this.audioInfo.start_time = this.$refs.audio.currentTime
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
            this.$refs.audio.currentTime = this.audioInfo.start_time
        }, computed: {
            percentage: {//进度条改变才生效
                get() {
                    console.log("get")
                    return this.audioInfo.start_time / this.audioInfo.duration * 100
                }, set(newValue) {
                    //调整音频进度
                    console.log("set");
                    this.changePercentage(newValue)
                }
            }
        }, created() {
            this.audioInfo.file_name = "http://106.53.148.120:8989/download?fileName=" + this.audioInfo.file_name
            this.audioInfo.start_time = parseInt(this.audioInfo.start_time / 1000)
            this.audioInfo.duration = parseInt(this.audioInfo.duration / 1000)
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

    .start_time {
        float: left;
        margin-left: 5px;
        margin-top: 20px;
        font-weight: bold;
    }

    .duration {
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

    .volumeBox >>> .el-slider__button {
        width: 10px;
        height: 10px;
    }

    .percentage >>> .el-slider__button {
        width: 12px;
        height: 12px;
    }

    .bell {
        font-size: 25px;
        cursor: pointer;
        float: left;
        margin-left: 10px;
        font-weight: bold;
    }

    .volume {
        margin-left: 40px;
        width: 70px;
        position: absolute;
        margin-top: -5px;
    }

    .box {
        width: 595px;
        margin: 5px;
        padding: 5px;
        height: 140px;
    }

    .control {
        width: 800px;
        height: 50px;
        position: relative;
    }

    .sentence_text {
        text-align: left;
        text-indent: 2em;
    }

    .title {
        height: 30px;
        margin-top: -25px;
    }
</style>
