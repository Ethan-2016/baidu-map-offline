<script>
import commonMixin from '../base/mixins/common.js'
import bindEvents from '../base/bindEvent.js'
import {createIcon, createSize} from '../base/factory.js'

export default {
  name: 'bm-offline-geolocation',
  render () {},
  mixins: [commonMixin('control')],
  props: {
    anchor: {
      type: String
    },
    offset: {
      type: Object
    },
    showAddressBar: {
      type: Boolean
    },
    autoLocation: {
      type: Boolean
    },
    locationIcon: {
      type: Object
    }
  },
  watch: {
    anchor () {
      this.reload()
    },
    offset () {
      this.reload()
    },
    showAddressBar () {
      this.reload()
    },
    autoLocation () {
      this.reload()
    },
    locationIcon () {
      this.reload()
    }
  },
  methods: {
    load () {
      const {BMapOffline, map, anchor, showAddressBar, autoLocation, locationIcon, offset} = this
      this.originInstance = new BMapOffline.GeolocationControl({
        anchor: global[anchor],
        showAddressBar,
        enableAutoLocation: autoLocation,
        offset: offset && createSize(BMapOffline, offset),
        locationIcon: locationIcon && createIcon(BMapOffline, locationIcon)
      })
      bindEvents.call(this, this.originInstance)
      map.addControl(this.originInstance)
    }
  }
}
</script>
