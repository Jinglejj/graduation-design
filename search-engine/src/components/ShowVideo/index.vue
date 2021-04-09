<script>
export default {
  name: "ShowVideo",
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  render(e, { props }) {
    const { url } = props;
    return (
      <el-card>
        <video src={url} controls/>
      </el-card>
    );
  },
};
</script>

<style lang="scss" scoped>

</style>