<template lang="md">

# Context Menu

`BmContextMenu`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|width|Number||Menu width.|

## Events

|name|parameter|description|
|------|----|----|
|open|event{type, target, point, pixel}|Triggers when opening the context menu.|
|close|event{type, target, point, pixel}|Triggers when closing the context menu.|

## Example

### Add a context menu on the map

#### Code

```html
<template>
  <baidu-map-offline class="map" :center="center" :zoom="zoom">
    <bm-offline-context-menu>
      <bm-offline-context-menu-item :callback="gotoBeijing" text="Go to Beijing"></bm-offline-context-menu-item>
      <bm-offline-context-menu-item :callback="gotoShanghai" text="Go to Shanghai"></bm-offline-context-menu-item>
    </bm-offline-context-menu>
  </baidu-map-offline>
</template>

<script>
export default {
  data () {
    return {
      center: {
        lng: 116.404,
        lat: 39.915
      },
      zoom: 15
    }
  },
  methods: {
    gotoBeijing (e) {
      this.center = {
        lng: 116.404,
        lat: 39.915
      }
    },
    gotoShanghai (e) {
      this.center = {
        lng: 121.473354,
        lat: 31.238413
      }
    }
  }
}
</script>
```

#### Preview

<doc-preview>
  <baidu-map-offline class="map" :center="center" :zoom="zoom">
    <bm-offline-context-menu>
      <bm-offline-context-menu-item :callback="gotoBeijing" text="Go to Beijing"></bm-offline-context-menu-item>
      <bm-offline-context-menu-item :callback="gotoShanghai" text="Go to Shanghai"></bm-offline-context-menu-item>
    </bm-offline-context-menu>
  </baidu-map-offline>
</doc-preview>

### Add a context menu on the `BmMarker` component

#### Code

```html
<template>
  <baidu-map-offline class="map" :center="center" :zoom="zoom">
    <bm-offline-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true">
      <bm-offline-context-menu>
        <bm-offline-context-menu-item :callback="getPosition" text="Get coordinate"></bm-offline-context-menu-item>
      </bm-offline-context-menu>
    </bm-offline-marker>
  </baidu-map-offline>
</template>

<script>
export default {
  data () {
    return {
      center: {
        lng: 116.404,
        lat: 39.915
      },
      zoom: 15
    }
  },
  methods: {
    getPosition (e) {
      alert(`${e.point.lng} / ${e.point.lat}`)
    }
  }
}
</script>
```

#### Preview

<doc-preview>
  <baidu-map-offline class="map" :center="center" :zoom="zoom">
    <bm-offline-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true">
      <bm-offline-context-menu>
        <bm-offline-context-menu-item :callback="getPosition" text="Get coordinate"></bm-offline-context-menu-item>
      </bm-offline-context-menu>
    </bm-offline-marker>
  </baidu-map-offline>
</doc-preview>
</template>

<script>
export default {
  data () {
    return {
      center: '北京',
      zoom: 15
    }
  },
  methods: {
    gotoBeijing (e) {
      this.center = '北京'
    },
    gotoShanghai (e) {
      this.center = '上海'
    },
    getPosition (e) {
      alert(`${e.point.lng} / ${e.point.lat}`)
    }
  }
}
</script>