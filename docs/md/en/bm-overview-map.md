# Overview Map Control

`BmOverviewMap`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|anchor|ControlAnchor||The location of the control.|
|offset|Size||The offset of the control.|
|size|Size||The size of the overview map.|
|isOpen|Boolean|false|Whether the overview map is open or not.|

## Events
|name|parameter|description|
|------|-----|----|
|viewchanged|event{type, target, isOpen}|Triggers when the overview map is changed.|
|viewchanging|event{type, target}|Triggers during the changing of the overview map.|

## Examples

### Add a overview map control in the lower right corner of the map

#### Code

```html
<template>
  <baidu-map-offline class="map" center="北京">
    <bm-offline-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-offline-overview-map>
  </baidu-map-offline>
</template>
```

#### Preview

<doc-preview>
  <baidu-map-offline class="map" center="北京">
    <bm-offline-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-offline-overview-map>
  </baidu-map-offline>
</doc-preview>
