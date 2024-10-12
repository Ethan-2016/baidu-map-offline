# VUE BAIDU MAP

<p align="center">
  <img src="https://dafrok.github.io/vue-baidu-map-offline/favicon.png" width="200px">
</p>
<p align="center">基于 vue-baidu-map-offline 的 vue-baidu-map-offline</p>

[![npm](https://img.shields.io/npm/v/vue-baidu-map-offline.svg)]()
[![Travis](https://img.shields.io/travis/Dafrok/vue-baidu-map-offline.svg)]()
[![Package Quality](http://npm.packagequality.com/shield/vue-baidu-map-offline.svg)](http://packagequality.com/#?package=vue-baidu-map-offline)
[![npm](https://img.shields.io/npm/dm/vue-baidu-map-offline.svg)]()
[![license](https://img.shields.io/github/license/dafrok/vue-baidu-map-offline.svg)]()

## 语言

- [中文](https://github.com/Dafrok/vue-baidu-map-offline/blob/master/README.zh.md)
- [English](https://github.com/Dafrok/vue-baidu-map-offline/blob/master/README.md)

## 文档

[https://dafrok.github.io/vue-baidu-map-offline](https://dafrok.github.io/vue-baidu-map-offline)

## 开始

### 安装

```bash
npm i --save vue-baidu-map-offline
```

### 初始化

```javascript
import Vue from 'vue'
import BaiduMapOffline from 'vue-baidu-map-offline'

Vue.use(BaiduMapOffline, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'YOUR_APP_KEY'
})
```

### 使用
```vue
<template>
  <baidu-map-offline class="map">
  </baidu-map-offline>
</template>

<style>
/* 地图容器必须设置宽和高属性 */
.map {
  width: 400px;
  height: 300px;
}
</style>
```

## 贡献

[贡献指南](https://github.com/Dafrok/vue-baidu-map-offline/blob/master/CONTRIBUTING.md)


## 协议

[MIT 许可证](https://opensource.org/licenses/MIT)

版权所有 (c) 2016至今, Dafrok <o.o@mug.dog>


