/**
 * 获取连接点样式
 * @param options
 * @returns {{endpoint: *[], paintStyle: {fill: string, stroke: string, strokeWidth: number}, isSource: boolean, scope, connectorStyle: {stroke: string, strokeWidth: number, fill: string, outlineStroke: string, outlineWidth: number}, connector: *[], maxConnections: number, isTarget: boolean, dropOptions: {hoverClass: string, activeClass: string}, connectionsDetachable: boolean, connectorOverlays: *[]}}
 */
const getEndpointOptions = (options) => {
  let defaultOption = {
    endpointRadius: 4,
    stroke: '#CCDDEE',
    strokeWidth: 2,
    hoverStroke: 'orange',
    connectorStroke: '#108EE9',
    connectorStrokeWidth: 1,
    maxConnections: 1,
    location: 0.5,
    arrowWidth: 8,
    connectionsDetachable: false
  }

  options = Object.assign(defaultOption, options)

  return {
    endpoint: ['Dot', { radius: options.endpointRadius }],   // 设置连接点的形状为圆形
    paintStyle: { fill: '#fff', stroke: options.stroke, strokeWidth: options.strokeWidth },      // 设置连接点的颜色
    // hoverPaintStyle: { stroke: options.hoverStroke },
    isSource: true,                                          // 是否可以拖动（作为连线起点）
    scope: options.scope,                                    // 连接点的标识符，hand 手动 auto 自动
    connectorStyle: { stroke: options.connectorStroke, strokeWidth: options.connectorStrokeWidth, fill: 'none', outlineStroke: 'transparent', outlineWidth: 10 },           // 连线颜色、粗细
    connector: ['Bezier',
      { curviness: 65 }],                // 设置连线为贝塞尔曲线
    maxConnections: options.maxConnections,                   // 设置连接点最多可以连接几条线
    isTarget: true,                                           // 是否可以放置（作为连线终点）
    dropOptions: {                                            // 设置放置相关的css
      hoverClass: 'dropHover',                              // 释放时指定鼠标停留在该元素上使用的css class
      activeClass: 'dragActive'                             // 可拖动到的元素使用的css class
    },
    connectionsDetachable: options.connectionsDetachable,     // 连接过后可否分开
    connectorOverlays: [
      ['Arrow', {
        width: options.arrowWidth,
        length: options.arrowWidth,
        location: options.location
      }]]
  }
}

export default {
  getEndpointOptions
}
