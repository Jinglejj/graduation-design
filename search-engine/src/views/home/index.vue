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
            <template v-if="audioInfo">
                <AudioList  :audio-info="audioInfo"/>
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
    import AudioList from '@/components/AudioList'
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
            TextInfo
        },
        data: () => ({
            input: "",
            style: {
                left: "50%",
                transform: `translate(-50%, 240px)`,
            },
            imageList: [],
            audioInfo: null,
            textInfo: null
        }),
        methods: {
            search() {
                console.log(this.input);
                this.imageList = [];
                this.toggle(); //过渡动画
                setTimeout(() => {
                   this.audioInfo = [
                       {
                           "duration": 1799000,
                           "start_time": 1456910,
                           "score": 14.713808,
                           "@timestamp": "2021-04-09T01:52:43.641Z",
                           "file_name": "xinwen_20210402_0700_0730.wav",
                           "@version": "1",
                           "id": 2633,
                           "sentence_text": "<span style= 'color:red'>郑</span><span style= 'color:red'>州</span><span style= 'color:red'>南</span><span style= 'color:red'>站</span>是<span style= 'color:red'>郑</span>渝高速铁路正负高速铁路，<span style= 'color:red'>郑</span>登洛城际铁路、济<span style= 'color:red'>南</span>城际铁路的交汇车<span style= 'color:red'>站</span>。通过高铁联络线，<span style= 'color:red'>郑</span><span style= 'color:red'>州</span><span style= 'color:red'>南</span><span style= 'color:red'>站</span>和<span style= 'color:red'>郑</span><span style= 'color:red'>州</span><span style= 'color:red'>站</span>、<span style= 'color:red'>郑</span><span style= 'color:red'>州</span>东<span style= 'color:red'>站</span>互联互通。",
                           "type": "audio"
                       },
                       {
                           "duration": 1799000,
                           "start_time": 122130,
                           "score": 5.136117,
                           "@timestamp": "2021-04-09T01:52:43.609Z",
                           "file_name": "xinwen_20210402_0700_0730.wav",
                           "@version": "1",
                           "id": 2512,
                           "sentence_text": "空气质量指数八十三，属于良<span style= 'color:red'>郑</span><span style= 'color:red'>州</span>市今天尾号五和零的机动车限行。欢迎收听河<span style= 'color:red'>南</span>新闻广播，河<span style= 'color:red'>南</span>经济广播正在并机直播的河<span style= 'color:red'>南</span>新闻。",
                           "type": "audio"
                       },
                       {
                           "duration": 1799000,
                           "start_time": 472440,
                           "score": 5.0144787,
                           "@timestamp": "2021-04-09T01:52:43.619Z",
                           "file_name": "xinwen_20210402_0700_0730.wav",
                           "@version": "1",
                           "id": 2545,
                           "sentence_text": "河<span style= 'color:red'>南</span>台记者冉小辉报道，昨天，省政协十二届常委会第十八次会议在<span style= 'color:red'>郑</span><span style= 'color:red'>州</span>闭幕，省政协主席刘伟出席并讲话。",
                           "type": "audio"
                       },
                       {
                           "duration": 1799000,
                           "start_time": 583970,
                           "score": 4.6614547,
                           "@timestamp": "2021-04-09T01:52:43.622Z",
                           "file_name": "xinwen_20210402_0700_0730.wav",
                           "@version": "1",
                           "id": 2557,
                           "sentence_text": "唱颂歌乐舞敬拜，祈福中华天地人和拜祖大典组委会常务副主任、<span style= 'color:red'>郑</span><span style= 'color:red'>州</span>市政协主席张延明与去年相比，现场恢复了九项议程的典礼，恢复了礼拜嘉宾。",
                           "type": "audio"
                       },
                       {
                           "duration": 1799000,
                           "start_time": 1732350,
                           "score": 4.3766966,
                           "@timestamp": "2021-04-09T01:52:43.647Z",
                           "file_name": "xinwen_20210402_0700_0730.wav",
                           "@version": "1",
                           "id": 2659,
                           "sentence_text": "看眼科就到<span style= 'color:red'>郑</span><span style= 'color:red'>州</span>爱尔眼科爱眼热线零三七幺五六幺八幺六零零。",
                           "type": "audio"
                       },
                       {
                           "duration": 1799000,
                           "start_time": 648120,
                           "score": 4.176347,
                           "@timestamp": "2021-04-09T01:52:43.623Z",
                           "file_name": "xinwen_20210402_0700_0730.wav",
                           "@version": "1",
                           "id": 2562,
                           "sentence_text": "为做好拜祖大典筹备工作，河<span style= 'color:red'>南</span>省<span style= 'color:red'>郑</span><span style= 'color:red'>州</span>市分别成立专门机构，精心制定方案，科学谋划实施，统筹协调推进目前大典各项筹备工作正在有条不紊的推进。",
                           "type": "audio"
                       },
                       {
                           "duration": 1799000,
                           "start_time": 160060,
                           "score": 4.079747,
                           "@timestamp": "2021-04-09T01:52:43.610Z",
                           "file_name": "xinwen_20210402_0700_0730.wav",
                           "@version": "1",
                           "id": 2516,
                           "sentence_text": "辛丑年，黄帝故里拜祖大典将于四月四号上午在新<span style= 'color:red'>郑</span>市黄帝故里举行。河<span style= 'color:red'>南</span>新闻广播特别策划清明我们祭先烈。",
                           "type": "audio"
                       },
                       {
                           "duration": 1799000,
                           "start_time": 1052100,
                           "score": 4.025157,
                           "@timestamp": "2021-04-09T01:52:43.633Z",
                           "file_name": "xinwen_20210402_0700_0730.wav",
                           "@version": "1",
                           "id": 2599,
                           "sentence_text": "举个例子来说吧，<span style= 'color:red'>郑</span><span style= 'color:red'>州</span>往返汝<span style= 'color:red'>州</span>的这条线路。",
                           "type": "audio"
                       },
                       {
                           "duration": 1799000,
                           "start_time": 1000170,
                           "score": 3.6466012,
                           "@timestamp": "2021-04-09T01:52:43.631Z",
                           "file_name": "xinwen_20210402_0700_0730.wav",
                           "@version": "1",
                           "id": 2595,
                           "sentence_text": "省道路客运联网售票平台目前已开通<span style= 'color:red'>郑</span><span style= 'color:red'>州</span>、洛阳、许昌、平顶山等十多个城市，六十多条线路的定制客运服务，从家门口直达目的地的服务模式。",
                           "type": "audio"
                       },
                       {
                           "duration": 1799000,
                           "start_time": 1721080,
                           "score": 3.525216,
                           "@timestamp": "2021-04-09T01:52:43.647Z",
                           "file_name": "xinwen_20210402_0700_0730.wav",
                           "@version": "1",
                           "id": 2658,
                           "sentence_text": "<span style= 'color:red'>郑</span><span style= 'color:red'>州</span>爱尔眼科三位一体青少年近视防控体系，帮妈妈减少孩子最炫的烦恼。",
                           "type": "audio"
                       },
                       {
                           "duration": 1799000,
                           "start_time": 1586410,
                           "score": 3.4609919,
                           "@timestamp": "2021-04-09T01:52:43.644Z",
                           "file_name": "xinwen_20210402_0700_0730.wav",
                           "@version": "1",
                           "id": 2646,
                           "sentence_text": "省会<span style= 'color:red'>郑</span><span style= 'color:red'>州</span>市。今天白天到夜里，阴天有小雨或零星小雨，东北风三到四级。",
                           "type": "audio"
                       },
                       {
                           "duration": 1799000,
                           "start_time": 526770,
                           "score": 3.3357148,
                           "@timestamp": "2021-04-09T01:52:43.621Z",
                           "file_name": "xinwen_20210402_0700_0730.wav",
                           "@version": "1",
                           "id": 2552,
                           "sentence_text": "河<span style= 'color:red'>南</span>新闻广播河<span style= 'color:red'>南</span>新闻正在直播。接下来您将听到辛丑年黄帝故里拜祖大典将于四月十四号上午在新<span style= 'color:red'>郑</span>市黄帝故里举行。",
                           "type": "audio"
                       },
                       {
                           "duration": 1799000,
                           "start_time": 622000,
                           "score": 3.1775873,
                           "@timestamp": "2021-04-09T01:52:43.623Z",
                           "file_name": "xinwen_20210402_0700_0730.wav",
                           "@version": "1",
                           "id": 2560,
                           "sentence_text": "黄河文明拜祖大典组委会宣传活动部常务副部长、<span style= 'color:red'>郑</span><span style= 'color:red'>州</span>市委宣传部副部长石大东。今年呢网上拜祖平台以黄色为主基调，平台上各元素。",
                           "type": "audio"
                       },
                       {
                           "duration": 1799000,
                           "start_time": 109720,
                           "score": 3.119945,
                           "@timestamp": "2021-04-09T01:52:43.608Z",
                           "file_name": "xinwen_20210402_0700_0730.wav",
                           "@version": "1",
                           "id": 2511,
                           "sentence_text": "今天是四月二号星期五，农历二月二十一，<span style= 'color:red'>郑</span><span style= 'color:red'>州</span>市今天白天到夜里，阴天有小雨或零星小雨，东北风三到四级，最高温度十四到十五度，最低温度十到十一度。",
                           "type": "audio"
                       }
                   ]
                   this.textInfo=[
                       {
                       "author_name": "北青网",
                       "date": "2021-03-28T13:19:00.000Z",
                       "score": 9.308606,
                       "@timestamp": "2021-04-08T13:48:19.682Z",
                       "@version": "1",
                       "id": 7,
                       "pic": "https://dfzximg02.dftoutiao.com/news/20210328/20210328211938_c898f7c13bbe69c96e2ac8c25c463113_1_mwpm_03201609.jpeg",
                       "type": "text",
                       "category": "头条",
                       "title": "河<span style= 'color:red'>南</span>10岁男孩一出村就昏睡，今天竟然…",
                       "url": "https://mini.eastday.com/mobile/210328211938773263543.html",
                       "content": "出村就昏睡 可能是“癔症”3月27日，大象新闻记者带着专门从<span style= 'color:red'>郑</span><span style= 'color:red'>州</span>请来的心理专家，来到了商丘市白云寺镇杨城村，高尚的父亲告诉记者，自从孩子得了出村就昏睡的“怪病”后，她每天都在琢磨“病因”，“他最开始发病<span style= 'color:red'>郑</span><span style= 'color:red'>州</span>知名专家蔡劲林现场进行分析，“孩子精神上受到地一些刺激，我初步断定可能是一种癔症。”得知高尚又有了新的病情后，3月28日一大早，大象新闻记者立刻联系了<span style= 'color:red'>郑</span><span style= 'color:red'>州</span>市医院的专家，准备接高尚到<span style= 'color:red'>郑</span><span style= 'color:red'>州</span>进一步检查。“小高尚你困吗？”“你知不知道刚刚出村了？”经过两个多小时的车程后，高尚和母亲一起来到了河<span style= 'color:red'>南</span>省儿童医院<span style= 'color:red'>南</span>部院区，主治医生在仔细询问高尚的病情后得出初步诊断结论：“孩子可能得的是癔症。”"
                   },
                       {
                           "author_name": "中原网",
                           "date": "2021-04-08T05:47:00.000Z",
                           "score": 7.8123136,
                           "@timestamp": "2021-04-08T13:48:19.742Z",
                           "@version": "1",
                           "id": 165,
                           "pic": "https://dfzximg02.dftoutiao.com/news/20210408/20210408134728_d41d8cd98f00b204e9800998ecf8427e_1_mwpm_03201609.png",
                           "type": "text",
                           "category": "头条",
                           "title": "<span style= 'color:red'>郑</span><span style= 'color:red'>州</span>七十四中：文创产品——让历史文化活起来",
                           "url": "https://mini.eastday.com/mobile/210408134728121755893.html",
                           "content": "中原网讯(赵文源 通讯员 温丽莉)4月7日下午，在<span style= 'color:red'>郑</span><span style= 'color:red'>州</span>七十四中中和楼报告厅，历史组教师李颖进行了一期题为《文创产品——让历史文化活起来》的讲座，萌动有趣的河<span style= 'color:red'>南</span>省博物院文创产品进入了学生们的视野。河<span style= 'color:red'>南</span>春晚让《唐宫夜宴》火起来了，河<span style= 'color:red'>南</span>省博物院以此为契机创作了一系列的文创产品，让传统文化与时代审美不断结合。李颖老师的讲述包括文创产品的含义、故宫文创、<span style= 'color:red'>郑</span><span style= 'color:red'>州</span>文创三部分。讲到<span style= 'color:red'>郑</span><span style= 'color:red'>州</span>文创，学生们积极踊跃，提到了少林功夫、莲鹤方壶、考古盲盒等等。李颖老师通过提问一些历史小常识与学生们进行互动，互动奖品为文创产品——洛阳牡丹花香皂。"
                       },
                       {
                           "author_name": "映象网",
                           "date": "2021-04-09T00:58:00.000Z",
                           "score": 7.2598257,
                           "@timestamp": "2021-04-09T01:37:27.949Z",
                           "@version": "1",
                           "id": 183,
                           "pic": "https://dfzximg02.dftoutiao.com/news/20210409/20210409085859_647befe20ef6ad21e0554b8ef084c5d4_1_mwpm_03201609.jpeg",
                           "title": "小货车两次发生自燃 车主：可能是线路老化所致",
                           "category": "头条",
                           "type": "text",
                           "url": "https://mini.eastday.com/mobile/210409085859471158054.html",
                           "content": "映象网讯（记者 邱延波 通讯员 崔海建 文/图）4月8日，<span style= 'color:red'>郑</span><span style= 'color:red'>州</span>市英协路凤仪路交叉口附近，一辆小货车自燃。4月8日上午9时30分，<span style= 'color:red'>郑</span><span style= 'color:red'>州</span>市金水区凤凰台街道巡防队员毛文彬、赵广巡逻至英协路凤仪路交叉口时，发现一辆微型货车发生自燃。"
                       },
                       {
                           "author_name": "看看新闻Knews",
                           "date": "2021-03-28T10:32:00.000Z",
                           "score": 5.419419,
                           "@timestamp": "2021-04-08T13:48:19.696Z",
                           "@version": "1",
                           "id": 29,
                           "pic": "https://dfzximg02.dftoutiao.com/news/20210328/20210328183205_fe60e553af1ef5e9da68f9dd6202e518_1_mwpm_03201609.jpeg",
                           "type": "text",
                           "category": "头条",
                           "title": "价值2000万古玩不翼而飞 贴身司机竟是“内鬼”",
                           "url": "https://mini.eastday.com/mobile/210328183205254668795.html",
                           "content": "近日 ，广<span style= 'color:red'>州</span>番禺警方仅用8小时，快速侦破一起特大盗窃车内财物案件，抓获涉案人员2名，涉案金额高达2000万元。而且自己只在中途的一个服务<span style= 'color:red'>站</span>停留过，出发前也检查过后背箱。警方通过大数据排除，调取事主乘坐车子的轨迹路线后发现有一辆车疑似尾随他们一路去到从化。在服务<span style= 'color:red'>站</span>时，犯罪嫌疑人的车辆首先停到位置上，然后事主的车才停到边上。因为当时的服务区是晚上，车辆也不是特别多，两台车特意停在一个位置上，这立即引起了警方的怀疑。据司机梁某交代，在他们前往中山的途中，他用手机向同伙彭某发送了一条短信，是一个暗号，意思就是说要在服务<span style= 'color:red'>站</span>这个地方下手。（素材来源：<span style= 'color:red'>南</span>方卫视 实习编辑：沈逸皓）"
                       },
                       {
                           "author_name": "杭州网",
                           "date": "2021-04-08T21:20:00.000Z",
                           "score": 5.256561,
                           "@timestamp": "2021-04-09T01:37:27.968Z",
                           "@version": "1",
                           "id": 207,
                           "pic": "https://dfzximg02.dftoutiao.com/news/20210409/20210409052038_ab9506a31242feed207d6b8754e1d434_1_mwpm_03201609.jpeg",
                           "title": "国家明令禁收天然气开口费 河<span style= 'color:red'>南</span>禹<span style= 'color:red'>州</span>为何顶风违规",
                           "category": "头条",
                           "type": "text",
                           "url": "https://mini.eastday.com/mobile/210409052038200691409.html",
                           "content": "央广网禹<span style= 'color:red'>州</span>4月8日消息 早在2019年6月，国家发改委、河<span style= 'color:red'>南</span>省发改委相继发文，明令禁止“开口费”等燃气工程安装不合理收费。然而，近日有河<span style= 'color:red'>南</span>禹<span style= 'color:red'>州</span>多位群众反映，在当地的商品住宅小区，开发商都在明目张胆收取“天然气开口费、暖气开口费”，价格每户六千至七千元不等。当地燃气公司明确声明，不收取开口费。群众就此向禹<span style= 'color:red'>州</span>市政府有关部门举报，却被住房和城乡建设局、发改委、市场监管局互相推诿，不予受理。国家三令五申、严格禁止，禹<span style= 'color:red'>州</span>有关部门为何有令不行、有禁不止？河<span style= 'color:red'>南</span>禹<span style= 'color:red'>州</span>市人民政府的网<span style= 'color:red'>站</span>上介绍，禹<span style= 'color:red'>州</span>市位于河<span style= 'color:red'>南</span>省中部，1988年撤县建市，全市总面积1461平方公里，总人口130万，是全国新型城镇化综合试点市、全国发展改革试点市，位居2020年中国县域经济百强榜第55在禹<span style= 'color:red'>州</span>市中心地带，有一个名为“城上城三期”的商品房住宅小区。"
                       },
                       {
                           "author_name": "北青网",
                           "date": "2021-04-07T08:28:00.000Z",
                           "score": 4.61244,
                           "@timestamp": "2021-04-08T13:48:19.725Z",
                           "@version": "1",
                           "id": 123,
                           "pic": "https://dfzximg02.dftoutiao.com/news/20210407/20210407162809_4a714317c18fd8dc47f2a06da1d60c09_1_mwpm_03201609.png",
                           "type": "text",
                           "category": "头条",
                           "title": "凌晨2点，两名男子在达<span style= 'color:red'>州</span>火车<span style= 'color:red'>站</span>被警察带走！原因竟是…",
                           "url": "https://mini.eastday.com/mobile/210407162809206647482.html",
                           "content": "3月30日凌晨2时许，警方循线追踪，成功在达<span style= 'color:red'>州</span>火车<span style= 'color:red'>站</span>将两人抓捕归案。到案后，两人对自己的犯罪行为供认不讳。两人开车踩点、把风，然后用面包车运赃、销赃，作案得手后将赃物卖到渠县某废品<span style= 'color:red'>站</span>，获赃款2万余元。"
                       },
                       {
                           "author_name": "东北网",
                           "date": "2021-03-28T11:13:00.000Z",
                           "score": 4.554072,
                           "@timestamp": "2021-04-08T13:48:19.685Z",
                           "@version": "1",
                           "id": 13,
                           "pic": "https://dfzximg02.dftoutiao.com/news/20210328/20210328191309_8daf3e19418eb53cae8fcd12b4e68dc3_1_mwpm_03201609.jpeg",
                           "type": "text",
                           "category": "头条",
                           "title": "哈铁应对降雪天气确保旅客安全出行",
                           "url": "https://mini.eastday.com/mobile/210328191309483536930.html",
                           "content": "王艳龙 摄为应对降雪天气，加格达奇车务段管内各车<span style= 'color:red'>站</span>通过广播、电子屏幕及时向旅客发布列车运行情况，采取增设售票窗口和增加人员等措施，方便旅客退票和改签车票。受降雪影响较大的漠河、阿木尔等地车<span style= 'color:red'>站</span>设专人在进出<span style= 'color:red'>站</span>口、检票口等关键地点设立防护，采取在主要通道口处铺设防滑毯，放置安全提示牌以及提前检票等方式，确保旅客安全乘降。"
                       },
                       {
                           "author_name": "大河网",
                           "date": "2021-04-08T23:37:00.000Z",
                           "score": 4.524553,
                           "@timestamp": "2021-04-09T01:37:27.963Z",
                           "@version": "1",
                           "id": 199,
                           "pic": "https://dfzximg02.dftoutiao.com/news/20210409/20210409073711_446a8461cc644e3744aba0f0c084a506_1_mwpm_03201609.jpeg",
                           "title": "商丘74岁大爷14年跑192个马拉松 足迹遍布全国各地",
                           "category": "头条",
                           "type": "text",
                           "url": "https://mini.eastday.com/mobile/210409073711802356340.html",
                           "content": "其中全程以上158个，50公里以上超级马拉松16个，秦岭公路168公里路程一个，石家庄、连云港、曲阜、济<span style= 'color:red'>南</span>12小时超级马拉松11个。这些年，侯学融跑步的足迹遍布全国各地，哪里有赛事他往哪里去，曾去过北京、天津、青岛、烟台、连云港、上海、杭<span style= 'color:red'>州</span>、广<span style= 'color:red'>州</span>、福<span style= 'color:red'>州</span>、台北、海口、兰<span style= 'color:red'>州</span>、重庆、太原、西安、武汉、<span style= 'color:red'>南</span>京等几十个地方。对于自己接下来的行程，侯学融早就安排得满满当当，4月11日去徐<span style= 'color:red'>州</span>，4月18日去盐城，5月1日去洛阳参加赛事……侯学融痴迷马拉松跑步，他的两个儿子和妻子崔兰贞都表示支持。侯学融告诉记者，全国各地地跑还能领略祖国大江<span style= 'color:red'>南</span>北的景色，他也会经常带着老伴一起出去参加赛事，一起游览祖国的名山大川、风景名胜。"
                       },
                       {
                           "author_name": "大河网",
                           "date": "2021-04-08T23:36:00.000Z",
                           "score": 4.410269,
                           "@timestamp": "2021-04-09T01:37:27.964Z",
                           "@version": "1",
                           "id": 200,
                           "pic": "https://dfzximg02.dftoutiao.com/news/20210409/20210409073646_728183d9e45764468be1733f891b51d8_1_mwpm_03201609.png",
                           "title": "外资不断“加码”彰显河<span style= 'color:red'>南</span>魅力 今年全力推进85个重点外资项目",
                           "category": "头条",
                           "type": "text",
                           "url": "https://mini.eastday.com/mobile/210409073646580689937.html",
                           "content": "“押宝”，河<span style= 'color:red'>南</span>究竟有多大吸引力？这两组数据，一组是省发展改革委一级巡视员<span style= 'color:red'>郑</span>金广发布的“潜力数据”：2021年我省全力推进85个重点外资项目，这些项目总投资158亿美元，2021年计划完成投资40.1亿美元。在与会的人民日报、新华社等中央媒体看来，这两组数据，是国际巨头用行动给河<span style= 'color:red'>南</span>的未来“点赞”。在新冠肺炎疫情冲击全球经济的背景下，这意味着更多高品质原料将在河<span style= 'color:red'>南</span>自给自足，所生产的“高精尖”产品循环供给国内外市场，撬动省内经济社会发展“新增量”。这场发布会释放出“满格”信号：河<span style= 'color:red'>南</span>吸引外资魅力不减，经济持续向好“加码”。编辑：郭同欢"
                       },
                       {
                           "author_name": "厦门网",
                           "date": "2021-04-05T22:45:00.000Z",
                           "score": 4.214501,
                           "@timestamp": "2021-04-08T13:48:19.719Z",
                           "@version": "1",
                           "id": 111,
                           "pic": "https://dfzximg02.dftoutiao.com/news/20210406/20210406064542_2feff31ff2c249fe7e4a029100b00658_1_mwpm_03201609.jpeg",
                           "type": "text",
                           "category": "头条",
                           "title": "取件无需核对、寄存未经同意 市民吐槽在菜鸟驿<span style= 'color:red'>站</span>取件的糟心事",
                           "url": "https://mini.eastday.com/mobile/210406064542256831756.html",
                           "content": "驿<span style= 'color:red'>站</span>回应须由工作人员取件 今后会加强管理自己拿取快递，工作人员全程不核对取件码，这样的取件流程是否规范呢？记者向菜鸟驿<span style= 'color:red'>站</span>客服咨询。客服表示，驿<span style= 'color:red'>站</span>有明确规定，必须由工作人员核对取件码，取件后再交给顾客。有些驿<span style= 'color:red'>站</span>工作人员少，高峰期可能忙不过来，便让顾客自取，但这是不规范的行为。今后，他们将对驿<span style= 'color:red'>站</span>工作人员加强培训和管理，也会对不遵守流程规范的驿<span style= 'color:red'>站</span>进行警告和处罚。小谢告诉她，现在厦门的韵达快递都直接放在菜鸟驿<span style= 'color:red'>站</span>，而且菜鸟驿<span style= 'color:red'>站</span>就在她家对面，如果实在拿不动快递，可以请驿<span style= 'color:red'>站</span>工作人员帮忙。王女士告诉记者，几周前，菜鸟驿<span style= 'color:red'>站</span>的确打电话来咨询是否可以把一件快递放在驿<span style= 'color:red'>站</span>，但打电话的是语音机器人。一位不愿意透露姓名的驿<span style= 'color:red'>站</span>工作人员告诉记者，快递放不放驿<span style= 'color:red'>站</span>，不是他们能决定的。其实顾客取一个快递，他们也赚不了多少钱，主要是靠驿<span style= 'color:red'>站</span>积累人流。"
                       },
                       {
                           "author_name": "",
                           "date": "2021-04-08T05:09:00.000Z",
                           "score": 4.054981,
                           "@timestamp": "2021-04-08T13:48:19.744Z",
                           "@version": "1",
                           "id": 169,
                           "pic": "https://dfzximg02.dftoutiao.com/news/20210408/20210408130953_dd28564a70d3c9aed1b5f07a2f20eb72_1_mwpm_03201609.png",
                           "type": "text",
                           "category": "头条",
                           "title": "5月大婴儿被反锁在家，民警紧急救助化解危险",
                           "url": "https://mini.eastday.com/mobile/210408130953617614417.html",
                           "content": "扬子晚报网4月8日讯（通讯员<span style= 'color:red'>南</span>特宣记者梅建明）4月6日下午4时许，<span style= 'color:red'>南</span>京江宁殷巷查报<span style= 'color:red'>站</span>和上秦淮警务<span style= 'color:red'>站</span>民警接到市民徐女士报警，称在银城云台天境小区的家里接警后，巡逻民警立即联系开锁师傅前往现场，同时自己带领<span style= 'color:red'>站</span>内队员迅速赶至报警人家里。而孩子的家长对上秦淮警务<span style= 'color:red'>站</span>民警表示了感谢，民警在确认孩子安全后，带领队员离开。"
                       },
                       {
                           "author_name": "北青网",
                           "date": "2021-04-08T05:07:00.000Z",
                           "score": 4.035232,
                           "@timestamp": "2021-04-08T13:48:19.744Z",
                           "@version": "1",
                           "id": 171,
                           "pic": "https://dfzximg02.dftoutiao.com/news/20210408/20210408130727_698ad4feb3eacab8b7595c00e0d30958_1_mwpm_03201609.png",
                           "type": "text",
                           "category": "头条",
                           "title": "男子深夜“尾随”一名女子，民警却为他点赞！",
                           "url": "https://mini.eastday.com/mobile/210408130727998523615.html",
                           "content": "深夜1点多，凉风徐徐，女孩留着眼泪往湖边走去，这引起了出租车司机陈师傅的注意，也下车跟了过去，随之眼前这一幕，让陈师傅内心一惊……3月29日凌晨1时20分许，杭<span style= 'color:red'>州</span>余杭公安分局接到群众报警，在<span style= 'color:red'>南</span>湖东路与城<span style= 'color:red'>南</span>路路口附近，有个穿白衣服的小姑娘要跳<span style= 'color:red'>南</span>湖，巡（特）警大队机动四中队和余杭派出所警力立即赶赴现场。5分钟后，双方警力到达现场，由于<span style= 'color:red'>南</span>湖塘水域宽广，又是黑夜，报警人位置方向有偏离，一下子很难找到具体事发地点。随后，余杭派出所民警与报警人互加微信，找到了事发地点。通过了解，陈师傅叫陈银风，今年50岁，河<span style= 'color:red'>南</span>周口人，是一名从事出租车工作18年的老师傅了。陈师傅全家在杭<span style= 'color:red'>州</span>生活了15年，和爱人省吃俭用培养了两名大学生，还在崇贤买了房。由于下车地点是<span style= 'color:red'>南</span>湖塘堤下，陈师傅对这地段不太熟悉，只知道这里是个河堤，当女孩下车后朝<span style= 'color:red'>南</span>湖塘上走去，陈师傅问她去干嘛，女孩说在河堤上坐会儿，冷静冷静。心细的陈师傅看情况不妙，悄悄跟在身后并报了警。"
                       },
                       {
                           "author_name": "江西电视台",
                           "date": "2021-04-06T00:08:00.000Z",
                           "score": 3.9914632,
                           "@timestamp": "2021-04-08T13:48:19.716Z",
                           "@version": "1",
                           "id": 105,
                           "pic": "https://dfzximg02.dftoutiao.com/news/20210406/20210406080842_8f2f83a4542884068f164e8c3cf7b60d_1_mwpm_03201609.jpeg",
                           "type": "text",
                           "category": "头条",
                           "title": "邻居深夜蒙面抢走9个月的儿子，夫妻俩悲痛欲绝，他逃亡23年，连父亲去世都不露面",
                           "url": "https://mini.eastday.com/mobile/210406080842254144998.html",
                           "content": "事发地福建省泉<span style= 'color:red'>州</span>市鲤城区斗<span style= 'color:red'>南</span>村的地标建筑，人称99间房，是印尼的一个华侨家族，在1927年建成的。20多年前的一个雨夜，陈勇和妻子汤志清带着襁褓中的儿子，从四川来泉<span style= 'color:red'>州</span>打工，租住在这99间房。夜晚12点多外出的陈勇还没回来，妻子汤志清守着门，也守着当时不满9个月大的儿子。"
                       },
                       {
                           "author_name": "北晚新视觉",
                           "date": "2021-04-05T20:23:00.000Z",
                           "score": 3.9588296,
                           "@timestamp": "2021-04-08T13:48:19.723Z",
                           "@version": "1",
                           "id": 119,
                           "pic": "https://dfzximg02.dftoutiao.com/news/20210406/20210406042332_c6129da5603366a1e00a87df99c296e6_1_mwpm_03201609.png",
                           "type": "text",
                           "category": "头条",
                           "title": "河<span style= 'color:red'>南</span>一商场举办发呆大赛，获胜者可获一台电器！网友：睡着了可咋办",
                           "url": "https://mini.eastday.com/mobile/210406042332646177096.html",
                           "content": "4月5日，河<span style= 'color:red'>南</span>新乡。4日，某商场举办发呆大赛，现场100多名参赛选手。比赛现场选手们或坐或<span style= 'color:red'>站</span>，姿势各异。"
                       },
                       {
                           "author_name": "澎湃新闻",
                           "date": "2021-04-07T07:49:00.000Z",
                           "score": 3.8217268,
                           "@timestamp": "2021-04-08T13:48:19.730Z",
                           "@version": "1",
                           "id": 137,
                           "pic": "https://dfzximg02.dftoutiao.com/news/20210407/20210407154903_bde6cc8f9eeca6efa90a8a4d20260ab1_1_mwpm_03201609.jpeg",
                           "type": "text",
                           "category": "头条",
                           "title": "安徽一商场失火致4死事故原因公布：系拆扶梯时火花点燃垃圾",
                           "url": "https://mini.eastday.com/mobile/210407154903521194270.html",
                           "content": "央视新闻4月7日消息，4月6日上午，安徽池<span style= 'color:red'>州</span>主城区东街口铜锣湾商业广场发生火灾致4人死亡。今天（7日），池<span style= 'color:red'>州</span>市发布火灾事故原因：事故初步原因为 楼内拆除扶梯时，火花点燃垃圾并引发火灾，拆除扶梯人员当场死亡，另有3名女性死者系5楼一影楼工作人员，因烟大来势凶猛未能成功逃生。（原题为《安徽池<span style= 'color:red'>州</span>商场失火致4人死亡事故原因公布：施工不当致商场失火》） (本文来自澎湃新闻，更多原创资讯请下载“澎湃新闻”APP)"
                       },
                       {
                           "author_name": "澎湃新闻",
                           "date": "2021-04-08T04:53:00.000Z",
                           "score": 3.8209884,
                           "@timestamp": "2021-04-08T13:48:19.747Z",
                           "@version": "1",
                           "id": 178,
                           "pic": "https://dfzximg02.dftoutiao.com/news/20210408/20210408125322_a166b25d537f88857ae8b1fd00e5e5ac_0_mwpm_03201609.jpeg",
                           "type": "text",
                           "category": "头条",
                           "title": "四川自贡一群人在小区约架互殴致一死三伤，一审12人获刑",
                           "url": "https://mini.eastday.com/mobile/210408125322379387324.html",
                           "content": "罗某、王某山及林某宏方人员<span style= 'color:red'>郑</span>某龙在打斗过程中受伤。案发后，林某宏、陶某霏准备出逃，林某宏女友刘某彤为二人提供帮助。除被告人刘某彤外，其余各被告人相继投案自首。法庭审理过程中，12名被告人全部认罪认罚。法院审理后认为：被告人罗某、<span style= 'color:red'>郑</span>某龙等人聚众斗殴，其行为均已构成聚众斗殴罪。被告人林某宏、李某达聚众斗殴，致人死亡，转化为故意伤害罪。被告人林某宏、罗某系聚众斗殴的首要分子。"
                       },
                       {
                           "author_name": "环球网",
                           "date": "2021-04-08T04:53:00.000Z",
                           "score": 3.6829994,
                           "@timestamp": "2021-04-08T13:48:19.747Z",
                           "@version": "1",
                           "id": 179,
                           "pic": "https://dfzximg02.dftoutiao.com/news/20210408/20210408125306_7ce9c1969c4da38140ff7ddb3b077b7f_1_mwpm_03201609.jpeg",
                           "type": "text",
                           "category": "头条",
                           "title": "涉案10亿元 广<span style= 'color:red'>州</span>海关侦破特大奶粉走私案",
                           "url": "https://mini.eastday.com/mobile/210408125306053111319.html",
                           "content": "来源：央视新闻客户端2021-04-08 12:35广<span style= 'color:red'>州</span>海关近日开展专项行动，成功打掉4个通过跨境电商和寄递渠道走私奶粉的犯罪团伙，抓获犯罪嫌疑人广<span style= 'color:red'>州</span>海关当天共出动海关警员178人，分30个组在上海、武汉、长沙、深圳等地开展统一查缉抓捕行动。在武汉江岸区一个小区里，团伙头目宋某被抓获，他的妻子李某也是走私团伙重要成员，同时落网。广<span style= 'color:red'>州</span>海关缉私局<span style= 'color:red'>南</span>沙分局侦查科科长 王冰： 他们名下有多家公司注册了多个跨境电商平台，通过这些跨境电商平台，在国内搜集有需要的，也就是伪报贸易方式进口奶粉的这些客户信息，从中牟利。广<span style= 'color:red'>州</span>海关缉私局<span style= 'color:red'>南</span>沙分局侦查科科长 王冰： 他们就把本来应该以行邮渠道申报进口的奶粉，伪报成跨境电商的模式向海关申报进口。"
                       },
                       {
                           "author_name": "郑州日报",
                           "date": "2021-04-08T23:43:00.000Z",
                           "score": 3.5673957,
                           "@timestamp": "2021-04-09T01:37:27.955Z",
                           "@version": "1",
                           "id": 192,
                           "pic": "https://dfzximg02.dftoutiao.com/news/20210409/20210409074347_e2d3a695c48001140a7ed1fed0b3cd02_1_mwpm_03201609.jpeg",
                           "title": "“喝喝喝”的背后，谁在“呵呵呵”？",
                           "category": "头条",
                           "type": "text",
                           "url": "https://mini.eastday.com/mobile/210409074347223923364.html",
                           "content": "“问题喝播”问题多记者在快手、西瓜视频、B<span style= 'color:red'>站</span>等网络平台上发现有不少“问题喝播”视频。醉酒越醉越好。记者在快手平台上看到，有主播拎起桶装白酒就往嘴里灌，直到喝不进去喷出来。辽宁新民市市场监督管理局信息显示，出产该酒的沈阳市<span style= 'color:red'>郑</span>家坊酿酒厂从2017年至今，连续多年因“以不合格产品冒充合格产品的行为”“生产不符合法律、法规或者食品安全标准的食品、食品添加剂”遭行政处罚。"
                       },
                       {
                           "author_name": "北晚新视觉",
                           "date": "2021-03-28T10:48:00.000Z",
                           "score": 3.5567677,
                           "@timestamp": "2021-04-08T13:48:19.691Z",
                           "@version": "1",
                           "id": 21,
                           "pic": "https://dfzximg02.dftoutiao.com/news/20210328/20210328184842_aa5e6bc11e26bc91b8420b731acd0836_1_mwpm_03201609.png",
                           "type": "text",
                           "category": "头条",
                           "title": "杭<span style= 'color:red'>州</span>一女老师骗走学生70万学费，挥霍一空！给丈夫买20万的礼物",
                           "url": "https://mini.eastday.com/mobile/210328184842071765537.html",
                           "content": "今年1月中旬，几名年轻学生走进浙江杭<span style= 'color:red'>州</span>市公安局钱塘新区分局白杨派出所接警大厅。70余万学费和消失的老师 据悉，这些学生都就读于钱塘新区杭<span style= 'color:red'>州</span>某专修学院同一专业，而这个专业两个年级由同一名班主任王某带班。得知嫌疑人王某近期一直留在温<span style= 'color:red'>州</span>老家。3月15日，李根电话联系王某，劝其前往杭<span style= 'color:red'>州</span>配合调查。但王某自称身体不适，已预约到医院接受检查，等检查完会尽快来杭。考虑到王某身体情况以及受害人焦急的情绪，李根决定带队前往温<span style= 'color:red'>州</span>。经过一天的辗转走访，李根和同事在温<span style= 'color:red'>州</span>市区某医院见到了王某。此时的王某，已在母亲陪同下办理了住院手续。婚后，面对负债累累的夫家，在杭<span style= 'color:red'>州</span>工资收入并不高的她，并没有因此降低生活品质。租住在高档住宅，买奢侈品，没钱了就向父母求助，渐渐的，父母也拿不出什么钱来接济了，便开始通过网络借贷来满足消费需求。"
                       },
                       {
                           "author_name": "中国日报网",
                           "date": "2021-04-08T06:07:00.000Z",
                           "score": 3.4743128,
                           "@timestamp": "2021-04-08T13:48:19.738Z",
                           "@version": "1",
                           "id": 154,
                           "pic": "https://dfzximg02.dftoutiao.com/news/20210408/20210408140759_05b7c084183850b0e5f8a0e0840feeaa_1_mwpm_03201609.jpeg",
                           "type": "text",
                           "category": "头条",
                           "title": "黑龙江第122例捐献造血干细胞 龙江姐姐点燃江苏小妹的生命之光",
                           "url": "https://mini.eastday.com/mobile/210408140759357244283.html",
                           "content": "“这是一种缘分，从哈尔滨到<span style= 'color:red'>南</span>京，爱心和希望永远相连。”修改方式有以下三种：1、致电黑龙江分库：0451-827171202、登陆中华骨髓库网<span style= 'color:red'>站</span>--点击志愿捐献者信息变更进行修改3、微信公众号留言进行修改（中国日报黑龙江记者<span style= 'color:red'>站</span>）"
                       },
                       {
                           "author_name": "齐鲁晚报",
                           "date": "2021-03-28T10:55:00.000Z",
                           "score": 3.4182734,
                           "@timestamp": "2021-04-08T13:48:19.690Z",
                           "@version": "1",
                           "id": 18,
                           "pic": "https://dfzximg02.dftoutiao.com/news/20210328/20210328185556_1822c4ed0bae183074f1b9cc205ef17f_1_mwpm_03201609.jpeg",
                           "type": "text",
                           "category": "头条",
                           "title": "河<span style= 'color:red'>南</span>女孩刷抖音刷出双胞胎姐妹，“亲生父母”跑来认亲",
                           "url": "https://mini.eastday.com/mobile/210328185556298896663.html",
                           "content": "母亲透露：两姐妹是双胞胎，各自被抱养齐鲁晚报·齐鲁壹点此前报道，一直生活在河<span style= 'color:red'>南</span>巩义市的女孩程珂珂，刷视频刷出生活在河<span style= 'color:red'>南</span>登封市的张丽，俩人长相简直一模一样。3月27日，程珂珂从巩义驾车赶往<span style= 'color:red'>郑</span><span style= 'color:red'>州</span>见到张丽的母亲韩女士。在见到和女儿张丽“一模一样”的程珂珂后，韩女士开始没认出来，错把程珂珂认成了女儿张丽，还拉着她的手问：“小丽，你吃饭了没有怎么样？\""
                       },
                       {
                           "author_name": "大江网-信息日报",
                           "date": "2021-04-08T20:54:00.000Z",
                           "score": 3.3287385,
                           "@timestamp": "2021-04-09T01:37:27.969Z",
                           "@version": "1",
                           "id": 208,
                           "pic": "https://dfzximg02.dftoutiao.com/news/20210409/20210409045431_4e30c82d5122c327286699bf78004676_1_mwpm_03201609.jpeg",
                           "title": "承租人转租公租房等拟被列入失信行为",
                           "category": "头条",
                           "type": "text",
                           "url": "https://mini.eastday.com/mobile/210409045431944217718.html",
                           "content": "■<span style= 'color:red'>郑</span>周贇、万文慧、信息日报/信息日报客户端记者左阳天/文“承租人无正当理由连续6个月以上闲置保障性住房，转借、转租或擅自调换所承租的保障性住房，应及时将列入联合惩戒名单的信用主体失信行为信息通过门户网<span style= 'color:red'>站</span>、地方政府信用网<span style= 'color:red'>站</span>、“信用江西”网<span style= 'color:red'>站</span>予以公开。信用主体可以向住房保障失信行为管理部门申请查询其住房保障失信行为信息。"
                       },
                       {
                           "author_name": "微信公众号“南国早报”",
                           "date": "2021-03-28T23:47:00.000Z",
                           "score": 3.2822948,
                           "@timestamp": "2021-04-08T13:48:19.700Z",
                           "@version": "1",
                           "id": 68,
                           "pic": "https://dfzximg02.dftoutiao.com/news/20210329/20210329074759_f991350985f036fc18b82ad8eaf4a74a_1_mwpm_03201609.png",
                           "type": "text",
                           "category": "头条",
                           "title": "广西环江县一男子疑在酒吧包厢内被捅身亡，嫌疑人已落网",
                           "url": "https://mini.eastday.com/mobile/210329074759104125352.html",
                           "content": "现场公共视频显示，事发时，几名男女疑在酒吧包厢中聚会，其中一名<span style= 'color:red'>站</span>在桌子上的男子，疑似持刀捅向沙发上另一名赤身男子，两人随后僵持数秒钟，包厢内的人员起初并未察觉异常。 ▲案发现场。公共视频截图案发后，环江毛<span style= 'color:red'>南</span>族自治县公安局发布了一则悬赏通告，称该县发生一起重大刑事案件。经侦查，莫某提有重大作案嫌疑。▲警方发布悬赏通告。"
                       },
                       {
                           "author_name": "澎湃新闻",
                           "date": "2021-04-07T07:49:00.000Z",
                           "score": 3.257785,
                           "@timestamp": "2021-04-08T13:48:19.730Z",
                           "@version": "1",
                           "id": 136,
                           "pic": "https://dfzximg02.dftoutiao.com/news/20210407/20210407154911_2a8b4a7b7f9dcfc0ca2c719795acbd8b_0_mwpm_03201609.jpeg",
                           "type": "text",
                           "category": "头条",
                           "title": "失独家庭的申诉之路：女记者被同事殴打致死，家属质疑量刑15年",
                           "url": "https://mini.eastday.com/mobile/210407154911035540521.html",
                           "content": "陈涛匆忙起床开了门，只见门外<span style= 'color:red'>站</span>着两位身穿制服的警察，“有什么事吗？”陈涛小心翼翼地问道。警察只向其确认是否为陈婷的家人，并要求陈涛跟他们走一趟。在医院的急诊大厅里，<span style= 'color:red'>站</span>着五六位警察，见到躺在病床上的女儿，“蓬头散发，插着管子躺在病床上，不成样子。”陈涛一时间不知所措，他哭喊着：“这是什么情况。”在场的警察无人回应，只叮嘱“扶着点儿老爷子”。"
                       },
                       {
                           "author_name": "新民晚报",
                           "date": "2021-04-08T05:55:00.000Z",
                           "score": 3.029398,
                           "@timestamp": "2021-04-08T13:48:19.742Z",
                           "@version": "1",
                           "id": 163,
                           "pic": "https://dfzximg02.dftoutiao.com/news/20210408/20210408135503_3f2bb1b2ce510367d73fc68ea69735af_1_mwpm_03201609.jpeg",
                           "type": "text",
                           "category": "头条",
                           "title": "针对世界TOP100高校 虹口在上海首推“海归”过渡期租住人才驿<span style= 'color:red'>站</span>",
                           "url": "https://mini.eastday.com/mobile/210408135503544882734.html",
                           "content": "新民晚报讯 （记者 袁玮）今天，虹口区出台《虹口区留学回国人员过渡期内租住人才驿<span style= 'color:red'>站</span>的专项支持政策》，面向“海归”推出人才驿<span style= 'color:red'>站</span>，以缓解留学回国人员过渡期内的居住困难虹口对符合条件的留学回国人员，租住专门对其推出的人才驿<span style= 'color:red'>站</span>，给予最多不超过6个月过渡期的租金补贴。此次人才驿<span style= 'color:red'>站</span>政策申请有三大特点：不将申请对象在虹口就业作为前提条件，不将区域贡献等因素纳入考量标准；政策申请一改由企事业单位为主体申请的做法，变为个人直接申请，打破申请壁垒；人才驿<span style= 'color:red'>站</span>管理坚持市场化运作模式，政府将通过人才驿<span style= 'color:red'>站</span>租金补贴方式减轻留学回国人员租金压力，同时引导鼓励各类市场主体提供更多面向留学回国人员的房源，拓展房源的规模。有意者可通过“随申办”APP虹口旗舰店、“上海虹口”门户网<span style= 'color:red'>站</span>和“上海虹口”微信公众号网上申请，也可以通过虹口区人才服务中心服务专窗（虹口区中山北一路1230号柏树大厦A区一楼）线下申请，交齐人才驿<span style= 'color:red'>站</span>租住申请表"
                       },
                       {
                           "author_name": "澎湃新闻",
                           "date": "2021-03-28T13:02:00.000Z",
                           "score": 3.0293245,
                           "@timestamp": "2021-04-08T13:48:19.684Z",
                           "@version": "1",
                           "id": 10,
                           "pic": "https://dfzximg02.dftoutiao.com/news/20210328/20210328210213_f7ef67b256003e6b0a15c8de45181ad2_0_mwpm_03201609.png",
                           "type": "text",
                           "category": "头条",
                           "title": "温<span style= 'color:red'>州</span>一小区装高空抛物监控报警系统，14楼住户扔纸巾被捕捉",
                           "url": "https://mini.eastday.com/mobile/210328210213676482834.html",
                           "content": "都市快报·杭<span style= 'color:red'>州</span>新闻客户端3月28日消息，“高空抛物检测报警，高空抛物检测报警......”3月23日早晨7点35分左右，温<span style= 'color:red'>州</span>市瓯海区景山派出所监控室"
                       },
                       {
                           "author_name": "看看新闻Knews",
                           "date": "2021-03-28T14:30:00.000Z",
                           "score": 3.018141,
                           "@timestamp": "2021-04-08T13:48:19.708Z",
                           "@version": "1",
                           "id": 86,
                           "pic": "https://dfzximg02.dftoutiao.com/news/20210328/20210328223034_26568e59be9f0eaccbe147e743cf673c_1_mwpm_03201609.jpeg",
                           "type": "text",
                           "category": "头条",
                           "title": "消防车出警被堵路上 他的举动暖到蓝朋友们！",
                           "url": "https://mini.eastday.com/mobile/210328223034350349849.html",
                           "content": "3月27日，云<span style= 'color:red'>南</span>西双版纳景洪市，消防队员接到警情，发生一起室内火灾，情况紧急。但是在赶往现场处置警情的过程中，他们被困在了路上。他计划如果找到的话，要与对方通个电话，再邀请对方来消防<span style= 'color:red'>站</span>参加下体验式活动。为当时所有为消防让行的好市民和这位好大哥点赞！（看看新闻Knews记者：殷滋 素材来源：云<span style= 'color:red'>南</span>西双版纳消防）"
                       }
                       ]

                }, 400);
            },
            searchImage(file) {
                console.log(file);
                this.audioInfo = null;
                this.toggle();
                setTimeout(() => {
                    this.imageList = imageData;
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
