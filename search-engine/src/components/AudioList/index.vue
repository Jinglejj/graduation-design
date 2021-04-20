<template>
    <div>
        <template v-if="audioInfo">
                 <Audio :key="audio.id" v-for="audio in results" :audio-info="audio"/>
        </template>
    </div>
</template>

<script>
    import Audio from "@/components/Audio";

    export default {
        name: "AudioList",
        data() {
            return {
                results:[]
            }
        },
        props:['audioInfo'],
        methods: {
            parseInfo(){
                this.results=[]
                var x;
                for(x in this.audioInfo){
                    this.checkInfo(this.audioInfo[x])
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
                     obj.file_name="audio/"+obj.file_name
                    this.results.push(obj)
                 }else{//不为零需要判断是否已经有了
                     //然后找到已经有的了的 位置添加开始时间 和 文本信息
                     for(var i=0;i<this.results.length;i++){
                         if(this.results[i].file_name===("audio/"+obj.file_name)){//如果在已有的结果里发现重复
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
                         obj.file_name="audio/"+obj.file_name
                         this.results.push(obj)
                     }
                 }

            },sendResultsLength(){
                this.$emit('func',this.results.length)
            }
        },
        components: {Audio},
        mounted() {

        }
    }
</script>

<style scoped>

</style>
