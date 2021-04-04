<script>
export default {
  name: "ShowImage",
  functional:true,
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    imageList: {
      type: Array,
      default: () => [],
    },
  },
  render(e,{props}){
    const {imageUrl,imageList}=props;
    return (<el-image  style="width: 160px; height: 160px;marginRight:8px" src={imageUrl} preview-src-list={imageList} fit="contain" />)
  }
};
</script>