# 缩放控件

`BmNavigation`

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|anchor|ControlAnchor||控件停靠位置|
|offset|Size||控件偏移值|
|type|NavigationControlType||平移缩放控件的类型|
|showZoomInfo|Boolean||是否显示级别提示信息|
|enableGeolocation|Boolean|false|控件是否集成定位功能|

## 示例

### 在右上角加入缩放控件

#### 代码

```html
<template>
  <baidu-map-offline class="map" center="北京">
    <bm-offline-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-offline-navigation>
  </baidu-map-offline>
</template>
```

#### 预览
<doc-preview>
  <baidu-map-offline class="map" center="北京">
    <bm-offline-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-offline-navigation>
  </baidu-map-offline>
</doc-preview>
