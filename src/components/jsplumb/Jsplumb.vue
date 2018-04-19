<template>
  <div class="jsplumb-container">
    <div class="jsplumb-configs-container" ref="configsRef">
      <ul>
        <li v-for="(config, index) in configs" :key="index">
          <div class="title" v-bind:class="{ last: index === configs.length - 1 }" @click="toggleConfig(config)">{{ config.name }}</div>
          <CollapseTransition>
            <ul v-show="config.expand">
              <li v-for="child in config.children" :key="child.id">
                <div class="child-title">{{ child.name }}</div>
              </li>
            </ul>
          </CollapseTransition>
        </li>
      </ul>
    </div>
    <div class="jsplumb-drop-container" ref="dropRef"></div>
  </div>
</template>

<script>
import JsplumbTool from '@/components/jsplumb/Jsplumb.tool'

export default {
  name: 'Jsplumb',
  components: {
  },
  data () {
    return {
      // 原始拖动数据对象
      configs: [
        { name: '水果', expand: false, children: [
          {name: '苹果'},
          {name: '香蕉'},
          {name: '桃子'}
        ]},
        { name: '蔬菜', expand: false, children: [
          {name: '白菜'},
          {name: '青菜'},
          {name: '油菜'}
        ]}
      ],
      ins: null,
      dragPos: null
    }
  },
  mounted () {
    this.initJsplumb()
  },
  methods: {
    toggleConfig (leaf) {
      this.configs.forEach(config => {
        if (leaf === config) {
          leaf.expand = !leaf.expand
        } else {
          config.expand = false
        }
      })
    },
    initJsplumb () {
      let that = this

      that.$jsplumb.ready(() => {
        that.ins = this.$jsplumb.getInstance({
          Connector: [ 'Bezier', { curviness: 150 } ],
          HoverPaintStyle: { stroke: 'orange' }
        })

        that.ins.draggable(that.$refs.configsRef.querySelectorAll('.child-title'), {
          clone: true,
          drag: function (event) {
            that.dragPos = event.pos
          }
        })

        that.ins.droppable(that.$refs.dropRef, {
          drop: function (event) {
            if (event.drag.el.classList.contains('child-title')) {
              that.createDrop(event)
            }
          }
        })

        that.ins.bind('contextmenu', function (connection, event) {
          // 新增删除按钮
          that.createDeleteLineItem(connection, event)
          event.preventDefault()
        })
      })
    },
    createDrop (event) {
      let container = this.$refs.dropRef
      let div = document.createElement('div')
      let uuid = this.$tools.uuid()
      div.innerHTML = event.drag.el.innerHTML
      div.setAttribute('uuid', uuid)
      div.classList.add('jsplumb-drop-item')

      let parentPos = this.$tools.dom.getElementAbsolutePosition(container)
      let x = this.dragPos[0] - parentPos.x,
        y = this.dragPos[1] - parentPos.y
      div.style.left = x + 'px'
      div.style.top = y + 'px'

      container.appendChild(div)

      // 绑定拖拽动作
      this.ins.draggable(div, {
        containment: container,
        drag: function (e) {
          // 拖拽位置
          // element.x = e.pos[0]
          // element.y = e.pos[1]
        }
      })

      // 添加连接点
      let point = JsplumbTool.getEndpointOptions({
        scope: 'hand',
        stroke: 'transparent',
        hoverStroke: '#CCDDEE',
        endpointRadius: 4,
        strokeWidth: 3,
        maxConnections: -1,
        connectionsDetachable: true,
        connectorStrokeWidth: 1,
        connectorStroke: '#CCCCCC'
      })

      let arr = ['TopCenter', 'BottomCenter', 'LeftMiddle', 'RightMiddle']
      arr.forEach(p => {
        let uuid = this.$tools.uuid()
        this.ins.addEndpoint(div, { anchors: p, uuid: uuid }, point)
        div.setAttribute(p + 'Uuid', uuid)
      })
    },
    createDeleteLineItem (connection, event) {
      let div = document.createElement('div')
      div.innerHTML = '删除连线？'
      div.classList.add('jsplumb-drop-delete-line')

      let dragTargetContainerPos = this.$tools.dom.getElementAbsolutePosition(this.$refs.dropRef)
      let absX = event.pageX - dragTargetContainerPos.x
      let absY = event.pageY - dragTargetContainerPos.y
      div.style.left = absX + 'px'
      div.style.top = absY + 'px'

      this.$refs.dropRef.appendChild(div)

      div.addEventListener('click', (e) => {
        // 删除连线
        this.ins.deleteConnection(connection)
        // 删除按钮dom
        div.parentElement.removeChild(div)
      }, false)
    }
  }
}
</script>

<style lang="scss">
  .jsplumb-container {
    height: 100%;
    position: relative;
    .jsplumb-configs-container {
      width: 200px;
      display: inline-block;
      position: absolute;
      left: 50px;
      top: 50px;
      border: 1px solid $basicBorderColor;
      background: #F5F5F5;
      z-index: 3;
      user-select: none;
      .title, .child-title {
        padding: 2px 2px 2px 10px;
        transition: $basicTransition;
        cursor: default;
        &:hover {
          background: rgba($basicColor, .1);
        }
      }
      .title {
        padding-top: 5px;
        padding-bottom: 5px;
        border-bottom: 1px solid $basicBorderColor;
        &.last {
          border-bottom-color: transparent;
        }
        + ul {
          background: $basicHighLightColor;
        }
      }
      .child-title {
        padding-left: 23px;
        cursor: move;
      }
    }
    .jsplumb-drop-container {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      overflow: hidden;

      .jtk-drag, .jtk-hover, .jtk-endpoint-connected, .jtk-endpoint-drop-allowed {
        circle {
          cursor: crosshair;
          fill: #fff;
          stroke: #CCDDEE;
        }
      }
      .jtk-endpoint-connected {
        z-index: 1;
        circle {
          cursor: crosshair;
          fill: #108EE9;
          stroke: #CCDDEE;
        }
      }
      .jtk-connector-outline {
        z-index: -1;
      }

      .jsplumb-drop-delete-line {
        position: absolute;
        padding: 3px 10px;
        border: 1px solid $basicBorderColor;
        border-radius: 4px;
        display: inline-block;
        color: rgba($basicTextColor, .6);
        cursor: pointer;
        background: $basicHighLightColor;
        z-index: 10;
      }
    }
  }

  // 拖动后在画布里生成的组件
  .jsplumb-drop-item {
    position: absolute;
    cursor: move;
    border: 1px solid $basicBorderColor;
    background: $basicHighLightColor;
    z-index: 2;
  }

  // 修改局部jsplumb组件样式
  .jsplumb-drop-item, .katavorio-clone-drag {
    box-sizing: border-box;
    width: 200px;
    padding: 2px 2px 2px 23px;
    font-size: 12px;
    letter-spacing: 1px;
  }

  // 拖动时克隆的组件
  .katavorio-clone-drag {
    z-index: 4;
    background: rgba($basicColor, .1);
  }
</style>
