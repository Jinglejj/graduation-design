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
        <div class="result-container"  >
            <el-tabs type="border-card" v-show="showTabs">
                <el-tab-pane label="文本检索" class="el-tab-pane">
                    <TextPage :keyWord="input" ref="textPage"></TextPage>
                </el-tab-pane>
                <el-tab-pane label="音频检索" class="el-tab-pane">
                    <template v-if="audioInfo">
                        <AudioList :audio-info="audioInfo"/>
                    </template>
                </el-tab-pane>
                <el-tab-pane label="视频检索" class="el-tab-pane">
                    <h1>视频检索结果</h1>
                </el-tab-pane>
                <el-tab-pane label="图片检索" class="el-tab-pane">
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
    </el-main>
</template>

<script>
    import SearchInput from "@/components/SearchInput";
    import ShowImage from "@/components/ShowImage";
    import AudioList from "@/components/AudioList";
    import MediaUpload from "@/components/MediaUpload";
    import {searchImage} from "@/apis/search";
    import TextPage from "@/views/textPage"
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
            MediaUpload,
            TextPage
        },
        data: () => ({
            input: "",
            style: {
                left: "50%",
                transform: `translate(-50%, 240px)`,
            },
            imageList: [],
            audioInfo: null,
            showTabs: false
        }),
        methods: {
            search() {
                console.log(this.input);
                if(this.input!==''){
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
                    }, 400);
                    //加载数据
                    this.$refs.textPage.searchText();

                    this.showTabs = true
                }
            },
            async searchImage(file) {
                this.audioInfo = null;
                this.toggle();
                console.log(file)
                const {data} = await searchImage(file.raw);
                setTimeout(() => {
                    this.imageList = data.map(e => `${process.env.VUE_APP_IMAGE_API}/${e.split('\\').join('/')}`);
                    console.log(this.imageList)
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
    .el-tab-pane{
        width: 1830px;
    }
</style>
