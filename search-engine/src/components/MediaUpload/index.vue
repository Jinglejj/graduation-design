<template>
  <div>
    <div class="upload_box">
      <h1>上传文件</h1>
      <el-upload
          class="upload-demo"
          drag
          ref="upload"
          :action="uploadUrl"
          :before-upload="beforeAvatarUpload"
          :http-request="handleUpload"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传wav/mp4文件</div>
      </el-upload>
      <!--遮罩层-->
      <div class="myLoading" v-if="loading">
        <h4 class="tips">{{ tips }}</h4>
        <!--进度条-->
        <el-progress type="line"
                     :percentage="percentage"
                     :text-inside="true"
                     :stroke-width="20"
                     class="progress"
                     :show-text="true"
                     :color="customColors"></el-progress>
      </div>
      <!--上传完成提示对话框-->
      <el-dialog
          title="提示"
          :visible="dialogVisible"
          width="30%"
          :modal-append-to-body='false'
      >
        <span>文件上传成功</span>
        <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="ensure">确 定</el-button>
      </span>
      </el-dialog>

    </div>
  </div>
</template>

<script>
export default {
  name: "MediaUpload",
  data() {
    return {
      uploadUrl: "",
      loading: false,
      percentage: 0,
      tips: '',
      dialogVisible: false,
      customColors: [
        {color: '#f56c6c', percentage: 20},
        {color: '#e6a23c', percentage: 40},
        {color: '#5cb87a', percentage: 60},
        {color: '#1989fa', percentage: 80},
        {color: '#6f7ad3', percentage: 100}
      ]
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
        this.$message.error('只能上传 WAV或Mp4 格式!');
      }
      if (!isLt500M) {
        this.$message.error('上传文件大小不能超过 500MB!');
      }
      return (isWAV || isMp4) && isLt500M;
    },
    handleUpload(param) {
      this.loading = true;
      this.tips = '正在上传中。。。';

      let formData = new FormData()
      formData.append('fileName', param.file.name) // 额外参数
      formData.append('file', param.file)

      let config = {
        onUploadProgress: progressEvent => {
          //progressEvent.loaded:已上传文件大小
          //progressEvent.total:被上传文件的总大小
          let complete = (progressEvent.loaded / progressEvent.total).toFixed(2) * 100;
          this.percentage = complete;
          if (this.percentage >= 100) {
            this.dialogVisible = true
          }
        },
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };

      //上传中
      this.axios.post(this.uploadUrl,
          formData,
          config).then(({data}) => {
            if (data.code === 200) {

            } else {
            }
          }
      )
    },
    ensure() {
      this.dialogVisible = false;
      this.loading = false;
    }
  },
  components: {},
  mounted() {

  }
}
</script>

<style scoped>
.upload_box {
  width: 600px;
  margin: 0 auto;
  padding-top: 200px;
  text-align: center;
}


.myLoading {
  position: fixed;
  width: 100vw;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: black;
  opacity: 0.8;
}

.progress {
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -100px;
  margin-top: -100px;
}

.tips {
  color: #409eff;
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 20px;
  margin-left: -100px;
  margin-top: -150px;
}

</style>
