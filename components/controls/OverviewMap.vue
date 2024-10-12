<script>
import {createSize} from '../base/factory.js'
import commonMixin from '../base/mixins/common.js'
import bindEvents from '../base/bindEvent.js'

export default {
  name: 'bm-offline-overview-map',
  mixins: [commonMixin('control')],
  render () {},
  props: {
    anchor: {
      type: String
    },
    offset: {
      type: Object
    },
    size: {
      type: Object
    },
    isOpen: {
      type: Boolean
    }
  },
  watch: {
    anchor () {
      this.reload()
    },
    offset () {
      this.reload()
    },
    size () {
      this.reload()
    },
    isOpen () {
      this.reload()
    }
  },
  methods: {
    load () {
      const {BMapOffline, map, isOpen, size, offset, anchor} = this
      const mapTypes = []
      this.mapTypes && this.mapTypes.forEach(item => {
        mapTypes.push(global[item])
      })
      this.originInstance = new BMapOffline.OverviewMapControl({
        anchor: global[anchor],
        offset: createSize(BMapOffline, offset),
        size: createSize(BMapOffline, size),
        isOpen
      })
      bindEvents.call(this, this.originInstance)
      map.addControl(this.originInstance)
    }
  }
}
</script>
