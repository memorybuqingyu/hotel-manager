<template>
  <div class="main">
    <!-- 左侧导航 -->
    <div class="left">
      <div class="logo">Bing</div>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- end左侧导航 -->
    <!-- 右侧内容 -->
    <div class="right">
      <!-- 顶部导航 -->
      <div class="nav">1</div>
      <!-- end顶部导航 -->
      <!-- 内容区域 -->
      <div class="content">2</div>
      <!-- end内容区域 -->
    </div>
    <!-- end右侧 -->
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.main {
  width: 100vw;
  height: 100vh;
  display: flex;
}
/* logo样式 */
.logo {
  width: 90%;
  color: white;
  font-size: 18px;
  text-align: center;
  padding: 8px 0px;
  border: 1px solid white;
  margin: 10px auto;
}
/* 左侧样式 */
.left {
  width: 200px;
  color: white;
  background-color: black;
}

/* 右侧样式 */
.right {
  flex: 1;
}
/* 顶部样式 */
.nav {
  height: 50px;
}
</style>