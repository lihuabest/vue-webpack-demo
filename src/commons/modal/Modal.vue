<template>
  <div class="modal-container">
    <div class="modal-content-container" v-bind:style="{ width: options.width + 'px', height: options.height + 'px', marginLeft: (-options.width / 2) + 'px', marginTop: (-options.height / 2) + 'px' }">
      <div class="title">
        <span class="ml10">{{options.title}}</span>
        <i class="iconfont icon-ico_tab_close close" @click="closeClick"></i>
      </div>
      <div class="btns">
        <button v-for="(btn, index) in options.btns" v-bind:class="btn.clas" :key="index" @click="btnClick(btn)">{{ btn.label }}</button>
      </div>
    </div>
  </div>
</template>

<script>
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
      clickEventsSubject: new Subject()
    }
  },
  mounted () {
    // console.log(this.options)
  },
  methods: {
    closeClick () {
      this.clickEventsSubject.next('$close')
    },
    btnClick (btn) {
      this.clickEventsSubject.next(btn.type)
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
    background: rgba($basicColor, .4);
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
