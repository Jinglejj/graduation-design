<template>
  <el-main class="container">
    <div v-if="!showTitle" style="float:left;margin: 16px 16px 16px 0;">
      <img src="img/logo.png" style="width: 130px;height: 24px"  alt="logo">
    </div>
    <div :class="this.left">
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
      <div class="result-container">
        <keep-alive>
          <Result v-if="showResult">
            <TextPage slot="text" :keyWord="keyWord" />
            <AudioPage slot="audio" :keyWord="keyWord" />
            <VideoPage slot="video" :keyWord="keyWord" />
          </Result>
          <template v-else-if="showImage">
            <div>
              <ShowImage
                      v-for="url in imageList"
                      :key="url"
                      :imageUrl="url"
                      :imageList="imageList"
              />
            </div>
          </template>
        </keep-alive>
      </div>
    </div>

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
  import Result from "./components/Result";
  import {loading} from '@/utils/loading'
  export default {
    name: "Home",
    components: {
      SearchInput,
      ShowImage,
      TextPage,
      AudioPage,
      VideoPage,
      Logo,
      Result,
    },
    data: () => ({
      input: "",
      //解耦
      keyWord: "",
      style: {
        left: "50%",
        transform: `translate(-50%, 240px)`,
      },
      imageList: [],
      showTitle: true,
      showResult: false,
      showImage: false,
    }),
    methods: {
      async search() {
        if (this.input !== "") {
          document.title=this.input+"_跨媒体搜索";
          this.toggle(); //过渡动画
          this.keyWord = this.input;
          this.showImage = false;
          setTimeout(() => {
            this.showResult = true;
          }, 400);
        }
      },
      async searchImage(file) {
        this.audioInfo = null;
        this.toggle();
        this.showImage = true;
        this.showResult = false;
        this.input='';
        const data= await loading(this,async ()=>searchImage(file.raw));
        document.title="图片检索_跨媒体搜索";
        const imageList = data.map(
                (e) => `${process.env.VUE_APP_IMAGE}/${e.split("\\").join("/")}`
        );
        setTimeout(() => {
          this.imageList = imageList;
        }, 400);
      },
      toggle() {
        this.showTitle = false;
        if (this.style.left === "50%") {
          this.style = {
            left: 0,
            transform: `translate(0, 0)`,
          };
        }
      }
    },
    computed:{
      left(){
        if(!this.showTitle){
          return "left";
        }
        return "none"
      }
    }
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
  .left{
    float: left;
    width: 91%;
  }
  .none{

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
