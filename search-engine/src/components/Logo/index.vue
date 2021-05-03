<script>
import './utils.js'
export default {
  name: "Logo",
  functional: true,
  data: () => ({}),
  render(e, { props }) {
    return (
      <div
        id="logo-coantainer"
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          height: '600px',
        }}
      ></div>
    );
  },
};
</script>
<style scoped>
</style>