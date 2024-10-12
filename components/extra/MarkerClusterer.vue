<template>
<span>
  <slot></slot>
</span>
</template>

<script>
import MarkerClusterer from 'BMaplib.markerclusterer'
import {createSize} from '../base/factory.js'
import commonMixin from '../base/mixins/common.js'

export default {
  name: 'bml-marker-clusterer',
  mixins: [commonMixin('markerClusterer')],
  props: {
    gridSize: {
      type: Object
    },
    maxZoom: {
      type: Number
    },
    minClusterSize: {
      type: Number
    },
    styles: {
      type: Array,
      default () {
        return []
      }
    },
    averageCenter: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    gridSize: {
      handler (val) {
        const {BMapOffline, originInstance} = this
        originInstance.setGridSize(BMapOffline, val.map)
      },
      deep: true
    },
    maxZoom (val) {
      const {originInstance} = this
      originInstance.setMaxZoom(val)
    },
    minClusterSize: {
      handler (val) {
        const {BMapOffline, originInstance} = this
        originInstance.setMinClusterSize(createSize(BMapOffline, val))
      },
      deep: true
    },
    styles: {
      handler (val) {
        const {BMapOffline, originInstance} = this
        const obj = JSON.parse(JSON.stringify(val)).map(item => {
          item.size = item.size && createSize(BMapOffline, item.size)
          return item
        })
        originInstance.setStyles(obj)
      },
      deep: true
    },
    averageCenter (val) {
      this.reload()
    }
  },
  methods: {
    load () {
      const {BMapOffline, map, gridSize, minClusterSize, maxZoom, styles, averageCenter} = this
      this.originInstance = new MarkerClusterer(map, {
        gridSize: gridSize && createSize(BMapOffline, gridSize),
        maxZoom,
        minClusterSize: minClusterSize && createSize(BMapOffline, minClusterSize),
        styles: styles.map(item => {
          item.size = createSize(BMapOffline, item.size)
          return item
        }),
        isAverageCenter: averageCenter
      })
      this.$nextTick(() => {
        const markers = this.$children.map(inst => inst.originInstance).filter(marker => marker instanceof BMapOffline.Marker)
        this.originInstance.addMarkers(markers)
      })
    }
  },
  beforeCreate () {
    this.preventChildrenRender = true
  }
}
</script>
