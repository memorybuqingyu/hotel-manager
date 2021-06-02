<template>
  <div class="main">
    <!-- 背景画布 -->
    <canvas id="particle-canvas"></canvas>
    <div class="content">
      <div class="login">
        <div class="title">Bing酒店管理系统</div>
        <el-form
          size="mini"
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="40px"
          class="demo-ruleForm"
        >
          <!-- prop验证 -->
          <el-form-item label="账号" prop="loginId">
            <el-input
              type="text"
              v-model="ruleForm.loginId"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="loginPwd">
            <el-input
              type="password"
              v-model="ruleForm.loginPwd"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <el-form-item label="" prop="loginPwd">
            <!-- 复选框 -->
            <el-checkbox v-model="ruleForm.checkMe">记住我</el-checkbox>
          </el-form-item>

          <el-form-item>
            <el-button
              type="primary"
              @click="submitForm('ruleForm')"
              class="loginBtn"
              >登录</el-button
            >
            <el-button @click="resetForm('ruleForm')" class="resetBtn"
              >取消</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
//发送登录请求
import { getLogin, setToken } from "@/util/network/login.js";

//引入md5对密码进行加密
import { strToMd5 } from "@/util/md5.js";
//导入背景画布动画方法
import { start } from "@/assets/js/login.js";
export default {
  //DOM加载完毕
  mounted() {
    //调用背景动画方法
    start();
  },
  data() {
    //验证账号的方法
    var validateLoginId = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };

    //验证密码的方法
    var validateLoginPwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };

    return {
      //表单数据
      ruleForm: {
        //登录名
        loginId: "",
        //登录密码
        loginPwd: "",
        //记住我
        checkMe: false,
      },
      //表单验证数据
      rules: {
        //验证账号
        loginId: [{ validator: validateLoginId, trigger: "blur" }],

        //验证密码
        loginPwd: [{ validator: validateLoginPwd, trigger: "blur" }],
      },
    };
  },
  methods: {
    //登录方法
    login() {
      //传入登录数据
      //对输入的密码进行md5加密
      this.ruleForm.loginPwd = strToMd5(this.ruleForm.loginPwd);

      getLogin(this.ruleForm.loginId, this.ruleForm.loginPwd).then((res) => {
        console.log(res.data);
        //判断是否登录成功
        if (res.data.success) {
          //服务器会返回一个token（令牌）
          //所以，需要保存该token信息，通常会保存在浏览器的缓存空间中
          //浏览器的缓存空间，有两种：sessionStorage和localStorage
          //区别 localStorage中保存的数据会一直存在 sessionStorage里保存的数据会随着浏览器的关闭而清空
          sessionStorage.setItem("token", res.data.token);
          //调用设置token到请求头中
          // setToken();
        }
      });
    },

    //表单的提交方法
    submitForm(formName) {
      //判断表单数据是否验证成功
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //实现登录
          this.login();
          //跳转到后台管理
          this.$router.push("/layout");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //表单重置的方法
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

// scoped 局部的
<style scoped lang='scss'>
// 背景画布样式
#particle-canvas {
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    to bottom,
    rgb(10, 10, 50) 0%,
    rgb(60, 10, 60) 100%
  );
  vertical-align: middle;
}

.main {
  width: 100%;
  height: 100vh;
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;

    justify-content: center;
    align-items: center;
    .login {
      color: white;
      font-family: gjm;
      width: 400px;
      border: 1px solid #ccc;
      position: absolute;
      z-index: 20;
      padding: 20px 40px;
      border-radius: 10px;
      .title {
        font-size: 20px;
        text-align: center;
        margin-bottom: 20px;
      }
      .resetBtn {
        margin-left: 20%;
      }
      .loginBtn {
        margin-left: 20%;
      }
    }
  }
}
</style>