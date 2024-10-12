# 比例尺控件

`BmScale`

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|anchor|ControlAnchor||控件停靠位置|
|offset|Size||控件偏移值|

## 示例

### 在右上角加入比例尺控件

#### 代码

```html
<template>
  <baidu-map-offline class="map" center="北京">
    <bm-offline-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-offline-scale>
  </baidu-map-offline>
</template>
```

#### 预览

<doc-preview>
  <baidu-map-offline class="map" center="北京">
    <bm-offline-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-offline-scale>
  </baidu-map-offline>
</doc-preview>
