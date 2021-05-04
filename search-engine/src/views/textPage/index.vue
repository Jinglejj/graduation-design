<template>
  <div>
    <template v-if="textInfo">
      <TextInfo :key="text.id" v-for="text in textInfo" :text-info="text" />
    </template>
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
  </div>
</template>

<script>
import { searchText } from "@/apis/search";
import TextInfo from "@/components/TextInfo";

export default {
  name: "TextPage",
  props: {
    keyword: {
      type: String,
      required: true,
    },
  },
  components: {
    TextInfo,
  },
  data() {
    return {
      textInfo: null,
      totalCount: 0,
      pageNum: 1,
      pageSize: 20,
    };
  },
  computed: {
    hidePage() {    
      return this.totalCount < this.pageSize;
    },
  },
  watch: {
    keyword(val, oldVal) {
      if (val !== oldVal) {
        this.pageNum = 1;
        this.pageSize = 20;
        this.searchText();
      }
    },
  },
  methods: {
    async searchText() {
      if (this.keyword.trim()) {
        const { data } = await searchText(
          this.keyword,
          this.pageNum,
          this.pageSize
        );
        data.code !== 100 &&
          this.$message.error("查询文本出错，请更换关键词！");
        this.textInfo = data.map.data.results;
        this.totalCount = data.map.data.total;
      }
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      this.searchText();
    },
  },
  created() {
    //初始化获取数据
    this.searchText();
  },
};
</script>

<style scoped>
</style>
