# Geolocation Control

`BmGeolocation`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|anchor|ControlAnchor||The location of the control.|
|offset|Size||The offset of the control.|
|showAddressBar|Boolean||Whether show address bar or not.|
|autoLocation|Boolean|false|Whether to locate your position when the component is added.|
|locationIcon|Icon||Customize the icon of the center point.|

## Events

|name|parameter|description|
|------|-----|----|
|locationSuccess|{point, AddressComponent, marker}|Triggers when locationing is successful.|
|locationError|{StatusCode}|Triggers when locationing is failed.|

## Examples

### Add a geolocation control in the lower right corner of the map

#### Code

```html
<template>
  <baidu-map-offline class="map" center="北京">
    <bm-offline-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-offline-geolocation>
  </baidu-map-offline>
</template>
```

#### Preview

<doc-preview>
  <baidu-map-offline class="map" center="北京">
    <bm-offline-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-offline-geolocation>
  </baidu-map-offline>
</doc-preview>
