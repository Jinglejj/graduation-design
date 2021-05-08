<template>
    <div>
        <template v-if="audioInfo">
            <p class="resultsTips">为您搜索到{{totalCount}}条相关音频</p>
            <AudioList :audio-info="audioInfo" @func="getMsgFromSon" ref="audioList"/>
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
            <template v-if="totalCount===0">
                <p class="notFound">
                    抱歉没有找到与“<span>{{this.keyWord}}</span>”
                    相关的音频。
                </p>
            </template>
        </template>
    </div>
</template>

<script>
    import AudioList from "@/components/AudioList";
    import {searchAudio} from "../../apis/search";
    import ResultMixins from "@/mixins/result-mixins"

    export default {
        name: "AudioPage",
        mixins: [ResultMixins],
        components: {AudioList},
        data() {
            return {
                audioInfo: null,
            }
        },
        methods: {
            async search() {
                const {data} = await searchAudio(this.keyWord, this.pageNum, this.pageSize);
                if (data.code !== 100) {
                    this.$message.error("查询出错音频，请更换关键词！")
                }
                this.audioInfo = data.map.data.results
                //重新渲染计算
                setTimeout(() => {
                    this.$refs.audioList.parseInfo();
                }, 100);
            }, getMsgFromSon(data) {
                this.totalCount = data
            }
        }
    }
</script>

<style scoped>

</style>
