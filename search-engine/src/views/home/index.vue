<template>
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
    <div class="result-container">
      <template v-if="imageList.length">
        <ShowImage
          v-for="url in imageList"
          :key="url"
          :image-url="url"
          :image-list="imageList"
        />
      </template>
      <template v-if="textInfo">
        <MediaUpload></MediaUpload>
      </template>
      <template v-if="audioInfo">
        <AudioList :audio-info="audioInfo" />
      </template>
      <template v-if="textInfo">
        <TextInfo :key="text.id" v-for="text in textInfo" :text-info="text" />
      </template>
    </div>
  </el-main>
</template>

<script>
import SearchInput from "@/components/SearchInput";
import ShowImage from "@/components/ShowImage";
import TextInfo from "@/components/TextInfo";
import AudioList from "@/components/AudioList";
import MediaUpload from "@/components/MediaUpload";
import { searchImage } from "@/apis/search";
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
    AudioList,
    TextInfo,
    MediaUpload,
  },
  data: () => ({
    input: "",
    style: {
      left: "50%",
      transform: `translate(-50%, 240px)`,
    },
    imageList: [],
    audioInfo: null,
    textInfo: null,
  }),
  methods: {
    search() {
      console.log(this.input);
      this.imageList = [];
      this.toggle(); //过渡动画
      setTimeout(() => {
        this.audioInfo = [
          {
            duration: 1799000,
            start_time: 93010,
            score: 5.8979893,
            "@timestamp": "2021-04-09T01:52:43.607Z",
            file_name: "xinwen_20210402_0700_0730.wav",
            "@version": "1",
            id: 2508,
            sentence_text:
              "<span style= 'color:red'>河</span><span style= 'color:red'>南</span>广播电视台新闻广播。",
            type: "audio",
          },
          {
            duration: 1799000,
            start_time: 14610,
            score: 5.607868,
            "@timestamp": "2021-04-09T01:52:43.590Z",
            file_name: "xinwen_20210402_0700_0730.wav",
            "@version": "1",
            id: 2497,
            sentence_text:
              "<span style= 'color:red'>河</span><span style= 'color:red'>南</span>新闻广播。",
            type: "audio",
          },
          {
            duration: 1799000,
            start_time: 1607000,
            score: 5.3793635,
            "@timestamp": "2021-04-09T01:52:43.644Z",
            file_name: "xinwen_20210402_0700_0730.wav",
            "@version": "1",
            id: 2648,
            sentence_text:
              "<span style= 'color:red'>河</span><span style= 'color:red'>南</span>新闻节目播送完了，您可以进入学习强国，点击电台收听<span style= 'color:red'>河</span><span style= 'color:red'>南</span>新闻广播，还可以通过大象新闻客户端、<span style= 'color:red'>河</span><span style= 'color:red'>南</span>泥草微信公众号、<span style= 'color:red'>河</span><span style= 'color:red'>南</span>新闻广播微信公众号获取更多新闻资讯。",
            type: "audio",
          },
          {
            duration: 1799000,
            start_time: 492480,
            score: 5.178525,
            "@timestamp": "2021-04-09T01:52:43.619Z",
            file_name: "xinwen_20210402_0700_0730.wav",
            "@version": "1",
            id: 2547,
            sentence_text:
              "<span style= 'color:red'>河</span><span style= 'color:red'>南</span>台记者王发艳报道，<span style= 'color:red'>河</span><span style= 'color:red'>南</span>省农学会第七次会员代表大会。",
            type: "audio",
          },
          {
            duration: 1799000,
            start_time: 160060,
            score: 3.8919559,
            "@timestamp": "2021-04-09T01:52:43.610Z",
            file_name: "xinwen_20210402_0700_0730.wav",
            "@version": "1",
            id: 2516,
            sentence_text:
              "<span style= 'color:red'>河</span><span style= 'color:red'>南</span>新闻广播特别策划清明我们祭先烈。",
            type: "audio",
          },
          {
            duration: 1799000,
            start_time: 84590,
            score: 3.7475898,
            "@timestamp": "2021-04-09T01:52:43.607Z",
            file_name: "xinwen_20210402_0700_0730.wav",
            "@version": "1",
            id: 2507,
            sentence_text:
              "<span style= 'color:red'>河</span><span style= 'color:red'>南</span>的声音。",
            type: "audio",
          },
          {
            duration: 60000,
            start_time: 14970,
            score: 3.7169287,
            "@timestamp": "2021-04-09T01:52:43.650Z",
            file_name: "test.wav",
            "@version": "1",
            id: 2673,
            sentence_text:
              "<span style= 'color:red'>河</span><span style= 'color:red'>南</span>新闻广播。",
            type: "audio",
          },
          {
            duration: 1799000,
            start_time: 1122270,
            score: 3.687468,
            "@timestamp": "2021-04-09T01:52:43.635Z",
            file_name: "xinwen_20210402_0700_0730.wav",
            "@version": "1",
            id: 2606,
            sentence_text:
              "最<span style= 'color:red'>河</span><span style= 'color:red'>南</span>的声音。",
            type: "audio",
          },
          {
            duration: 60000,
            start_time: 14970,
            score: 3.687468,
            "@timestamp": "2021-04-09T01:52:43.648Z",
            file_name: "test.wav",
            "@version": "1",
            id: 2665,
            sentence_text:
              "<span style= 'color:red'>河</span><span style= 'color:red'>南</span>新闻广播。",
            type: "audio",
          },
          {
            duration: 60000,
            start_time: 14970,
            score: 3.687468,
            "@timestamp": "2021-04-09T01:52:43.653Z",
            file_name: "test.wav",
            "@version": "1",
            id: 2689,
            sentence_text:
              "<span style= 'color:red'>河</span><span style= 'color:red'>南</span>新闻广播。",
            type: "audio",
          },
          {
            duration: 1799000,
            start_time: 122130,
            score: 3.584924,
            "@timestamp": "2021-04-09T01:52:43.609Z",
            file_name: "xinwen_20210402_0700_0730.wav",
            "@version": "1",
            id: 2512,
            sentence_text:
              "欢迎收听<span style= 'color:red'>河</span><span style= 'color:red'>南</span>新闻广播，<span style= 'color:red'>河</span><span style= 'color:red'>南</span>经济广播正在并机直播的<span style= 'color:red'>河</span><span style= 'color:red'>南</span>新闻。",
            type: "audio",
          },
          {
            duration: 1799000,
            start_time: 1130570,
            score: 3.5658414,
            "@timestamp": "2021-04-09T01:52:43.635Z",
            file_name: "xinwen_20210402_0700_0730.wav",
            "@version": "1",
            id: 2607,
            sentence_text:
              "fm 九十五点五i fm 一零二点三a m 六五七<span style= 'color:red'>河</span><span style= 'color:red'>南</span>新闻广播<span style= 'color:red'>河</span><span style= 'color:red'>南</span>新闻正在直播。",
            type: "audio",
          },
          {
            duration: 1799000,
            start_time: 1012100,
            score: 3.5472436,
            "@timestamp": "2021-04-09T01:52:43.631Z",
            file_name: "xinwen_20210402_0700_0730.wav",
            "@version": "1",
            id: 2596,
            sentence_text:
              "<span style= 'color:red'>河</span><span style= 'color:red'>南</span>台记者谷艳敏报道，定制客运是以既有客运班线为基础，以七十d 和目的地为服务区域提供的城际快线城际拼车服务。",
            type: "audio",
          },
          {
            duration: 1799000,
            start_time: 201770,
            score: 3.5097933,
            "@timestamp": "2021-04-09T01:52:43.610Z",
            file_name: "xinwen_20210402_0700_0730.wav",
            "@version": "1",
            id: 2519,
            sentence_text:
              "<span style= 'color:red'>河</span><span style= 'color:red'>南</span>台记者刘长元报道。",
            type: "audio",
          },
          {
            duration: 1799000,
            start_time: 509700,
            score: 3.4615674,
            "@timestamp": "2021-04-09T01:52:43.620Z",
            file_name: "xinwen_20210402_0700_0730.wav",
            "@version": "1",
            id: 2549,
            sentence_text:
              "您正在收听的是<span style= 'color:red'>河</span><span style= 'color:red'>南</span>新闻。",
            type: "audio",
          },
          {
            duration: 1799000,
            start_time: 1117910,
            score: 3.4615674,
            "@timestamp": "2021-04-09T01:52:43.635Z",
            file_name: "xinwen_20210402_0700_0730.wav",
            "@version": "1",
            id: 2605,
            sentence_text:
              "嬴正在收听的是<span style= 'color:red'>河</span><span style= 'color:red'>南</span>新闻。",
            type: "audio",
          },
          {
            duration: 1799000,
            start_time: 96900,
            score: 3.353471,
            "@timestamp": "2021-04-09T01:52:43.608Z",
            file_name: "xinwen_20210402_0700_0730.wav",
            "@version": "1",
            id: 2509,
            sentence_text:
              "<span style= 'color:red'>河</span><span style= 'color:red'>南</span>新闻。",
            type: "audio",
          },
          {
            duration: 1799000,
            start_time: 278390,
            score: 3.337203,
            "@timestamp": "2021-04-09T01:52:43.613Z",
            file_name: "xinwen_20210402_0700_0730.wav",
            "@version": "1",
            id: 2527,
            sentence_text:
              "抓住国家战略叠加机遇，自觉把<span style= 'color:red'>河</span><span style= 'color:red'>南</span>发展放在国家重大战略和区域功能布局中去谋划，找准定位，发挥优势。",
            type: "audio",
          },
          {
            duration: 1799000,
            start_time: 514030,
            score: 3.2320907,
            "@timestamp": "2021-04-09T01:52:43.620Z",
            file_name: "xinwen_20210402_0700_0730.wav",
            "@version": "1",
            id: 2550,
            sentence_text:
              "最<span style= 'color:red'>河</span><span style= 'color:red'>南</span>的声音。",
            type: "audio",
          },
          {
            duration: 60000,
            start_time: 14970,
            score: 3.2320907,
            "@timestamp": "2021-04-09T01:52:43.651Z",
            file_name: "test.wav",
            "@version": "1",
            id: 2681,
            sentence_text:
              "<span style= 'color:red'>河</span><span style= 'color:red'>南</span>新闻广播。",
            type: "audio",
          },
          {
            duration: 60000,
            start_time: 14970,
            score: 3.2320907,
            "@timestamp": "2021-04-09T01:52:43.654Z",
            file_name: "test.wav",
            "@version": "1",
            id: 2697,
            sentence_text:
              "<span style= 'color:red'>河</span><span style= 'color:red'>南</span>新闻广播。",
            type: "audio",
          },
          {
            duration: 1799000,
            start_time: 977750,
            score: 3.2064471,
            "@timestamp": "2021-04-09T01:52:43.631Z",
            file_name: "xinwen_20210402_0700_0730.wav",
            "@version": "1",
            id: 2593,
            sentence_text:
              "啊，那未来的更多的相关内容也请大家持续关注我们<span style= 'color:red'>河</span><span style= 'color:red'>南</span>新闻广播的节目。",
            type: "audio",
          },
          {
            duration: 1799000,
            start_time: 701760,
            score: 3.1979218,
            "@timestamp": "2021-04-09T01:52:43.624Z",
            file_name: "xinwen_20210402_0700_0730.wav",
            "@version": "1",
            id: 2566,
            sentence_text:
              "<span style= 'color:red'>河</span><span style= 'color:red'>南</span>新闻广播特别策划清明我们寄先令。",
            type: "audio",
          },
          {
            duration: 1799000,
            start_time: 526770,
            score: 3.162919,
            "@timestamp": "2021-04-09T01:52:43.621Z",
            file_name: "xinwen_20210402_0700_0730.wav",
            "@version": "1",
            id: 2552,
            sentence_text:
              "<span style= 'color:red'>河</span><span style= 'color:red'>南</span>新闻广播<span style= 'color:red'>河</span><span style= 'color:red'>南</span>新闻正在直播。接下来您将听到辛丑年黄帝故里拜祖大典将于四月十四号上午在新郑市黄帝故里举行。",
            type: "audio",
          },
          {
            duration: 1799000,
            start_time: 148030,
            score: 3.1366673,
            "@timestamp": "2021-04-09T01:52:43.609Z",
            file_name: "xinwen_20210402_0700_0730.wav",
            "@version": "1",
            id: 2515,
            sentence_text:
              "<span style= 'color:red'>河</span><span style= 'color:red'>南</span>自贸试验区条例草案二审鼓励发展贸易新业态、新模式。",
            type: "audio",
          },
        ];
        this.textInfo = [
          {
            author_name: "文汇",
            date: "2021-03-28T22:17:00.000Z",
            score: 13.654961,
            "@timestamp": "2021-04-08T13:48:19.701Z",
            "@version": "1",
            id: 72,
            pic:
              "https://dfzximg02.dftoutiao.com/news/20210329/20210329061712_1e3692c3cd96e16f6f316d7a1060ed7a_1_mwpm_03201609.jpeg",
            type: "text",
            category: "头条",
            title:
              "沪上新开书店中有<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>经营的占比高达84% <span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>几乎成书店业态标配",
            url: "https://mini.eastday.com/mobile/210329061712284876382.html",
            content:
              "主打精品<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>的建投书局传记<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>馆。大众书局的“纸品<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>”。制图：李洁步入上海街头的书店，<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>的香气伴随书香而加倍馥郁，店里的<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>师甚至还会根据热门小说的风格，端出一杯“限量款”拉花<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>。首届上海<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>文化周将于今天启幕，上海市书刊发行行业协会日前发布的《2021年上海主要实体书店<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>经营项目调研报告》显示，过去两年多来，沪上新开书店中有<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>经营的书店占84%，<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>经营正在成为本地新开书店的标配书店<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>经营要素包括：有固定的经营场地，有休闲座位，有两种以上<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>品种，配备专业<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>师等。比如，走进新晋网红茑屋书店，一抬头就能看到精心布置的复古<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>吧台，周围遍布<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>文化书籍及器具，让读者沉浸式领略<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>文化；钟书阁第一家店泰晤士店2013年开业后，自营<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>品牌“金字塔<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>”成为每家钟书阁门店的标配",
          },
          {
            author_name: "周到",
            date: "2021-03-28T22:17:00.000Z",
            score: 13.022587,
            "@timestamp": "2021-04-08T13:48:19.702Z",
            "@version": "1",
            id: 73,
            pic:
              "https://dfzximg02.dftoutiao.com/news/20210329/20210329061711_2e5e9f5f8a6f9afeadd144e69185c6bf_1_mwpm_03201609.jpeg",
            type: "text",
            category: "头条",
            title:
              "上海<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>文化周今天开幕 海派文献专家揭秘近代上海<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>地图",
            url: "https://mini.eastday.com/mobile/210329061711746861847.html",
            content:
              "这里的<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>馆最密集，每平方公里有57.9家<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>馆，差不多每走个十几步，就能看见一家。作为国际化都市，上海的<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>历史可以追溯到19世纪中叶。就职于上海闵行区图书馆古籍部的副研究馆员孙莺曾出版过《近代上海<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>地图》与《<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>文录》，她不仅是一位<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>控（一天至少两杯<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>），对<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>有着颇深的研究。近年来，上海的<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>馆数量也在不断增长，不论是<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>消费规模，还是<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>门店数量都位居全国首位。在文化与产业的碰撞交融中，上海<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>文化周应运而生……3月29日，在上海虹桥国家会展中心，上海<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>文化周开幕。而在上海<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>文化周开幕之前，新闻晨报将邀请知名影视剧制片人、作家简平与海派文献研究工作者孙莺走进一个特殊的直播间——在上海报业大厦43层、浦西最高的楼宇<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>吧举行一场别开生面的高空<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>主题直播活动，伴着<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>的香气，聊聊近代上海<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>地图与<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>的文化魅力。",
          },
          {
            author_name: "新民晚报",
            date: "2021-04-09T00:51:00.000Z",
            score: 4.7384653,
            "@timestamp": "2021-04-09T01:37:27.952Z",
            "@version": "1",
            id: 186,
            pic:
              "https://dfzximg02.dftoutiao.com/news/20210409/20210409085156_54e12378d8ec01e7285dd1c437308559_1_mwpm_03201609.png",
            title: "手机隔空充电、电脑指挥种地…… 第八届上交会亮点抢先看",
            category: "头条",
            type: "text",
            url: "https://mini.eastday.com/mobile/210409085156945280498.html",
            content:
              "公司负责人王金悦表示：“未来的种地方式就是打开手机或者电脑，点击自己的农场，把机器人拖到指定地点，安排它具体作业，然后你可以喝着<span style= 'color:red'>咖</span><span style= 'color:red'>啡</span>，看它干活。”",
          },
          {
            author_name: "厦门网",
            date: "2021-04-05T22:45:00.000Z",
            score: 4.326361,
            "@timestamp": "2021-04-08T13:48:19.719Z",
            "@version": "1",
            id: 111,
            pic:
              "https://dfzximg02.dftoutiao.com/news/20210406/20210406064542_2feff31ff2c249fe7e4a029100b00658_1_mwpm_03201609.jpeg",
            type: "text",
            category: "头条",
            title: "取件无需核对、寄存未经同意 市民吐槽在菜鸟驿站取件的糟心事",
            url: "https://mini.eastday.com/mobile/210406064542256831756.html",
            content:
              "“但整箱<span style= 'color:red'>饮</span><span style= 'color:red'>料</span>等重物就完全不是一回事了！”王女士生气地说。当晚，记者陪王女士一起到菜鸟驿站取件。正值晚高峰，驿站已有四五位顾客在排队，地上、货架上摆满了大大小小待领取的快递包裹。记者注意到，大件快递主要包括家电、粮油、家居用品、整箱<span style= 'color:red'>饮</span><span style= 'color:red'>料</span>等。当王女士提出，这一箱乌龙茶有点重，能不能帮她搬上楼时，一名工作人员回答可以，但要稍晚些。",
          },
          {
            author_name: "中国经济网",
            date: "2021-04-05T21:01:00.000Z",
            score: 3.2502522,
            "@timestamp": "2021-04-08T13:48:19.721Z",
            "@version": "1",
            id: 116,
            pic:
              "https://dfzximg02.dftoutiao.com/news/20210406/20210406050142_2a67cd7c6869a1baebdc95ee38d981ee_1_mwpm_03201609.jpeg",
            type: "text",
            category: "头条",
            title: "成都加工贸易形势喜人",
            url: "https://mini.eastday.com/mobile/210406050142264413828.html",
            content:
              "成都青铁国际贸易有限公司主要通过中欧班列（成渝）进出口电子产品、日用百货、食品<span style= 'color:red'>饮</span><span style= 'color:red'>料</span>，副总经理陈颖对今年外贸形势也十分看好：“去年疫情期间我们还在担心日子怎么过，而今年前2个月进出口总值比去年同期增长了50%",
          },
        ];
      }, 400);
    },
    async searchImage(file) {
      this.audioInfo = null;
      this.toggle();
      console.log(file)
      const { data = imageData } = await searchImage(file.raw);
      setTimeout(() => {
        this.imageList = data;
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
