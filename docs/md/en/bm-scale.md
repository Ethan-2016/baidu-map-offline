# Scale Control

`BmScale`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|anchor|ControlAnchor||The location of the control.|
|offset|Size||The offset of the control.|

## Examples

### Add a scale control in the upper right corner of the map

#### Code

```html
<template>
  <baidu-map-offline class="map" center="北京">
    <bm-offline-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-offline-scale>
  </baidu-map-offline>
</template>
```

#### Preview

<doc-preview>
  <baidu-map-offline class="map" center="北京">
    <bm-offline-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-offline-scale>
  </baidu-map-offline>
</doc-preview>