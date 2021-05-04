<template>
  <el-tabs value="first"  @tab-click="handleClick">
    <el-tab-pane label="文本检索" name="first">
        <slot name="text"></slot>
    </el-tab-pane>
    <el-tab-pane label="音频检索" name="second">
        <slot name="audio"></slot>
    </el-tab-pane>
    <el-tab-pane label="视频检索" name="third">
         <slot name="video"></slot>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>