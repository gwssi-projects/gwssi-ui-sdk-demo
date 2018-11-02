
<template>
  <div id="main">

    <div class="header">
      <div class="topbar">
        <span>
          <svg class="iconfont" aria-hidden="true">
            <use xlink:href="#icon-mind_map"></use>
          </svg>
          ('gwssi.title.gwssi') </span>
      </div>
    </div>

    <div class="container">

      <el-tag type="info" color="#fff"><a href="project/base/#login" target="_blank">('gwssi.introduction.base') </a></el-tag>
      <el-tag type="info" color="#fff"><a href="project/portal/#/login" target="_blank">('gwssi.introduction.protal') </a></el-tag>
      <el-tag type="info" color="#fff"><a href="project/isearch/#/login" target="_blank">ISEARCH(('gwssi.introduction.isearchMenu'))</a></el-tag>

    </div>
  </div>

</template>

<script>
export default {
  mounted: function() {},
  methods: {},
  data() {
    return {};
  }
};
</script>

<style  lang="less" scoped>
div.header {
  height: 50px;
  background-color: #fff;
  border-bottom: 1px #ccc solid;
}
div.topbar {
  position: relative;
  width: 1024px;
  margin: 0 auto;
}
div.topbar span {
  position: absolute;
  left: 0px;
  top: 10px;
  font-size: 16px;
  color: #666;
}
div.container {
  position: relative;
  width: 1024px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
}
a {
  color: #909399;
}
a:hover {
  color: #333;
  text-decoration: none;
}
.el-alert {
  margin: 10px 0 15px;
}
.el-tag {
  margin: 10px;
  font-size: 18px;
}

.iconfont {
  /* 通过设置 font-size 来改变图标大小 */
  width: 1.5em;
  height: 1.5em;
  /* 图标和文字相邻时，垂直对齐 */
  vertical-align: -0.15em;
  /* 通过设置 color 来改变 SVG 的颜色/fill */
  fill: currentColor;
  /* path 和 stroke 溢出 viewBox 部分在 IE 下会显示
             normalize.css 中也包含这行 */
  overflow: hidden;
  margin-right: 10px;
}
</style>