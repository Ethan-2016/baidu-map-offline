export function createPoint (BMapOffline, options = {}) {
  const {lng, lat} = options
  return new BMapOffline.Point(lng, lat)
}

export function createPixel (BMapOffline, options = {}) {
  const {x, y} = options
  return new BMapOffline.Pixel(x, y)
}

export function createBounds (BMapOffline, options = {}) {
  const {sw, ne} = options
  return new BMapOffline.Bounds(createPoint(BMapOffline, sw), createPoint(BMapOffline, ne))
}

export function createSize (BMapOffline, options = {}) {
  const {width, height} = options
  return new BMapOffline.Size(width, height)
}

export function createIcon (BMapOffline, options = {}) {
  const {url, size, opts = {}} = options
  return new BMapOffline.Icon(url, createSize(BMapOffline, size), {
    anchor: opts.anchor && createSize(BMapOffline, opts.anchor),
    imageSize: opts.imageSize && createSize(BMapOffline, opts.imageSize),
    imageOffset: opts.imageOffset && createSize(BMapOffline, opts.imageOffset),
    infoWindowAnchor: opts.infoWindowAnchor && createSize(BMapOffline, opts.infoWindowAnchor),
    printImageUrl: opts.printImageUrl
  })
}

export function createLabel (BMapOffline, options = {}) {
  const {content, opts} = options
  return new BMapOffline.Label(content, {
    offset: opts.offset && createSize(BMapOffline, opts.offset),
    position: opts.position && createPoint(BMapOffline, opts.position),
    enableMassClear: opts.enableMassClear
  })
}

export function createSymbol (BMapOffline, options = {}) {
  const {path, opts} = options
  return new BMapOffline.Symbol(global[path] || path, {
    anchor: opts.anchor && createSize(BMapOffline, opts.anchor),
    fillColor: opts.fillColor,
    fillOpacity: opts.fillOpacity,
    scale: opts.scale,
    rotation: opts.rotation,
    strokeColor: opts.strokeColor,
    strokeOpacity: opts.strokeOpacity,
    strokeWeight: opts.strokeWeight
  })
}

export function createIconSequence (BMapOffline, options = {}) {
  const {symbol, offset, repeat, fixedRotation} = options
  return new BMapOffline.IconSequence(
    symbol && createSymbol(BMapOffline, symbol),
    offset,
    repeat,
    fixedRotation
  )
}
