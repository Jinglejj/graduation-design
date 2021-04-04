<template >
  <el-main class="container">
    <div class="search-container">
      <SearchInput
        :style="style"
        class="search-input"
        :input.sync="input"
        @search="search"
        @uploadFile="searchImage"
      />
    </div>
    <div  class="result-container">
      <template v-if="imageList.length">
              <ShowImage 
        v-for="url in imageList"
        :key="url"
        :image-url="url"
        :image-list="imageList"
      />
      </template>
      <template v-else>
            <VueAudio :audio-info="info" />
      </template>
    </div>
  </el-main>
</template>

<script>
import SearchInput from "@/components/SearchInput";
import ShowImage from "@/components/ShowImage";
import VueAudio from "@/components/audio/VueAudio";
const imageData = [
  "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
  "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
  "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
  "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
  "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
  "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
  "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
  "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
  "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
];
export default {
  name: "Home",
  components: {
    SearchInput,
    ShowImage,
    VueAudio
  },
  data: () => ({
    input: "",
    style: {
      left: "50%",
      transform: `translate(-50%, 240px)`,
    },
    imageList: [],
    info: null,
  }),
  methods: {
    search() {
      console.log(this.input);
      this.imageList = [];
      this.style = {
        left: 0,
        transform: `translate(0, 0)`,
      };
      setTimeout(() => {
        this.info = {
          src: "http://106.14.137.176:8080/blog/static/1.mp3",
          currentTime: 0, //音频当前时间
          endTime: 258, //音频结束时间
          title: "来自个人服务器数据比较慢",
          text:
            "测试数所所所所所所所所所所所所测试数所所所所所所所所所所所所测试数所所所所所所所所所所所所测试数所所所所所所所所所所所所测试数所所所所所所所所所所所所测试数所所所所所所所所所所所所",
        };
      }, 400);
    },
    searchImage(file) {
      console.log(file);
      this.info = null;
      this.style = {
        left: 0,
        transform: `translate(0, 0)`,
      };
      setTimeout(() => {
        this.imageList = imageData;
      }, 400);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-container {
  position: relative;
  height: 64px;
  .search-input {
    position: absolute;
    width: 600px;
    transition: all 0.5s;
  }
}
.result-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
