<template>
  <el-main class="container">
    <!-- <div v-if="showTitle" class="title">
            <p>跨媒体信息检索系统</p>
        </div> -->
    <div class="search-container">
      <div class="logo" v-if="showTitle">
        <Logo />
      </div>
      <SearchInput
        :style="style"
        class="search-input"
        :input.sync="input"
        @search="search"
        @uploadFile="searchImage"
      />
    </div>
    <div class="result-container" v-loading="loading">
      <el-tabs type="border-card" v-show="showTabs">
        <el-tab-pane label="文本检索" class="el-tab-pane">
          <TextPage :keyWord="input" ref="textPage"></TextPage>
        </el-tab-pane>
        <el-tab-pane label="音频检索" class="el-tab-pane">
          <AudioPage :keyWord="input" ref="audioPage"></AudioPage>
        </el-tab-pane>
        <el-tab-pane label="视频检索" class="el-tab-pane">
          <VideoPage :keyWord="input" ref="videoPage"></VideoPage>
        </el-tab-pane>
        <el-tab-pane label="图片检索" class="el-tab-pane">
          <h1>图片检索结果</h1>
          <template v-if="imageList.length">
            <ShowImage
              v-for="url in imageList"
              :key="url"
              :image-url="url"
              :image-list="imageList"
            />
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- <div style="position:absolute;right:0px;bottom:0px;">
            <router-link to="/login">登陆</router-link>
        </div> -->
  </el-main>
</template>

<script>
import SearchInput from "@/components/SearchInput";
import ShowImage from "@/components/ShowImage";
import { searchImage } from "@/apis/search";
import TextPage from "@/views/textPage";
import AudioPage from "@/views/audioPage";
import VideoPage from "@/views/videoPage";
import Logo from "@/components/Logo";
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
    TextPage,
    AudioPage,
    VideoPage,
    Logo,
  },
  data: () => ({
    input: "",
    style: {
      left: "50%",
      transform: `translate(-50%, 240px)`,
    },
    imageList: [],
    audioInfo: null,
    showTabs: false,
    loading: false,
    showTitle: true,
  }),
  methods: {
    search() {
      this.showTitle = false;
      if (this.input !== "") {
        this.imageList = [];
        this.toggle(); //过渡动画
        this.loading = true;
        setTimeout(() => {
          //加载数据
          this.$refs.textPage.searchText();
          this.$refs.audioPage.searchAudio();
          this.$refs.videoPage.searchVideo();
          this.loading = false;
          this.showTabs = true;
        }, 400);
      }
    },
    async searchImage(file) {
      this.audioInfo = null;
      this.toggle();
      console.log(file);
      const { data } = await searchImage(file.raw);
      setTimeout(() => {
        this.imageList = data.map(
          (e) => `${process.env.VUE_APP_IMAGE_API}/${e.split("\\").join("/")}`
        );
        console.log(this.imageList);
      }, 400);
    },
    toggle() {
      if (this.style.left === "50%") {
        this.style = {
          left: 0,
          transform: `translate(0, 0)`,
        };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 40px;
  position: fixed;
  margin-left: 39%;
  margin-top: 130px;
  font-weight: 600;
}

.search-container {
  position: relative;
  height: 64px;
  .logo {
    position: absolute;
    left: 0;
    right: 0;
  }
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
.el-tab-pane {
  width: 1830px;
}
</style>
