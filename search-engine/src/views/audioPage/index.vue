<template>
    <div>
        <template v-if="audioInfo">
            <AudioList :audio-info="audioInfo"  @func="getMsgFromSon" ref="audioList" />
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
    import AudioList from "@/components/AudioList";
    import {searchAudio} from "../../apis/search";

    export default {
        name: "AudioPage",
        data() {
            return {
                audioInfo:null,
                totalCount:0,
                pageNum:1,
                pageSize:20
            }
        },
        methods: {
            async searchAudio(){
                const {data} = await searchAudio(this.keyWord,this.pageNum,this.pageSize);
                if(data.code!==100){
                    this.$message.error("查询出错音频，请更换关键词！")
                }
                this.audioInfo=data.map.data.results
                //重新渲染计算
                setTimeout(() => {
                    this.$refs.audioList.parseInfo();
                }, 100);
            },
            handleCurrentChange(val) {
                this.pageNum=val
                this.searchText()
            },getMsgFromSon(data){
                this.totalCount=data
            }
        },
        components: {AudioList},
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
