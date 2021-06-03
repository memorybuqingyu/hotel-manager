<template></template>

<script>
// import { getLogin, setToken } from "@/util/network/login.js";
export default {
  async created() {
    let loginId = localStorage.getItem("loginId");
    let loginPwd = localStorage.getItem("loginPwd");
    // 如果登录名一个没有值就跳转到登录页
    if (!loginId || !loginPwd) {
      // 跳到登录页
      this.$router.push("/login");
    }

    let { success } = await this.$get("/Admin/Login", { loginId, loginPwd});

    if (success) {
      sessionStorage.setItem("token", success.token);
      //跳转后台管理界面
      this.$router.push("/layout");
      // 将token放到请求头中
      this.$setToken()
    } else {
      //跳转到登录页
      this.$router.push("/login");
    }
  },
};
</script>

<style>
</style>