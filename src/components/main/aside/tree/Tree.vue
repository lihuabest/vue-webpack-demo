<template>
  <div class="tree-container">
    <ul v-for="navigation in navigations" :key="navigation.id">
      <li class="tree-title-container">
        <span class="tree-title" v-bind:class="{ checked: navigation.checked }" v-bind:style="{ paddingLeft: left }" @click="toggle(navigation)">{{ navigation.name }}</span>
        <CollapseTransition>
          <template v-if="navigation.children && navigation.children.length && navigation.expand">
            <Tree :index="index + 1" :navigations="navigation.children" :navigations-all="navigationsAll"></Tree>
          </template>
        </CollapseTransition>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tree',
  props: ['index', 'navigations', 'navigationsAll', 'navigationsParent'],
  data () {
    return {}
  },
  computed: {
    left () {
      return (this.index * 10 + 10) + 'px'
    }
  },
  methods: {
    toggle (leaf) {
      // 第一步 删除其余选中项
      this.$tools.tree.treesTraverse(this.navigationsAll, {
        callback: l => {
          if (l !== leaf) {
            l.checked = false
          }
        }
      })

      // 第二步 选中展开子集或者反选自身
      if (leaf.children && leaf.children.length) {
        leaf.expand = !leaf.expand
      } else if (leaf.link) {
        this.$router.push({ path: leaf.link })
        leaf.checked = true
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .tree-container {
    color: rgba($basicHighLightColor, .6);
  }
  .tree-title-container {
    overflow: hidden
  }
  .tree-title {
    cursor: default;
    padding-top: 5px;
    padding-bottom: 5px;
    display: block;
    transition: $basicTransition;
    &:hover, &.checked {
      color: $basicHighLightColor;
    }
  }
</style>
