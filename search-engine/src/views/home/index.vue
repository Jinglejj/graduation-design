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
                <Audio :audio-info="audioInfo"/>
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
    import Audio from "@/components/Audio";
    import TextInfo from "@/components/TextInfo";

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
            Audio,
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
                    this.audioInfo = {
                        src: "http://106.14.137.176:8080/blog/static/1.mp3",
                        currentTime: 0, //音频当前时间
                        endTime: 258, //音频结束时间
                        title: "来自个人服务器数据比较慢",
                        text:
                            "测试数所所所所所所所所所所所所测试数所所所所所所所所所所所所测试数所所所所所所所所所所所所测试数所所所所所所所所所所所所测试数所所所所所所所所所所所所测试数所所所所所所所所所所所所",
                    };
                    this.textInfo =[ {
                        date: "2021-03-29T00:46:00.000Z",
                        author_name: "北青网",
                        "@timestamp": "2021-03-29T04:17:04.682Z",
                        "@version": "1",
                        id: 64,
                        pic: "https://dfzximg02.dftoutiao.com/news/20210329/20210329084657_cd4d715421b47c512d782663005d3e79_1_mwpm_03201609.png",
                        type: "cmse",
                        category: "头条",
                        title: "太惊险！刚出生一天，这个小宝宝就进行了胸腔穿刺……",
                        url: "https://mini.eastday.com/mobile/210329084657724521059.html",
                        content: "日前一名出生仅一天的<span style= 'color:red'>男</span>婴突发严重气胸危及生命德阳市人民医院和旌阳区妇幼保健院的医护人员迅速联手展开抢救……“<span style= 'color:red'>孩</span>子反应较为迟钝，虽然已经用上了呼吸机经会诊，医护人员决定立即将<span style= 'color:red'>男</span>婴转运到市医院进一步检查抢救。就在大家准备将<span style= 'color:red'>男</span>婴转移进专用的转运暖箱时，<span style= 'color:red'>男</span>婴的情况突然恶化，不仅呼吸更加急促，血氧饱和度更是掉到了零。医护人员立即展开应急抢救处置。在彩超的引导下，经过10余分钟的细致操作，医生成功完成了穿刺，20多分钟后，<span style= 'color:red'>男</span>婴气胸症状得到了极大缓解。<span style= 'color:red'>男</span>婴情况稍稍稳定后，医护人员立即小心翼翼将他转移进转运暖箱。转运暖箱相当于一个移动的ICU病房，整个转移过程中，始终为<span style= 'color:red'>孩</span>子提供着生命支持和监护。救护车抵达市医院后，<span style= 'color:red'>男</span>婴被迅速接进了新生儿病房，医护人员立即给<span style= 'color:red'>孩</span>子作了进一步检查和相关治疗，并安排专人护理。目前，<span style= 'color:red'>孩</span>子仍在市医院新生儿病房接受继续救治，已脱离呼吸机，心肺情况恢复良好。记者｜张嵘"
                    },
                        {
                            "date": "2021-03-28T13:19:00.000Z",
                            "author_name": "北青网",
                            "@timestamp": "2021-03-29T04:17:04.594Z",
                            "@version": "1",
                            "id": 7,
                            "pic": "https://dfzximg02.dftoutiao.com/news/20210328/20210328211938_c898f7c13bbe69c96e2ac8c25c463113_1_mwpm_03201609.jpeg",
                            "type": "cmse",
                            "category": "头条",
                            "title": "河南10岁<span style= 'color:red'>男</span><span style= 'color:red'>孩</span>一出村就昏睡，今天竟然…",
                            "url": "https://mini.eastday.com/mobile/210328211938773263543.html",
                            "content": "3月26日，《民生大参考》报道《十岁小<span style= 'color:red'>男</span><span style= 'color:red'>孩</span> 出村就睡着》后，全国各地的网友都想知道，这个叫高尚的<span style= 'color:red'>孩</span>子到底是得了什么“怪病”。甚至还有些网友顺着地址主动找到高先生家，“来了太多的陌生人，<span style= 'color:red'>孩</span>子已经不愿意见人了。”高先生的妻子满脸愁容。“这个情况太吓人了，怎么叫都没反应。”<span style= 'color:red'>孩</span>子父亲高先生告诉大象新闻记者，28日凌晨，他发现<span style= 'color:red'>孩</span>子居然又出现了新的病情。自从<span style= 'color:red'>孩</span>子得了“怪病“后，全家人都表示不能理解。据高先生回忆，他的小腿也曾受过很重的伤，当时正好被儿子看到，“会不会<span style= 'color:red'>孩</span>子当时看见我受伤，有心理阴影。”郑州知名专家蔡劲林现场进行分析，“<span style= 'color:red'>孩</span>子精神上受到地一些刺激，我初步断定可能是一种癔症。”"
                        },
                        {
                            "date": "2021-03-28T10:55:00.000Z",
                            "author_name": "齐鲁晚报",
                            "@timestamp": "2021-03-29T04:17:04.641Z",
                            "@version": "1",
                            "id": 18,
                            "pic": "https://dfzximg02.dftoutiao.com/news/20210328/20210328185556_1822c4ed0bae183074f1b9cc205ef17f_1_mwpm_03201609.jpeg",
                            "type": "cmse",
                            "category": "头条",
                            "title": "河南女<span style= 'color:red'>孩</span>刷抖音刷出双胞胎姐妹，“亲生父母”跑来认亲",
                            "url": "https://mini.eastday.com/mobile/210328185556298896663.html",
                            "content": "两个女<span style= 'color:red'>孩</span>张丽和程珂珂都属于抱养，双方父母都不是直系亲属。张丽的母亲韩女士表示，张丽是姐姐，程珂珂是妹妹，二人均是7月初2出生的双胞胎。母亲透露：两姐妹是双胞胎，各自被抱养齐鲁晚报·齐鲁壹点此前报道，一直生活在河南巩义市的女<span style= 'color:red'>孩</span>程珂珂，刷视频刷出生活在河南登封市的张丽，俩人长相简直一模一样。此时悲痛万分的韩女士听亲戚说，巩义有个单身的女性生了一对双胞胎女<span style= 'color:red'>孩</span>儿不想抚养，便想要把<span style= 'color:red'>孩</span>子抱养回来。因为家庭条件差，只能养活一个，便收养了张丽一个。“对方是让她的<span style= 'color:red'>孩</span>子跟我联系的，在网上给我发私信，跟我说想要见面了解一下，一起坐下来聊一聊。我说有些事，不见面、不了解更好。现在各自过好自己的家庭就好，我现在不是一个人，我是一个家庭。”程珂珂说，目前了解到的是，自己和张丽当年之所以被遗弃，可能有部分是重<span style= 'color:red'>男</span>轻女的原因，“但他们好像后来也没有生出儿子”。"
                        },
                        {
                            "date": "2021-03-28T11:06:00.000Z",
                            "author_name": "贵阳网",
                            "@timestamp": "2021-03-29T04:17:04.613Z",
                            "@version": "1",
                            "id": 14,
                            "pic": "https://dfzximg02.dftoutiao.com/news/20210328/20210328190626_471cc8c1ae815fa7a4ff767e2361d67e_1_mwpm_03201609.jpeg",
                            "type": "cmse",
                            "category": "头条",
                            "title": "遵义<span style= 'color:red'>男</span>子欲救猫被困4楼房顶，猫：我有事先走了",
                            "url": "https://mini.eastday.com/mobile/210328190626429554224.html",
                            "content": "对该<span style= 'color:red'>男</span>子报警的行为，有网友认为可以自救，不应占用救援力量。消防人员救下被困者3月27日13时46分，仁怀市中枢消防救援站接到报警：有一名<span style= 'color:red'>男</span>子在仁怀市中枢街道外环路东大街4楼房顶被困。被困<span style= 'color:red'>男</span>子蹲在自己家屋顶与隔壁邻居房屋顶交界的水管处。据该<span style= 'color:red'>男</span>子称，13时左右，他发现自家猫爬到屋顶上去不肯下来，于是他也跟着到屋顶准备将猫抱下来。消防人员救下被困者消防人员介绍，他们无法进入到<span style= 'color:red'>男</span>子被困位置进行救援，只得携带救援绳索从被困<span style= 'color:red'>男</span>子隔壁邻居家中进入房顶，将被困<span style= 'color:red'>男</span>子所在位置瓦顶掀开，保护其“空降”回到地面。14时27分，消防人员采取引导手扶的方式，将被困<span style= 'color:red'>男</span>子成功救下。对于<span style= 'color:red'>男</span>子报警求助的行为，有网友评论称，<span style= 'color:red'>男</span>子完全可以让家人拿个梯子将其救下，或者自己揭开瓦顶沿着墙体回到地面，就这点小事报警求助，占用了应急救援力量。"
                        },
                        {
                            "date": "2021-03-28T20:51:00.000Z",
                            "author_name": "海外网",
                            "@timestamp": "2021-03-29T04:17:04.709Z",
                            "@version": "1",
                            "id": 75,
                            "pic": "https://dfzximg02.dftoutiao.com/news/20210329/20210329045146_fc4038499626adc65478755c055d87ea_1_mwpm_03201609.jpeg",
                            "type": "cmse",
                            "category": "头条",
                            "title": "搭公交时身上冒烟疑失火 台<span style= 'color:red'>男</span>子淡定举动吓呆路人",
                            "url": "https://mini.eastday.com/mobile/210329045146971658412.html",
                            "content": "近日，台湾一名<span style= 'color:red'>男</span>乘客搭乘公交车时，身上突然冒出白烟，周围乘客纷纷怀疑起火，结果<span style= 'color:red'>男</span>乘客却相当冷静，还直呼\"没事\"，引发舆论热议。据台湾《中时电子报》28日消息，涉事<span style= 'color:red'>男</span>子26日傍晚搭乘绿16号路线公交车，行经新店时，他身穿的外套口袋开始冒出白烟，一名女子见状赶紧告知<span style= 'color:red'>男</span>子其身上似乎起火，并引发其他乘客骚动。只见<span style= 'color:red'>男</span>子相当淡定，回答说\"电池烧起来而已，没事没事\"。但司机不放心，直指\"你的外套还在冒烟\"，这时<span style= 'color:red'>男</span>子还弯腰去捡零钱，并未当回事。此事也让其他乘客更傻眼，最后司机担忧其他乘客安全，让这名<span style= 'color:red'>男</span>子下了车。关于<span style= 'color:red'>男</span>子外套里的电池为何会突然起火，有专业人士表示，原因可能是电池裂漏，里面的电解液漏出来，与外套棉絮、或是口袋中的铜板接触摩擦，产生化学作用发热，才会冒烟起火。"
                        },
                        {
                            "date": "2021-03-28T23:47:00.000Z",
                            "author_name": "微信公众号“南国早报”",
                            "@timestamp": "2021-03-29T04:17:04.689Z",
                            "@version": "1",
                            "id": 68,
                            "pic": "https://dfzximg02.dftoutiao.com/news/20210329/20210329074759_f991350985f036fc18b82ad8eaf4a74a_1_mwpm_03201609.png",
                            "type": "cmse",
                            "category": "头条",
                            "title": "广西环江县一<span style= 'color:red'>男</span>子疑在酒吧包厢内被捅身亡，嫌疑人已落网",
                            "url": "https://mini.eastday.com/mobile/210329074759104125352.html",
                            "content": "3月28日凌晨，广西环江发生一起重大刑事案件，一名<span style= 'color:red'>男</span>子疑在某酒吧包厢内被捅身亡。现场公共视频显示，事发时，几名<span style= 'color:red'>男</span>女疑在酒吧包厢中聚会，其中一名站在桌子上的<span style= 'color:red'>男</span>子，疑似持刀捅向沙发上另一名赤身<span style= 'color:red'>男</span>子，两人随后僵持数秒钟，包厢内的人员起初并未察觉异常。 ▲案发现场。"
                        },
                        {
                            "date": "2021-03-28T13:18:00.000Z",
                            "author_name": "北青网",
                            "@timestamp": "2021-03-29T04:17:04.594Z",
                            "@version": "1",
                            "id": 8,
                            "pic": "https://dfzximg02.dftoutiao.com/news/20210328/20210328211848_e6ed422610e8ca2d3c23379403e4cfd3_1_mwpm_03201609.png",
                            "type": "cmse",
                            "category": "头条",
                            "title": "醉汉骑车撞违停电动车身亡家属索赔20万 电动车主：我冤枉",
                            "url": "https://mini.eastday.com/mobile/210328211848818223066.html",
                            "content": "谁知，张大姐刚进店没几分钟，就听见“砰”的一声，她赶忙上前一看，自己的电动车已被撞倒在地，旁边躺着一个六旬<span style= 'color:red'>男</span>子，满身酒气。张大姐立即拨打了120急救电话，急救人员赶到后说出的话让她的心顿时揪成一团，那名摔倒在地的<span style= 'color:red'>男</span>子颈部折断，当场死亡。交警经过调查，作出如下认定：63岁醉酒<span style= 'color:red'>男</span>子祁某每百毫升血液里，酒精含量为156.3mg，属于醉驾，负此次事故的主要责任。张大姐未按规定停放电动车负此次事故的次要责任。张大姐承认自己存在电动车违停的交通违法行为，间接造成了<span style= 'color:red'>男</span>子的死亡，愿意承担一部分责任，但是20万元的赔偿实在是太多了。她认为，主要责任还是在醉酒<span style= 'color:red'>男</span>子身上，因为他当时处于醉酒状态，才是导致死亡的主要原因。据悉，张大姐家住农村，经济条件很一般，20万元的赔偿就算是砸锅卖铁，也实在是赔不起。"
                        },
                        {
                            "date": "2021-03-28T13:42:00.000Z",
                            "author_name": "看看新闻Knews",
                            "@timestamp": "2021-03-29T04:17:04.504Z",
                            "@version": "1",
                            "id": 1,
                            "pic": "https://dfzximg02.dftoutiao.com/news/20210328/20210328214222_71b4ca3480fdd7681d5817db53ffdec5_1_mwpm_03201609.jpeg",
                            "type": "cmse",
                            "category": "头条",
                            "title": "<span style= 'color:red'>男</span>子沉迷网络赌博 趁女网友熟睡之际盗取45000元",
                            "url": "https://mini.eastday.com/mobile/210328214222034465051.html",
                            "content": "熊女士称当时其正和一<span style= 'color:red'>男</span>网友，在铜川某酒店一起居住过夜。警方初步怀疑是这名<span style= 'color:red'>男</span>网友作案，但受害者熊女士称，她和这名<span style= 'color:red'>男</span>子是网上聊天时认识的，但并不知道对方的电话号码、姓名等信息。民警随即调取了酒店的视频监控和住房记录，经过技术手段比对，确定该<span style= 'color:red'>男</span>子姓瞿，商洛人，是一名厨师。其常年在西安某酒店打工，现租住在西安某城中村。民警随即对瞿某展开跟踪调查，最终在1月14号将瞿某抓获。"
                        },
                        {
                            "date": "2021-03-28T14:30:00.000Z",
                            "author_name": "看看新闻Knews",
                            "@timestamp": "2021-03-29T04:17:04.732Z",
                            "@version": "1",
                            "id": 86,
                            "pic": "https://dfzximg02.dftoutiao.com/news/20210328/20210328223034_26568e59be9f0eaccbe147e743cf673c_1_mwpm_03201609.jpeg",
                            "type": "cmse",
                            "category": "头条",
                            "title": "消防车出警被堵路上 他的举动暖到蓝朋友们！",
                            "url": "https://mini.eastday.com/mobile/210328223034350349849.html",
                            "content": "当时的出警负责人彭先生告诉看看新闻Knews记者：“消防车前面两旁的车已经在让出道路，但前方拥堵更严重，我们行驶了一小段路后，就看到有一个穿着黑色上衣的<span style= 'color:red'>男</span>子在路中央，正在指挥疏散车辆，本来堵了好几分钟，彭先生说，当时的一些情况视频上没有展现，在他们准备驶离时，那位热心<span style= 'color:red'>男</span>子对他们敬了个礼，他们猜测<span style= 'color:red'>男</span>子可能是退队伍军人。彭先生说觉得非常感激。由于当时任务紧急，消防员们只留下了一句“谢了大哥”就离开了，没有来得及留下热心<span style= 'color:red'>男</span>子的联系方式。不过，今日看看新闻Knews记者联系彭先生时，他表示消防支队的宣教科说已经找到了对方。"
                        },
                        {
                            "date": "2021-03-28T10:32:00.000Z",
                            "author_name": "看看新闻Knews",
                            "@timestamp": "2021-03-29T04:17:04.664Z",
                            "@version": "1",
                            "id": 28,
                            "pic": "https://dfzximg02.dftoutiao.com/news/20210328/20210328183210_e508aa60df5b9fe6836f909201c2fe18_1_mwpm_03201609.jpeg",
                            "type": "cmse",
                            "category": "头条",
                            "title": "2岁萌娃与外公蹲路边偷吃冰淇淋 结果偶遇妈妈…",
                            "url": "https://mini.eastday.com/mobile/210328183210517748425.html",
                            "content": "“外公就跟她讲没事没事，你快吃，然后我女儿就放心了…”画面中，小朋友有外公“撑腰”时喜悦的表情也萌翻了一众网友，纷纷评论道：这个外公太暖了、满眼都是对<span style= 'color:red'>孩</span>子的宠爱。"
                        },
                        {
                            "date": "2021-03-28T14:14:00.000Z",
                            "author_name": "看看新闻Knews",
                            "@timestamp": "2021-03-29T04:17:04.741Z",
                            "@version": "1",
                            "id": 89,
                            "pic": "https://dfzximg02.dftoutiao.com/news/20210328/20210328221425_fb85e45146237ce8400447da18b5d049_1_mwpm_03201609.png",
                            "type": "cmse",
                            "category": "头条",
                            "title": "15岁初三女生突发灵感 这首《SHE》“火”了！",
                            "url": "https://mini.eastday.com/mobile/210328221425581300174.html",
                            "content": "近日，一首名为“SHE”（女<span style= 'color:red'>孩</span>）的原创歌曲，在网络上疯传，短短几天时间，这首歌曲的点击量超300万。宣宣告诉记者，这首歌取名为“SHE”（女<span style= 'color:red'>孩</span>）的原因是，她想通过这首歌来表达女性的力量不可忽视。而从突发灵感到作词作曲和声演唱，都是她在短短几天时间内，独自创作出来的。"
                        },
                        {
                            "date": "2021-03-28T13:26:00.000Z",
                            "author_name": "北青网",
                            "@timestamp": "2021-03-29T04:17:04.582Z",
                            "@version": "1",
                            "id": 4,
                            "pic": "https://dfzximg02.dftoutiao.com/news/20210328/20210328212644_b100a3ffcbd37b445052e326cf37300a_1_mwpm_03201609.png",
                            "type": "cmse",
                            "category": "头条",
                            "title": "<span style= 'color:red'>男</span>子因这行为被判刑！",
                            "url": "https://mini.eastday.com/mobile/210328212644126843958.html",
                            "content": "\n                            把自己的银行卡、手机卡卖给别人就能轻松赚钱是不是感觉找到了发家致富的新途径？醒醒吧！你可能已经涉嫌犯罪！案情回顾                        "
                        },
                        {
                            "date": "2021-03-28T13:02:00.000Z",
                            "author_name": "澎湃新闻",
                            "@timestamp": "2021-03-29T04:17:04.597Z",
                            "@version": "1",
                            "id": 10,
                            "pic": "https://dfzximg02.dftoutiao.com/news/20210328/20210328210213_f7ef67b256003e6b0a15c8de45181ad2_0_mwpm_03201609.png",
                            "type": "cmse",
                            "category": "头条",
                            "title": "温州一小区装高空抛物监控报警系统，14楼住户扔纸巾被捕捉",
                            "url": "https://mini.eastday.com/mobile/210328210213676482834.html",
                            "content": "系统自动捕捉的抛物线轨迹随后，14楼的住户被“请”进了派出所，住户称被拍下的白色物体是当天早上家里上小学的小<span style= 'color:red'>孩</span>从阳台扔下的一团纸巾。"
                        },
                        {
                            "date": "2021-03-28T10:32:00.000Z",
                            "author_name": "北青网",
                            "@timestamp": "2021-03-29T04:17:04.663Z",
                            "@version": "1",
                            "id": 27,
                            "pic": "https://dfzximg02.dftoutiao.com/news/20210328/20210328183220_ca63273d9ea607273f3d9605f4583075_1_mwpm_03201609.png",
                            "type": "cmse",
                            "category": "头条",
                            "title": "两名<span style= 'color:red'>男</span>子在海南因这件小事“路怒”当街扭打！",
                            "url": "https://mini.eastday.com/mobile/210328183220187837255.html",
                            "content": "\n                            3月28日，记者从海南省公安厅海岸警察总队第三支队了解到，万宁新梅海岸派出所于3月23日成功规劝一名涉嫌故意伤害致他人轻伤的人员投案自首。据该所办案民警介绍，2月23日下午，接到辖区日月湾沙县小吃店路边有人打架的报警后，值班民警迅速赶往事发现场。到达现场后双方已经停止打架，其中一方杨某半躺在其汽车后座位上，脸部满是血迹，他的左眼眶下方有一条长约4厘米的伤口，伤口处皮肉外翻，他所穿的白色衬衫上血迹斑斑。民警一边走访现场围观群众，一边调看周边监控，随后将涉案的另一方当事人陈某传唤到派出所接受调查。经调查得知，当时正值旅游高峰，现场停满车辆，陈某便将他的小轿车停在路边，而同样没有找到停车位的杨某将他的越野车停在陈某汽车右后方。后来，陈某因有急事要离开，但杨某的汽车挡住他倒车的方向，双方因此起了口角之争。陈某下车推搡杨某，继而双方发生打斗，混乱中陈某一拳打在杨某左眼下眼眶处，把杨某的眼镜打碎，镜片碎片把其眼眶划破造成大量出血。经万宁市公安局法医对杨某伤情进行鉴定，3月16日出具其脸部损伤程度已达轻伤二级的意见书。随后，新梅海岸派出所民警多次电话劝说陈某及其家人，阐明政策法规，提供法律疑惑咨询服务，最终成功规劝其主动投案自首。依《中华人民共和国刑事诉讼法》规定，该所依法对犯罪嫌疑人陈某予以刑事拘留。警方温馨提示春夏季气温升高，心理易“中暑”，导致情绪失控，易诱发开“赌气车”“霸王车”，互不相让大打出手等不理智行为。遇到上述情况，警方提醒你忍一时风平浪静，退一步海阔天空，要保持冷静心态，随时克制，不开赌气车、霸王车，自觉遵守交通法规。行车、停车、倒车时要做到礼让对方，互谦互让。特别是外出旅游时，要文明出行，文明旅游，不要因为自己的一时情绪失控给自己、给他人甚至家人“添堵”，甚至害人害己害家人。                        "
                        },
                        {
                            "date": "2021-03-28T11:04:00.000Z",
                            "author_name": "看看新闻Knews",
                            "@timestamp": "2021-03-29T04:17:04.634Z",
                            "@version": "1",
                            "id": 17,
                            "pic": "https://dfzximg02.dftoutiao.com/news/20210328/20210328190418_b70158df5b26abb6ea37c4315e4cebf5_1_mwpm_03201609.jpeg",
                            "type": "cmse",
                            "category": "头条",
                            "title": "<span style= 'color:red'>男</span>子酒店一觉醒来 床单上血迹斑斑",
                            "url": "https://mini.eastday.com/mobile/210328190418183739144.html",
                            "content": "\n                            从资阳来成都出差的周先生，最近遇到了一件闹心事儿，这几天让他一直睡不好觉。因为在入住酒店一晚之后，第二天早上却发现自己的床单和被罩上面是血迹斑斑，遮究竟是怎么回事呢？3月27日上午10点过，现场记者在四川大学华西医院附近见到了刚刚从资阳赶来成都的周先生，他说来到这里的目的，就是为了最近遇到的一件烦心事儿。周先生说：“我就是想化验一下那个血 ，是看看这个到底是不是我的（血）。”周先生为什么要来医院化验血？这事儿啊，还要从周先生3月24号晚上入住成都全季酒店说起。从周先生向记者提供的视频画面中看到，白色的被单上面有密密麻麻的血迹，那么这些血迹究竟从何而来呢？周先生说：“22点15分左右（我一个人）入住的那个酒店，因为晚上我开始就比较困，灯我都没开完迅速地就睡觉了，第二天早上洗漱完毕然后我才看到被子，翻开的这一面就有很多血迹，一点一点的并且不是一点两点而是一大片。就是不知道的然后把我吓了一跳呗，然后我就把他们管理员叫进来，我说你看一下你这个房间的卫生，我说你们到底换了被子没有。”                        "
                        },
                        {
                            "date": "2021-03-28T14:32:00.000Z",
                            "author_name": "澎湃新闻",
                            "@timestamp": "2021-03-29T04:17:04.731Z",
                            "@version": "1",
                            "id": 85,
                            "pic": "https://dfzximg02.dftoutiao.com/news/20210328/20210328223228_a2425eb319aa6ff0639e01042f85eca8_0_mwpm_03201609.jpeg",
                            "type": "cmse",
                            "category": "头条",
                            "title": "跨省寻子15年，申聪父母能否获得“人贩子”赔偿？",
                            "url": "https://mini.eastday.com/mobile/210328223228233628445.html",
                            "content": "白天他去公司上班，妻子于晓莉在出租屋内带<span style= 'color:red'>孩</span>子。出事那天是2005年1月4日。"
                        },
                        {
                            "date": "2021-03-28T22:59:00.000Z",
                            "author_name": "厦门网",
                            "@timestamp": "2021-03-29T04:17:04.694Z",
                            "@version": "1",
                            "id": 70,
                            "pic": "https://dfzximg02.dftoutiao.com/news/20210329/20210329065918_16ab2749ab1d7c508ea95b68d3ae2aa3_1_mwpm_03201609.jpeg",
                            "type": "cmse",
                            "category": "头条",
                            "title": "厦门“00后”殡葬策划师帮逝者完成心愿 为海员逝者做了一条小船",
                            "url": "https://mini.eastday.com/mobile/210329065918928328658.html",
                            "content": "告别会那天，吴逸欣和支教学校校长微信视频，只见很多<span style= 'color:red'>孩</span>子围在校长旁边，大声说着：“赵老师，您一路走好。”在场的人无不泪流满面。事后，老人的儿子拉着吴逸欣的手不停地道谢。"
                        },
                        {
                            "date": "2021-03-28T13:23:00.000Z",
                            "author_name": "北青网",
                            "@timestamp": "2021-03-29T04:17:04.585Z",
                            "@version": "1",
                            "id": 5,
                            "pic": "https://dfzximg02.dftoutiao.com/news/20210328/20210328212308_421a07587ce1034f23f4c582339b4915_1_mwpm_03201609.png",
                            "type": "cmse",
                            "category": "头条",
                            "title": "买摩托车吗？原价10万现价只要3万的那种……",
                            "url": "https://mini.eastday.com/mobile/210328212308953978387.html",
                            "content": "经过细致的摸排、抽丝剥茧，在相关部门的支持下，民警发现这笔钱最终流向广东籍<span style= 'color:red'>男</span>子叶某的账户。3月14日，办案民警远赴广州增城区对犯罪嫌疑人实施抓捕。"
                        },
                        {
                            "date": "2021-03-28T11:05:00.000Z",
                            "author_name": "云南网",
                            "@timestamp": "2021-03-29T04:17:04.617Z",
                            "@version": "1",
                            "id": 15,
                            "pic": "https://dfzximg02.dftoutiao.com/news/20210328/20210328190510_d41d8cd98f00b204e9800998ecf8427e_1_mwpm_03201609.jpeg",
                            "type": "cmse",
                            "category": "头条",
                            "title": "63岁退役老兵邓明忠：见义奋不顾身 30年诠释父爱如山",
                            "url": "https://mini.eastday.com/mobile/210328190510616465642.html",
                            "content": "来到离家不远处的巍山河边，调皮的<span style= 'color:red'>孩</span>子们忘记了家长和老师的教诲，跳进了河里嬉戏。当时的巍山河，由于连日的大雨初歇，使得河水暴涨，陈李辉不会游泳，一不小心脚下一滑，瞬间就被汹涌的河水吞没了。"
                        },
                        {
                            "date": "2021-03-28T10:44:00.000Z",
                            "author_name": "",
                            "@timestamp": "2021-03-29T04:17:04.652Z",
                            "@version": "1",
                            "id": 22,
                            "pic": "https://dfzximg02.dftoutiao.com/news/20210328/20210328184429_45b6621b16d7dcb3af6a64765805a204_1_mwpm_03201609.jpeg",
                            "type": "cmse",
                            "category": "头条",
                            "title": "恋爱是什么？愰子难掩“杀猪盘”凶残 徐州警方打掉一个6人诈骗团伙",
                            "url": "https://mini.eastday.com/mobile/210328184429942608097.html",
                            "content": "网恋女友推荐理财神器<span style= 'color:red'>男</span>子投了数十万后被拉黑今年3月份，受害人郭某到云龙公安分局狮子山派出所报案，称他被一名网友骗了。"
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
