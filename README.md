# VUE BAIDU MAP

<p align="center">
  <img src="https://dafrok.github.io/vue-baidu-map-offline/favicon.png" width="200px">
</p>
<p align="center">Baidu Map components for Vue 2.x</p>

[![npm](https://img.shields.io/npm/v/vue-baidu-map-offline.svg)]()
[![Travis](https://img.shields.io/travis/Dafrok/vue-baidu-map-offline.svg)]()
[![Package Quality](http://npm.packagequality.com/shield/vue-baidu-map-offline.svg)](http://packagequality.com/#?package=vue-baidu-map-offline)
[![npm](https://img.shields.io/npm/dm/vue-baidu-map-offline.svg)]()
[![license](https://img.shields.io/github/license/dafrok/vue-baidu-map-offline.svg)]()

## Languages

- [中文](https://github.com/Dafrok/vue-baidu-map-offline/blob/master/README.zh.md)
- [English](https://github.com/Dafrok/vue-baidu-map-offline/blob/master/README.md)

## Documentation

[https://dafrok.github.io/vue-baidu-map-offline](https://dafrok.github.io/vue-baidu-map-offline)

## Get Start

### Installation

```bash
npm i --save vue-baidu-map-offline
```

### Initialization

```javascript
import Vue from 'vue'
import BaiduMapOffline from 'vue-baidu-map-offline'

Vue.use(BaiduMapOffline, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak: 'YOUR_APP_KEY'
})
```

### Usage

```vue
<template>
  <baidu-map-offline class="map">
  </baidu-map-offline>
</template>

<style>
/* The container of BaiduMapOffline must be set width & height. */
.map {
  width: 100%;
  height: 300px;
}
</style>
```

## Contributing

[Contributing Guide](https://github.com/Dafrok/vue-baidu-map-offline/blob/master/CONTRIBUTING.md)


## License

[MIT License](https://opensource.org/licenses/MIT)

Copyright (c) 2016-present, Dafrok <o.o@mug.dog>