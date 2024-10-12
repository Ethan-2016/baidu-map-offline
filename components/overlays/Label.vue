<script>
import commonMixin from '../base/mixins/common.js'
import bindEvents from '../base/bindEvent.js'
import {createPoint, createSize} from '../base/factory.js'

export default {
  name: 'bm-offline-label',
  render () {},
  mixins: [commonMixin('overlay')],
  props: {
    content: {
      type: String
    },
    title: {
      type: String
    },
    offset: {},
    position: {},
    labelStyle: {},
    zIndex: {
      type: Number,
      default: 0
    },
    massClear: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    content (val) {
      this.originInstance.setContent(val)
    },
    title (val) {
      this.originInstance.setTitle(val)
    },
    'offset.width' (val, oldVal) {
      const {BMapOffline} = this
      if (val.toString() !== oldVal.toString()) {
        this.originInstance.setOffset(createSize(BMapOffline, {width: val, height: this.offset.height}))
      }
    },
    'offset.height' (val, oldVal) {
      const {BMapOffline} = this
      if (val.toString() !== oldVal.toString()) {
        this.originInstance.setOffset(createSize(BMapOffline, {
          width: this.offset.width,
          height: val
        }))
      }
    },
    'position.lng' (val, oldVal) {
      const {BMapOffline} = this
      const lng = val
      if (val.toString() !== oldVal.toString() && lng >= -180 && lng <= 180) {
        this.originInstance.setCenter(createPoint(BMapOffline, {lng, lat: this.center.lat}))
      }
    },
    'position.lat' (val, oldVal) {
      const {BMapOffline} = this
      const lat = val
      if (val.toString() !== oldVal.toString() && lat >= -74 && lat <= 74) {
        this.originInstance.setCenter(createPoint(BMapOffline, {lng: this.center.lng, lat}))
      }
    },
    labelStyle: {
      handler (val) {
        this.originInstance.setStyle(val)
      },
      deep: true
    },
    zIndex (val) {
      this.originInstance.setZIndex(val)
    },
    massClear (val) {
      val ? this.originInstance.enableMassClear() : this.originInstance.disableMassClear()
    }
  },
  methods: {
    load () {
      const {BMapOffline, map, content, title, offset, position, labelStyle, zIndex, massClear, $parent} = this
      const overlay = new BMapOffline.Label(content, {
        offset: createSize(BMapOffline, offset),
        position: createPoint(BMapOffline, position),
        enableMassClear: massClear
      })
      this.originInstance = overlay
      try {
        $parent.originInstance.setLabel(overlay)
      } catch (e) {
        map.addOverlay(overlay)
      }
      title && overlay.setTitle(title)
      labelStyle && overlay.setStyle(labelStyle)
      zIndex && overlay.setZIndex(zIndex)
      bindEvents.call(this, overlay)
    }
  }
}
</script>
