<template>
<div>
  <slot></slot>
</div>
</template>

<script>
import commonMixin from '../base/mixins/common.js'
import {createSize} from '../base/factory.js'

export default {
  name: 'bm-control',
  mixins: [commonMixin('control')],
  props: ['anchor', 'offset'],
  watch: {
    anchor (val) {
      this.originInstance.setAnchor(val)
    },
    offset (val) {
      this.originInstance.setOffset(val)
    }
  },
  methods: {
    load () {
      const {BMapOffline, map, anchor, offset, $el} = this
      const Control = function () {
        this.defaultAnchor = global[anchor || 'BMapOffline_ANCHOR_TOP_LEFT']
        this.defaultOffset = createSize(BMapOffline, offset)
      }
      Control.prototype = new BMapOffline.Control()
      Control.prototype.initialize = map => map.getContainer().appendChild($el)
      this.originInstance = new Control(anchor, offset)
      map.addControl(this.originInstance)
    }
  }
}
</script>
