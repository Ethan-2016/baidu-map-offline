import BaiduMapOffline from './map/Map.vue'
import BmOfflineView from './map/MapView.vue'
import BmOfflineScale from './controls/Scale.vue'
import BmOfflineNavigation from './controls/Navigation.vue'
import BmOfflineMapType from './controls/MapType.vue'
import BmOfflineOverviewMap from './controls/OverviewMap.vue'
import BmOfflineGeolocation from './controls/Geolocation.vue'
import BmOfflineCopyright from './controls/Copyright.vue'
import BmOfflineCityList from './controls/CityList.vue'
import BmOfflinePanorama from './controls/Panorama.vue'
import BmOfflineControl from './controls/Control.vue'
import BmOfflineMarker from './overlays/Marker.vue'
import BmOfflinePointCollection from './overlays/PointCollection.vue'
import BmOfflinePolyline from './overlays/Polyline.vue'
import BmOfflinePolygon from './overlays/Polygon.vue'
import BmOfflineCircle from './overlays/Circle.vue'
import BmOfflineGround from './overlays/Ground.vue'
import BmOfflineLabel from './overlays/Label.vue'
import BmOfflineInfoWindow from './overlays/InfoWindow.vue'
import BmOfflineOverlay from './overlays/Overlay.vue'
import BmOfflineContextMenu from './context-menu/Menu.vue'
import BmOfflineContextMenuItem from './context-menu/Item.vue'
import BmOfflineLocalSearch from './search/LocalSearch.vue'
import BmOfflineTransit from './search/Transit.vue'
import BmOfflineWalking from './search/Walking.vue'
import BmOfflineDriving from './search/Driving.vue'
import BmOfflineBus from './search/Bus.vue'
import BmOfflineTile from './layers/Tile.vue'
import BmOfflineTraffic from './layers/Traffic.vue'
import BmOfflineBoundary from './others/Boundary.vue'
import BmOfflineAutoComplete from './others/AutoComplete.vue'

import BmOfflinelMarkerClusterer from './extra/MarkerClusterer.vue'
import BmOfflinelLushu from './extra/Lushu.vue'
import BmOfflinelHeatmap from './extra/Heatmap.vue'
import BmOfflinelCurveLine from './extra/CurveLine.vue'

export default {
  install (Vue, options) {
    Vue.component('baidu-map-offline', BaiduMapOffline)
    Vue.component('bm-offline-view', BmOfflineView)

    Vue.component('bm-offline-scale', BmOfflineScale)
    Vue.component('bm-offline-navigation', BmOfflineNavigation)
    Vue.component('bm-offline-map-type', BmOfflineMapType)
    Vue.component('bm-offline-overview-map', BmOfflineOverviewMap)
    Vue.component('bm-offline-geolocation', BmOfflineGeolocation)
    Vue.component('bm-offline-copyright', BmOfflineCopyright)
    Vue.component('bm-offline-city-list', BmOfflineCityList)
    Vue.component('bm-offline-panorama', BmOfflinePanorama)
    Vue.component('bm-offline-control', BmOfflineControl)

    Vue.component('bm-offline-marker', BmOfflineMarker)
    Vue.component('bm-offline-point-collection', BmOfflinePointCollection)
    Vue.component('bm-offline-polyline', BmOfflinePolyline)
    Vue.component('bm-offline-polygon', BmOfflinePolygon)
    Vue.component('bm-offline-circle', BmOfflineCircle)
    Vue.component('bm-offline-ground', BmOfflineGround)
    Vue.component('bm-offline-label', BmOfflineLabel)
    Vue.component('bm-offline-info-window', BmOfflineInfoWindow)
    Vue.component('bm-offline-overlay', BmOfflineOverlay)

    Vue.component('bm-offline-context-menu', BmOfflineContextMenu)
    Vue.component('bm-offline-context-menu-item', BmOfflineContextMenuItem)

    Vue.component('bm-offline-local-search', BmOfflineLocalSearch)
    Vue.component('bm-offline-transit', BmOfflineTransit)
    Vue.component('bm-offline-walking', BmOfflineWalking)
    Vue.component('bm-offline-driving', BmOfflineDriving)
    Vue.component('bm-offline-bus', BmOfflineBus)

    Vue.component('bm-offline-tile', BmOfflineTile)
    Vue.component('bm-offline-traffic', BmOfflineTraffic)

    Vue.component('bm-offline-auto-complete', BmOfflineAutoComplete)
    Vue.component('bm-offline-boundary', BmOfflineBoundary)
  }
}

export {
  BaiduMapOffline, BmOfflineView,
  BmOfflineScale, BmOfflineNavigation, BmOfflineMapType, BmOfflineOverviewMap, BmOfflineGeolocation, BmOfflineCopyright, BmOfflineCityList, BmOfflinePanorama, BmOfflineControl,
  BmOfflineMarker, BmOfflinePointCollection, BmOfflinePolyline, BmOfflinePolygon, BmOfflineCircle, BmOfflineGround, BmOfflineLabel, BmOfflineInfoWindow, BmOfflineOverlay,
  BmOfflineContextMenu, BmOfflineContextMenuItem,
  BmOfflineLocalSearch, BmOfflineTransit, BmOfflineWalking, BmOfflineDriving, BmOfflineBus,
  BmOfflineTile, BmOfflineTraffic,
  BmOfflineBoundary, BmOfflineAutoComplete
}

export {
  BmOfflinelMarkerClusterer,
  BmOfflinelLushu,
  BmOfflinelHeatmap,
  BmOfflinelCurveLine
}
