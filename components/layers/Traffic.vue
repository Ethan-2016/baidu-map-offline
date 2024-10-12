<script>
import commonMixin from '../base/mixins/common.js'

export default {
  name: 'bm-offline-triffic',
  render (h) {},
  mixins: [commonMixin('layer')],
  props: {
    predictDate: {
      type: Object
    }
  },
  watch: {
    'pridictDate.weekday' () {
      this.reload()
    },
    'pridictDate.hour' () {
      this.reload()
    },
    pridictDate () {
      this.reload()
    }
  },
  methods: {
    load () {
      const {pridictDate, BMapOffline, map} = this
      this.originInstance = new BMapOffline.TrafficLayer({
        pridictDate
      })
      map.addTileLayer(this.originInstance)
    }
  }
}
</script>
