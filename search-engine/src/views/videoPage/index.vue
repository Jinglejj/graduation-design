<template>
    <div>
        <template v-if="videoInfo">
            <p class="resultsTips">为您搜索到{{totalCount}}条相关视频</p>
            <VideoList :videoInfo="videoInfo" @func="getMsgFromSon" ref="videoList"></VideoList>
            <div class="block">
                <el-pagination
                        @current-change="handleCurrentChange"
                        :current-page.sync="pageNum"
                        :page-size="pageSize"
                        :hide-on-single-page="hidePage"
                        layout="prev, pager, next, jumper"
                        :total="totalCount"
                >
                </el-pagination>
            </div>
            <template v-if="totalCount===0">
                <p class="notFound">
                    抱歉没有找到与“<span>{{this.keyWord}}</span>”相关的视频。
                </p>
            </template>
        </template>


    </div>
</template>

<script>
    import {searchVideo} from "../../apis/search";
    import VideoList from "@/components/VideoList"
    import ResultMixins from "@/mixins/result-mixins";

    export default {
        name: "VideoPage",
        mixins: [ResultMixins],
        components: {VideoList},
        data() {
            return {
                videoInfo: null,
            };
        },
        methods: {
            async search() {
                const {data} = await searchVideo(
                    this.keyWord,
                    this.pageNum,
                    this.pageSize
                );
                if (data.code !== 100) {
                    this.$message.error("查询视频出错，请更换关键词！");
                }
                this.videoInfo = data.map.data.results;
                //重新渲染计算
                setTimeout(() => {
                    this.$refs.videoList.parseInfo();
                }, 100);
            }, getMsgFromSon(data) {
                this.totalCount = data
            }
        },
    };
</script>

<style scoped>
</style>
