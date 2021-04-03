<template >
  <el-main>
    <SearchInput class="search-input" :input.sync="input" @search="search" @uploadFile="searchImage"/>
  </el-main>
</template>

<script>
import SearchInput from '@/components/SearchInput'
export default {
  name: "Result",
  components:{
    SearchInput
  },
  data: () => ({
    input: "",
    imageList:[]
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
 
}
</style>
