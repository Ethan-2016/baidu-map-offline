# 全景控件

`BmPanorama`

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|anchor|ControlAnchor||控件停靠位置|
|offset|Size||控件偏移值|

## 示例

### 插入全景控件

#### 代码

```html
<template>
  <baidu-map-offline class="map">
    <bm-offline-panorama></bm-offline-panorama>
  </baidu-map-offline>
</template>
```

#### 预览
<doc-preview>
  <baidu-map-offline class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-offline-panorama></bm-offline-panorama>
  </baidu-map-offline>
</doc-preview>