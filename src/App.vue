<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
//引入全局字体
@font-face {
  font-family: "gjm";
  src: url("~@/assets/fonts/郭敬明字体.ttf");
}
//一些常用的样式
* {
  margin: 0%;
  padding: 0%;
  list-style: none;
  outline: none;
  text-decoration: none;
}
.flex {
  display: flex;
}
.j-c {
  justify-content: center;
}
.j-s {
  justify-content: space-between;
}
.a-c {
  align-items: center;
}
</style>
