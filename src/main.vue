
<template>
  <div id="main">

    <div class="header">
      <div class="topbar">

        <el-menu router :default-active="routePath" class="demo-menu" mode="horizontal">
          <el-menu-item index="/test1">测试页面</el-menu-item>
          <el-submenu index="/demo">
            <template slot="title">其它DEMO</template>
            <el-menu-item index="/demo1">权限</el-menu-item>
            <el-menu-item index="/demo2">多语言</el-menu-item>
          </el-submenu>
        </el-menu>

      </div>
    </div>

    <div class="container">
      <router-view></router-view>
    </div>

  </div>

</template>

<script>
export default {
  mounted: function() {},
  methods: {},
  computed: {
    routePath() {
      console.log(this.$route.path);
      return this.$route.path;
    }
  },
  data() {
    return {};
  }
};
</script>

<style  lang="less" scoped>
div.header {
  height: 60px;
  background-color: #fff;
  border-bottom: 1px #e6e6e6 solid;
}
div.topbar {
  position: relative;
  width: 1024px;
  margin: 0 auto;
}
div.container {
  width: 1024px;
  min-height: 100px;
  padding: 20px;
  background-color: #fff; margin: 20px auto;
}
.demo-menu {
  border-bottom: 0px;
}
</style>