import Vue from 'vue'
// import BaiduMapOffline from '@/index.js'

export const createApp = ({template = `<baidu-map-offline></baidu-map-offline>`, methods = {}}) => {
  const $root = document.createElement('div')
  document.body.appendChild($root)
  return new Vue({
    el: $root,
    template,
    methods
  })
}
