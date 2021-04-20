<template>
    <div>
        <template v-if="textInfo">
            <TextInfo :key="text.id" v-for="text in textInfo" :text-info="text"/>
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
    import {searchText}  from "@/apis/search";
    import TextInfo from "@/components/TextInfo";

    export default {
        name: "TextPage",
        data() {
            return {
                textInfo: null,
                totalCount:0,
                pageNum:1,
                pageSize:20
            }
        },
        methods: {
            async searchText(){
                const {data} = await searchText(this.keyWord,this.pageNum,this.pageSize);
               // console.log(data)
                if(data.code!==100){
                 this.$message.error("查询文本出错，请更换关键词！")
                }
                this.textInfo=data.map.data.results
                this.totalCount=data.map.data.total
            },
            handleCurrentChange(val) {
               this.pageNum=val
               this.searchText()
            }
        },
        components: {
            TextInfo
        },
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
