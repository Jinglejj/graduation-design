<template>
  <div>
    <template v-if="videoInfo">
      <Video
        :videoInfo="video"
        :key="video.id"
        v-for="video in videoInfo"
        v-on:playVideo="showDialog"
      ></Video>
    </template>
    <template v-if="playFile">
      <el-dialog
        :title="playFile.file_name"
        top="20vh"
        :visible.sync="dialogVisible"
        @close="closeDialog"
        width="41%"
      >
        <video
          width="740"
          height="430"
          ref="videoPlayer"
          id="videoPlayer"
          :src="
            'http://106.53.148.120:8989/download?fileName=' + playFile.file_name
          "
          controls
        ></video>
      </el-dialog>
    </template>
    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="pageNum"
        :page-size="pageSize"
        :hide-on-single-page="hidePage"
        layout="prev, pager, next, jumper"
        :total="totalCount"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { searchVideo } from "../../apis/search";
import Video from "@/components/Video";

import ResultMixins from "@/mixins/result-mixins";
export default {
  name: "VideoPage",
  mixins: [ResultMixins],
  components: { Video },
  data() {
    return {
      videoInfo: null,
      playFile: null,
      dialogVisible: false,
    };
  },
  methods: {
    async search() {
      const { data } = await searchVideo(
        this.keyWord,
        this.pageNum,
        this.pageSize
      );
      if (data.code !== 100) {
        this.$message.error("查询视频出错，请更换关键词！");
      }
      this.videoInfo = data.map.data.results;
      this.totalCount = data.map.data.total;
      this.totalCount = 5;
    },
    showDialog(text) {
      this.dialogVisible = true;
      this.playFile = text;
      setTimeout(() => {
        //不设置的话，获取不到videoPlayer元素
        this.$refs.videoPlayer.currentTime = parseInt(text.start_time / 1000);
      }, 400);
    },
    closeDialog() {
      this.playFile = null;
    },
  },
};
</script>

<style scoped>
</style>
