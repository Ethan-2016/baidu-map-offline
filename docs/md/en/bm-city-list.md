# City List Control

`BmCityList`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|anchor|ControlAnchor||The location of the control.|
|offset|Size||The offset of the control.|

## Events
|name|parameter|description|
|------|-----|----|
|changeBefore||Triggers before switching the city.|
|changeAfter||Triggers after switching the city.|


## Examples

### Add a city list control in the upper left corner of the map

#### Code

```html
<template>
  <baidu-map-offline class="map" class="map" style="height: 500px" center="北京">
    <bm-offline-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-offline-city-list>
  </baidu-map-offline>
</template>
```

#### Preview

<doc-preview>
  <baidu-map-offline class="map" class="map" style="height: 500px" center="北京">
    <bm-offline-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-offline-city-list>
  </baidu-map-offline>
</doc-preview>