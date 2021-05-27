<template>
    <div>
        <MediaUpload></MediaUpload>
    </div>
</template>

<script>
    import MediaUpload from "@/components/MediaUpload";

    export default {
        name: "Admin",
        data() {
            return {}
        },
        methods: {},
        components: {MediaUpload},
        mounted() {
          document.title="管理界面——文件上传";
        }
    }
</script>

<style scoped>

</style>
