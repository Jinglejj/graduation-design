<template>
    <div>
        <template v-if="videoInfo">
                         <Video
                                :videoInfo="video"
                                :key="video.id"
                                v-for="video in results"
                         ></Video>
        </template>
    </div>
</template>

<script>
    import Video from "@/components/Video";

    export default {
        name: "VideoList",
        data() {
            return {
                results:[]
            }
        },
        props:['videoInfo'],
        methods: {
            parseInfo(){
                this.results=[]
                var x;
                for(x in this.videoInfo){
                    this.checkInfo(this.videoInfo[x])
                }
                 this.sendResultsLength()
             },
            checkInfo(obj){
                //长度为0直接添加
                var flag=false;
                 if(this.results.length===0){
                     obj.start_time=[parseInt(obj.start_time/1000)]
                     obj.sentence_text=[obj.sentence_text]
                     obj.duration=parseInt(obj.duration/1000)
                     obj.file_name=obj.file_name
                    this.results.push(obj)
                 }else{//不为零需要判断是否已经有了
                     //然后找到已经有的了的 位置添加开始时间 和 文本信息
                     for(var i=0;i<this.results.length;i++){
                         if(this.results[i].file_name===(obj.file_name)){//如果在已有的结果里发现重复
                              //直接把start_time 和 sentence_text push进去
                             this.results[i].start_time.push(parseInt(obj.start_time/1000))
                             this.results[i].sentence_text.push(obj.sentence_text)
                             flag=!flag;
                             break;
                         }
                     }
                     if(!flag){
                         //没有被添加过就直接原地插入
                          obj.start_time=[parseInt(obj.start_time/1000)]
                         obj.sentence_text=[obj.sentence_text]
                         obj.duration=parseInt(obj.duration/1000)
                         obj.file_name=obj.file_name
                         this.results.push(obj)
                     }
                 }

            },
            sendResultsLength(){
                this.$emit('func',this.results.length)
            },

        },
        components: {Video},
        mounted() {

        }
    }
</script>

<style scoped>

</style>
