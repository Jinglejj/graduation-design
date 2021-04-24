<template>
    <div>
        <h1>上传文件</h1>
        <el-upload
                class="upload-demo"
                drag
                :action="uploadUrl"
                :before-upload="beforeAvatarUpload"
                :http-request="handleUpload"
        >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传wav/mp4文件</div>
        </el-upload>
    </div>
</template>

<script>
    export default {
        name: "MediaUpload",
        data() {
            return {
                uploadUrl: "",
            }
        },
        methods: {
            beforeAvatarUpload(file) {
                const isWAV = file.type === 'audio/wav';
                const isMp4 = file.type === 'video/mp4';
                const isLt500M = file.size / 1024 / 1024 < 500;


                if (isWAV) {
                    this.uploadUrl = "http://106.53.148.120:8989//uploadVoice"
                } else if (isMp4) {
                    this.uploadUrl = "http://106.53.148.120:8989//uploadVideo"
                }

                if (!isWAV && !isMp4) {
                    this.$message.error('上传只能是 WAV或Mp4 格式!');
                }
                if (!isLt500M) {
                    this.$message.error('上传文件大小不能超过 500MB!');
                }
                return (isWAV || isMp4) && isLt500M;
            },
            handleUpload(param) {
                console.log(param);
                let formData = new FormData()
                formData.append('fileName', param.file.name) // 额外参数
                formData.append('file', param.file)
                console.log(param.file.name)
                //上传中
                this.axios.post(this.uploadUrl,
                              formData,
                             {headers: {'Content-Type':'multipart/form-data'}}).then(({data}) => {
                        if(data.code===200){
                            this.handleSuccess()
                        }else{
                            this.handleError()
                        }
                    }
                )
            },
            handleSuccess() {
                this.$message.success("上传成功！")
            },
            handleError(){
                this.$message.error("上传失败！")
            }
        },
        components: {},
        mounted() {

        }
    }
</script>

<style scoped>
    .el-upload__tip {

    }
</style>
