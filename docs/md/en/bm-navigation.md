# Navigation Control

`BmNavigation`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|anchor|ControlAnchor||The location of the control.|
|offset|Size||The offset of the control.|
|type|NavigationControlType||The type of the control.|
|showZoomInfo|Boolean||Whether show zoom info or not.|
|enableGeolocation|Boolean|false|Whether integrates the geolocation.|

## Examples

### Add a navigation control in the upper right corner of the map

#### Code

```html
<template>
  <baidu-map-offline class="map" center="北京">
    <bm-offline-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-offline-navigation>
  </baidu-map-offline>
</template>
```

#### Preview
<doc-preview>
  <baidu-map-offline class="map" center="北京">
    <bm-offline-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-offline-navigation>
  </baidu-map-offline>
</doc-preview>
  