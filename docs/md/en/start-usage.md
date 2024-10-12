# Usage

## Usage

### Global Registration

Regist all components of *vue-baidu-map-offline* at once.

```javascript
import Vue from 'vue'
import BaiduMapOffline from 'vue-baidu-map-offline'

Vue.use(BaiduMapOffline, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak: 'YOUR_APP_KEY'
})
```

```html
<template>
  <baidu-map-offline class="bm-offline-view">
  </baidu-map-offline>
</template>

<style>
.bm-offline-view {
  width: 100%;
  height: 300px;
}
</style>
```

### Local Registration

A locally registered `BaiduMapOffline` component **must** declare the `ak` attribute.
All components are stored in the `vue-baidu-map-offline / components` folder.
As ES module can't be run directly in most browsers, if importing component causes some runtime errors, please check the webpack's loader configuration whethor the `include` and `exclude` options hits this library.

```html
<template>
  <baidu-map-offline class="bm-offline-view" ak="YOUR_APP_KEY">
  </baidu-map-offline>
</template>

<script>
import BaiduMapOffline from 'vue-baidu-map-offline/components/map/Map.vue'
export default {
  components: {
    BaiduMapOffline
  }
}
</script>

<style>
.bm-offline-view {
  width: 100%;
  height: 300px;
}
</style>
```

### CDN Registration

```html
<script>
Vue.use(VueBaiduMapOffline.default, {
  ak: 'YOUR_APP_KEY'
})
</script>
```

## Q&A

- `BaiduMapOffline` component is an empty block level element. If it doesn't declare its height, the map view will be invisible.
- `BaiduMapOffline` component cannot render maps without `center` and `zoom`. But if `center` is a legal place name string, `BaiduMapOffline` will automatically adjust the value of` zoom` according to the name.
- If you need to update your model, just do it in the callback of the global component event `ready`.

### Wrong Way

```html
<template>
  <baidu-map-offline :center="center" :zoom="zoom"></baidu-map-offline>
</template>
<script>
export default {
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3
    }
  },
  mounted () {
    this.lng = 116.404
    this.lat = 39.915
    this.zoom = 15
  }
}
</script>
```

### Right Way

```html
<template>
  <baidu-map-offline :center="center" :zoom="zoom" @ready="handler"></baidu-map-offline>
</template>
<script>
export default {
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3
    }
  },
  methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    }
  }
}
</script>
```

## Hello world!

```html
<template>
  <baidu-map-offline class="map" center="北京"></baidu-map-offline>
</template>
<style>
.map {
  width: 100%;
  height: 400px;
}
</style>
```
<doc-preview>
  <baidu-map-offline class="map" center="北京">
  </baidu-map-offline>
</doc-preview>
