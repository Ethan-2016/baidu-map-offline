<script>
import commonMixin from '../base/mixins/common.js'
import {createSize} from '../base/factory.js'

export default {
  name: 'bm-map-type',
  render () {},
  mixins: [commonMixin('control')],
  props: ['type', 'mapTypes', 'anchor', 'offset'],
  watch: {
    anchor () {
      this.reload()
    },
    offset () {
      this.reload()
    },
    type () {
      this.reload()
    },
    mapTypes () {
      this.reload()
    }
  },
  methods: {
    load () {
      const {BMapOffline, map, anchor, offset, type} = this
      const mapTypes = []
      this.mapTypes && this.mapTypes.forEach(item => mapTypes.push(global[item]))
      this.originInstance = new BMapOffline.MapTypeControl({
        anchor: global[anchor],
        offset: offset && createSize(BMapOffline, offset),
        type: global[type],
        mapTypes
      })
      map.addControl(this.originInstance)
    }
  }
}
</script>
