# Traffic Layer

`BmTraffic`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|predictDate|PredictDate||Predict date of traffic.|

## Examples

### Traffic at 12 o'clock on Sundays

#### Code

```html
<template>
  <baidu-map-offline class="map" :center="{lng: 116.332782, lat: 40.007978}" :zoom="16">
    <bm-offline-traffic :predictDate="{weekday: 7, hour: 12}">
    </bm-offline-traffic>
  </baidu-map-offline>
</template>
```

#### Preview

<doc-preview>
  <baidu-map-offline class="map" :center="{lng: 116.332782, lat: 40.007978}" :zoom="15">
    <bm-offline-traffic :predictDate="{weekday: 7, hour: 12}">
    </bm-offline-traffic>
  </baidu-map-offline>
</doc-preview>