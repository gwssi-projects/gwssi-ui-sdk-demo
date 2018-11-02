<template>

    <div class="demo">
        <h1>Test1</h1>

        <p>相关CSS需要全部定义在当前vue的视图文件中</p>
        <p>JS地址</p>
        <p>自定义依赖的第三方包</p>

    </div>

</template>

<script>
export default {
  name: "Test1",
  beforeMount: function() {},

  props: {
    obj: Object
  },

  mounted: function() {},

  methods: {},
  data() {
    return {};
  }
};
</script>

<style  lang="less" scoped>
</style>