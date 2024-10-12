# Panorama Control

`BmPanorama`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|anchor|ControlAnchor||The location of the control.|
|offset|Size||The offset of the control.|

## Examples

### Add a panorama control on the map

#### Code

```html
<template>
  <baidu-map-offline class="map" center="北京">
    <bm-offline-panorama></bm-offline-panorama>
  </baidu-map-offline>
</template>
```

#### Preview
<doc-preview>
  <baidu-map-offline class="map" center="北京">
    <bm-offline-panorama></bm-offline-panorama>
  </baidu-map-offline>
</doc-preview>