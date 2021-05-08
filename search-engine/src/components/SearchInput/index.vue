<template >
  <el-input
    placeholder="请输入内容"
    type="text"
    prefix-icon="el-icon-search"
    @keyup.enter.native="$emit('search')"
    :value="input"
    @input="(val) => $emit('update:input', val)"
  >
    <template slot="append" style="backgorund-color:#409EFF">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        :auto-upload="false"
        :show-file-list="false"
        :on-change="(file) => $emit('uploadFile', file)"
      >
        <i class="el-icon-picture-outline"></i>
      </el-upload>
    </template>
  </el-input>
</template>


<script>
export default {
  name: "SearchInput",
  props: {
    input: {
      type: String,
      required: true,
    },
  },
};
</script>
