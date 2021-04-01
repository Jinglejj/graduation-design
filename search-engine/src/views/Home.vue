<template>
  <el-main>
    <el-input placeholder="请输入内容" v-model="input" class="search-input">
      <template slot="prepend">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          :file-list="fileList"
          :auto-upload="false"
          :show-file-list="false"
          :on-change="searchImage"
        >
          <i class="el-icon-picture-outline"></i>
        </el-upload>
      </template>
      <el-button
        slot="append"
        icon="el-icon-search"
        @click="search"
      ></el-button>
    </el-input>
  </el-main>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    input: "",
    fileList:[],
  }),
  methods: {
    search() {
      console.log(this.input);
    },
    searchImage(file) {
      console.log(file) ;
    }
  },
};
</script>

<style scoped>
.search-input {
  width: 600px;
  margin-top: 260px;
}
</style>
