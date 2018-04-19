<template>
    <div class="modal-container">
      <transition name="fade" v-on:after-leave="afterLeave">
        <div v-if="show">
          <div class="modal-content-container" v-bind:style="{ width: options.width + 'px', height: options.height + 'px', marginLeft: (-options.width / 2) + 'px', marginTop: (-options.height / 2) + 'px' }">
            <div class="title">
              <span class="ml10">{{options.title}}</span>
              <i class="iconfont icon-ico_tab_close close" @click="closeClick"></i>
            </div>
            <div class="content" ref="contentRef"></div>
            <div class="btns">
              <button v-for="(btn, index) in options.btns" v-bind:class="btn.clas" :key="index" @click="btnClick(btn)">{{ btn.label }}</button>
            </div>
          </div>
        </div>
      </transition>
    </div>
</template>

<script>
import Vue from 'vue'
import { Subject } from 'rxjs/Subject'

export default {
  name: 'Modal',
  data () {
    return {
      options: {
        title: '',
        width: 300,
        height: 180,

        btns: [
          {
            label: '取消',
            clas: 'btn',
            type: '$cancel'
          }, {
            label: '确定',
            clas: 'btn primary',
            type: '$ok'
          }
        ]
      },
      clickCloseEventSubject: new Subject(),
      clickCancelEventSubject: new Subject(),
      clickOkEventSubject: new Subject(),
      clickEventsSubject: new Subject(),
      show: false,
      $componentInstance: null
    }
  },
  mounted () {
    this.show = true

    if (this.options.component) {
      setTimeout(() => {
        this.initComponent()
      })
    }
  },
  methods: {
    closeClick () {
      this.btnClick({ type: '$close' })
    },
    btnClick (btn) {
      switch (btn.type) {
        case '$close':
          this.clickCloseEventSubject.next()
          this.destroy()
          break
        case '$cancel':
          this.clickCancelEventSubject.next()
          this.destroy()
          break
        case '$ok':
          this.clickOkEventSubject.next()
          break
      }

      this.clickEventsSubject.next(btn.type)
    },
    destroy () {
      this.show = false
    },
    afterLeave () {
      this.$el.parentNode.removeChild(this.$el)
      this.$destroy()
    },
    initComponent () {
      let Profile = Vue.extend(this.options.component)

      let div = document.createElement('div')
      this.$refs.contentRef.appendChild(div)
      let componentInstance = new Profile()
      componentInstance.$mount(div)

      this.$componentInstance = componentInstance
    }
  }
}
</script>

<style lang="scss">
  .modal-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    > div {
      height: 100%;
      background: rgba($basicColor, .4);
    }
    .modal-content-container {
      background: rgba($basicHighLightColor, .9);
      border-radius: 4px;
      position: absolute;
      left: 50%;
      top: 40%;
      .title {
        padding: 5px 0;
      }
      .close {
        float: right;
        margin-right: 10px;
        font-size: 14px;
        color: rgba($basicColor, .6);
        transition: $basicTransition;
        &:hover {
          color: rgba($basicColor, .9);
        }
      }
      .content {
        padding: 10px;
      }
      .btns {
        width: 100%;
        padding: 5px 0;
        position: absolute;
        bottom: 0;
        text-align: right;
        button {
          margin-right: 5px;
          &:last-child {
            margin-right: 10px;
          }
        }
      }
    }
  }
</style>
