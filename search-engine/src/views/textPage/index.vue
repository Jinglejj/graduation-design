<template>
    <div>
        <template v-if="textInfo">
            <p class="resultsTips">为您搜索到{{totalCount}}条相关新闻</p>
            <TextInfo :key="text.id" v-for="text in textInfo" :text-info="text"/>
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
                    抱歉没有找到与“<span>{{this.keyWord}}</span>”相关的新闻。
                </p>
            </template>
        </template>

    </div>
</template>

<script>
    import {searchText} from "@/apis/search";
    import TextInfo from "@/components/TextInfo";
    import ResultMixins from "@/mixins/result-mixins";

    export default {
        name: "TextPage",
        mixins: [ResultMixins],
        components: {
            TextInfo,
        },
        data() {
            return {
                textInfo: null,
            };
        },
        methods: {
            async search() {
                if (this.keyWord.trim()) {
                    const {data} = await searchText(
                        this.keyWord,
                        this.pageNum,
                        this.pageSize
                    );
                    data.code !== 100 &&
                    this.$message.error("查询文本出错，请更换关键词！");
                    this.textInfo = data.map.data.results;
                    this.totalCount = data.map.data.total;
                }
            }
        }
    };
</script>

<style scoped>
</style>
