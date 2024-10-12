import BaiduMapOffline from './map/Map.vue'
import BmView from './map/MapView.vue'
import BmScale from './controls/Scale.vue'
import BmNavigation from './controls/Navigation.vue'
import BmMapType from './controls/MapType.vue'
import BmOverviewMap from './controls/OverviewMap.vue'
import BmGeolocation from './controls/Geolocation.vue'
import BmCopyright from './controls/Copyright.vue'
import BmCityList from './controls/CityList.vue'
import BmPanorama from './controls/Panorama.vue'
import BmControl from './controls/Control.vue'
import BmMarker from './overlays/Marker.vue'
import BmPointCollection from './overlays/PointCollection.vue'
import BmPolyline from './overlays/Polyline.vue'
import BmPolygon from './overlays/Polygon.vue'
import BmCircle from './overlays/Circle.vue'
import BmGround from './overlays/Ground.vue'
import BmLabel from './overlays/Label.vue'
import BmInfoWindow from './overlays/InfoWindow.vue'
import BmOverlay from './overlays/Overlay.vue'
import BmContextMenu from './context-menu/Menu.vue'
import BmContextMenuItem from './context-menu/Item.vue'
import BmLocalSearch from './search/LocalSearch.vue'
import BmTransit from './search/Transit.vue'
import BmWalking from './search/Walking.vue'
import BmDriving from './search/Driving.vue'
import BmBus from './search/Bus.vue'
import BmTile from './layers/Tile.vue'
import BmTraffic from './layers/Traffic.vue'
import BmBoundary from './others/Boundary.vue'
import BmAutoComplete from './others/AutoComplete.vue'

import BmlMarkerClusterer from './extra/MarkerClusterer.vue'
import BmlLushu from './extra/Lushu.vue'
import BmlHeatmap from './extra/Heatmap.vue'
import BmlCurveLine from './extra/CurveLine.vue'

export default {
  install (Vue, options) {
    const {ak} = options
    Vue.prototype._BMapOffline = () => ({ak})

    Vue.component('baidu-map-offline', BaiduMapOffline)
    Vue.component('bm-offline-view', BmView)

    Vue.component('bm-offline-scale', BmScale)
    Vue.component('bm-offline-navigation', BmNavigation)
    Vue.component('bm-offline-map-type', BmMapType)
    Vue.component('bm-offline-overview-map', BmOverviewMap)
    Vue.component('bm-offline-geolocation', BmGeolocation)
    Vue.component('bm-offline-copyright', BmCopyright)
    Vue.component('bm-offline-city-list', BmCityList)
    Vue.component('bm-offline-panorama', BmPanorama)
    Vue.component('bm-offline-control', BmControl)

    Vue.component('bm-offline-marker', BmMarker)
    Vue.component('bm-offline-point-collection', BmPointCollection)
    Vue.component('bm-offline-polyline', BmPolyline)
    Vue.component('bm-offline-polygon', BmPolygon)
    Vue.component('bm-offline-circle', BmCircle)
    Vue.component('bm-offline-ground', BmGround)
    Vue.component('bm-offline-label', BmLabel)
    Vue.component('bm-offline-info-window', BmInfoWindow)
    Vue.component('bm-offline-overlay', BmOverlay)

    Vue.component('bm-offline-context-menu', BmContextMenu)
    Vue.component('bm-offline-context-menu-item', BmContextMenuItem)

    Vue.component('bm-offline-local-search', BmLocalSearch)
    Vue.component('bm-offline-transit', BmTransit)
    Vue.component('bm-offline-walking', BmWalking)
    Vue.component('bm-offline-driving', BmDriving)
    Vue.component('bm-offline-bus', BmBus)

    Vue.component('bm-offline-tile', BmTile)
    Vue.component('bm-offline-traffic', BmTraffic)

    Vue.component('bm-offline-auto-complete', BmAutoComplete)
    Vue.component('bm-offline-boundary', BmBoundary)
  }
}

export {
  BaiduMapOffline, BmView,
  BmScale, BmNavigation, BmMapType, BmOverviewMap, BmGeolocation, BmCopyright, BmCityList, BmPanorama, BmControl,
  BmMarker, BmPointCollection, BmPolyline, BmPolygon, BmCircle, BmGround, BmLabel, BmInfoWindow, BmOverlay,
  BmContextMenu, BmContextMenuItem,
  BmLocalSearch, BmTransit, BmWalking, BmDriving, BmBus,
  BmTile, BmTraffic,
  BmBoundary, BmAutoComplete
}

export {
  BmlMarkerClusterer,
  BmlLushu,
  BmlHeatmap,
  BmlCurveLine
}
