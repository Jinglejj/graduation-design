<template>
  <el-main class="container">
    <div v-if="!showTitle" style="float:left;margin: 10px 15px 0px 0px;">
      <img src="img/logo.png" style="width: 130px;height: 24px" alt="logo">
    </div>
    <div :class="this.left" style="width:91%">
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
        // console.log(file);
        const { data } = await searchImage(file.raw);
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
