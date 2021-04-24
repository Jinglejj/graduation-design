<template>
    <div>
        <template v-if="videoInfo">
            <Video :videoInfo="video" :key="video.id" v-for="video in videoInfo" v-on:playVideo="showDialog"></Video>
        </template>
        <template v-if="playFile">
            <el-dialog
                    :title="playFile.file_name"
                    top="20vh"
                    :visible.sync="dialogVisible"
                    @close="closeDialog"
                    width="41%">

                <video  width="740" height="430" ref="videoPlayer" id="videoPlayer"
                        :src="'http://106.53.148.120:8989/download?fileName='+playFile.file_name"
                        controls></video>

             </el-dialog>
        </template>
        <div class="block">
            <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page.sync="pageNum"
                    :page-size="pageSize"
                    :hide-on-single-page="hidePage"
                    layout="prev, pager, next, jumper"
                    :total="totalCount">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import {searchVideo} from "../../apis/search";
    import Video  from "@/components/Video"
    export default {
        name: "VideoPage",
        data() {
            return {
                videoInfo:null,
                totalCount:0,
                pageNum:1,
                pageSize:20,
                playFile:null,
                dialogVisible:false
            }
        },
        methods: {
            async searchVideo(){
                const {data} = await searchVideo(this.keyWord,this.pageNum,this.pageSize);
                if(data.code!==100){
                    this.$message.error("查询视频出错，请更换关键词！")
                }
                this.videoInfo=data.map.data.results;
                this.totalCount=data.map.data.total;
                // this.videoInfo=[
                //     {
                //         "id":3488,
                //         "sentence_text":"习近平主席在博鳌亚洲论坛二零二一年年会开幕式上发表的主旨演讲引发热烈反响。与会嘉宾表示，全球应携起手来，共同应对挑战，开创未来。",
                //         "file_name":"20210423160232.mp4",
                //         "start_time":0,
                //         "duration":49249,
                //         "insert_time":"2021\/4\/23 16:04:44"
                //     },
                //     {
                //         "id":3489,
                //         "sentence_text":"习近平总书记在清华大学考察时发表的重要讲话，引发热烈反响，全国各地高校师生表示，将心怀国之大者。",
                //         "file_name":"20210423160232.mp4",
                //         "start_time":13670,
                //         "duration":49249,
                //         "insert_time":"2021\/4\/23 16:04:44"
                //     },
                //     {
                //         "id":3490,
                //         "sentence_text":"为实现国家富强、民族复兴、人民幸福贡献力量，李克强在四川调研，李克强主持召开国务院常务会议。",
                //         "file_name":"20210423160232.mp4",
                //         "start_time":23670,
                //         "duration":49249,
                //         "insert_time":"2021\/4\/23 16:04:44"
                //     },
                //     {
                //         "id":3491,
                //         "sentence_text":"d 战书同埃及众议长举行会谈。王岐山出席博鳌亚洲论坛二零二一年年会。广东省将党史学习教育与位群众办实事结合起来。",
                //         "file_name":"20210423160232.mp4",
                //         "start_time":33670,
                //         "duration":49249,
                //         "insert_time":"2021\/4\/23 16:04:44"
                //     },
                //     {
                //         "id":3492,
                //         "sentence_text":"推动党史学习教育走深走实。全国累计报。",
                //         "file_name":"20210423160232.mp4",
                //         "start_time":45180,
                //         "duration":49249,
                //         "insert_time":"2021\/4\/23 16:04:44"
                //     }
                // ]
                // this.totalCount=5
            },
            handleCurrentChange(val) {
                this.pageNum=val;
                this.searchText()
            },showDialog(text){
                this.dialogVisible=true;
                this.playFile=text;
                setTimeout(()=>{//不设置的话，获取不到videoPlayer元素
                    this.$refs.videoPlayer.currentTime=parseInt(text.start_time/1000);
                },400)
            },closeDialog(){
                this.playFile=null
            }
        },
        components: {Video},
        mounted() {
        },
        props:['keyWord'],
        computed:{
            hidePage:function () {
                if(this.totalCount<20){
                    return true//当仅有一页时隐藏分页
                }
                return false
            }
        }
    }
</script>

<style scoped>

</style>
