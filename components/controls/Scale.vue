<script>
import commonMixin from '../base/mixins/common.js'
import {createSize} from '../base/factory.js'

export default {
  name: 'bm-scale',
  render () {},
  mixins: [commonMixin('control')],
  props: {
    anchor: {
      type: String
    },
    offset: {
      type: Object
    }
  },
  watch: {
    anchor () {
      this.reload()
    },
    offset () {
      this.reload()
    }
  },
  methods: {
    load () {
      const {BMapOffline, map, anchor, offset} = this
      this.originInstance = new BMapOffline.ScaleControl({
        anchor: global[anchor],
        offset: offset && createSize(BMapOffline, offset)
      })
      map.addControl(this.originInstance)
    }
  }
}
</script>
