export default {
  props: {
    keyword: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    totalCount: 0,
    pageNum: 1,
    pageSize: 20,
  }),
  computed: {
    hidePage() {    
      return this.totalCount < this.pageSize;
    },
  },
  watch: {
    keyword(val, oldVal) {
      if (val !== oldVal) {
        this.pageNum = 1;
        this.pageSize = 20;
        this.search();
      }
    },
  },
  methods:{
    handleCurrentChange(val) {
        this.pageNum = val;
        this.search();
      },
  },
  created(){
    //初始化获取数据
    this.search();
  }
};
