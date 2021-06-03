<template>
  <div class="main">
    <!-- 左侧导航 -->
    <div
      class="left"
      :style="{
        backgroundColor: themeColor,
        width: !isCollapse ? '200px' : 'auto',
      }"
    >
      <div class="logo">Bing</div>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :background-color="themeColor"
        :collapse="isCollapse"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-user"></i>
            <span>账号管理</span>
          </template>
          <el-menu-item index="1-1">角色管理</el-menu-item>
          <el-menu-item index="1-2">账号管理</el-menu-item>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-office-building"></i>
            <span>客房管理</span>
          </template>
          <el-menu-item index="2-1">类型管理</el-menu-item>
          <el-menu-item index="2-2">客房管理</el-menu-item>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-s-custom"></i>
            <span>客户管理</span>
          </template>
          <el-menu-item index="3-1">客户管理</el-menu-item>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>权限管理</span>
          </template>
          <el-menu-item index="4-1">权限管理</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <!-- end左侧导航 -->
    <!-- 右侧内容 -->
    <div class="right">
      <!-- 顶部导航 -->
      <div class="nav" :style="{ backgroundColor: themeColor }">
        <div class="icon" @click="packUp">
          <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
        </div>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          :background-color="themeColor"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1"
            ><i class="el-icon-s-home"></i>Home</el-menu-item
          >
          <el-menu-item index="2"
            ><i class="el-icon-s-comment"></i>Message</el-menu-item
          >
          <el-menu-item index="3"
            ><i class="el-icon-message"></i>EmailL</el-menu-item
          >
          <el-submenu index="4">
            <template slot="title"
              ><i class="el-icon-s-help"></i>Theme</template
            >

            <el-menu-item
              @click="changeTheme(item.value)"
              v-for="(item, index) in theme"
              :key="index"
              >{{ item.name }}</el-menu-item
            >
            <!-- <el-menu-item index="4-2">灰色主题</el-menu-item>
            <el-menu-item index="4-3">红色主题</el-menu-item>
            <el-menu-item index="4-4">黑色主题</el-menu-item>
            <el-menu-item index="4-5">绿色主题</el-menu-item> -->
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"
              ><i class="el-icon-user-solid"></i>管理员</template
            >
            <el-menu-item index="5-1">个人中心</el-menu-item>
            <el-menu-item index="5-2">修改密码</el-menu-item>
            <el-menu-item index="5-3" @click="exit">退出</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <!-- end顶部导航 -->
      <!-- 内容区域 -->
      <div class="content">2</div>
      <!-- end内容区域 -->
    </div>
    <!-- end右侧 -->
  </div>
</template>

<script>
// 导入Vuex的映射函数
import { mapState } from "vuex";
export default {
  data() {
    return {
      activeIndex2: "1",
      // 主题颜色
      themeColor: "#142334",
      // 是否折叠左侧菜单
      isCollapse: false,
    };
  },
  computed: {
    // 切换主题
    ...mapState("theme", ["theme"]),
  },
  methods: {
    //左侧导航方法(elment)
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //切换主题
    changeTheme(color) {
      this.themeColor = color;
    },
    //收起展开左侧菜单
    packUp() {
      this.isCollapse = !this.isCollapse;
    },
    // 退出系统
    exit(){
      //清除浏览器缓存
      // sessionStorage.removeItem('token')
      // localStorage.removeItem('loginId')
      // localStorage.removeItem('loginPwd')
      // remove 方法需要一个一个的清除
      //clear清楚所有
      sessionStorage.clear()
      localStorage.clear()
      //跳转登录页
      this.$router.push('/login')
    }
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
}

/* 右侧样式 */
.right {
  flex: 1;
}
/* 顶部导航样式 */
.nav {
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
}
/* 收起图标 */
.icon {
  padding-left: 5px;
}
.icon i {
  color: white;
  font-size: 20px;
}
.content {
  padding: 8px;
}
</style>