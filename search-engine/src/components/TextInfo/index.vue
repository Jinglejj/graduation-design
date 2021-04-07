<template>

    <el-card class="box" shadow="hover">
        <a :href="textInfo.url" target="_blank"><p class="title" v-html="textInfo.title"></p></a>
        <div class="innerBox">
            <a :href="textInfo.url" target="_blank"><img :src="textInfo.pic" alt=""></a>
            <p class="content" v-html="textInfo.content"></p>
            <p>
                <span class="author">{{textInfo.author_name}} <span class="interval">-</span></span>
                <span class="url">{{textInfo.url}}</span>
                <span class="date"><span class="interval">-</span>{{new Date(textInfo.date).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'').slice(0,10)}}</span>
            </p>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "TextInfo",
        data() {
            return {}
        },
        methods: {},
        components: {},
        props: ['textInfo'],
        mounted() {
            console.log(this.textInfo)
        }
    }
</script>

<style scoped>
    * {
        color: black;
        margin: 0px;
        padding: 0px;
        font-size: 13px;
    }

    .box {
        width: 595px;
        margin: 5px;
        padding: 5px;
        height: 140px;
    }


    .title {
        color: #2440b3;
        font-size: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .innerBox {
        position: relative;
        width: 560px;
        height: 83px;
    }

    .innerBox p:last-child {
        position: absolute;
        bottom: 0px;
        padding: 0px;
        margin: 0px;
        margin-left: 136px;
    }

    .content {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .url {
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 180px;
    }

    img {
        width: 128px;
        height: 85px;
        float: left;
        margin-right: 10px;
        border-radius: 10px;
    }

    .date, .author, .url {
        color: green;
        float: left;
        line-height: 17px;
    }

    .interval {
        margin: 5px;
    }

    a:visited {
        color: #771caa;
    }

    a {
        text-decoration: none;

    }
</style>
