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
      })
    },
    createDrop (event) {
      let container = this.$refs.dropRef
      let div = document.createElement('div')
      let uuid = this.$tools.uuid()
      div.innerHTML = event.drag.el.innerHTML
      div.setAttribute('uuid', uuid)
      div.classList.add('jsplumb-drop-item')
      console.log(this.$tools.dom)
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
          // element.x = e.pos[0]
          // element.y = e.pos[1]
        }
      })
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
      z-index: 2;
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
    }
  }

  .jsplumb-drop-item {
    position: absolute;
    cursor: move;
  }

  // 修改局部jsplumb组件样式
  .jsplumb-drop-item, .katavorio-clone-drag {
    box-sizing: border-box;
    width: 200px;
    padding: 2px 2px 2px 23px;
    font-size: 12px;
    background: rgba($basicColor, .1);
    letter-spacing: 1px;
  }
  .katavorio-clone-drag {
    z-index: 3;
  }
</style>
