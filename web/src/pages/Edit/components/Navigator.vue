<template>
  <div
    v-if="showMiniMap"
    class="navigatorBox"
    ref="navigatorBox"
    @mousedown="onMousedown"
    @mousemove="onMousemove"
    @mouseup="onMouseup"
  >
    <div
      class="svgBox"
      ref="svgBox"
      :style="{
        transform: `scale(${svgBoxScale})`,
        left: svgBoxLeft + 'px',
        top: svgBoxTop + 'px'
      }"
    ></div>
    <div class="windowBox" :style="viewBoxStyle"></div>
  </div>
</template>

<script>
export default {
  props: {
    mindMap: {
      type: Object
    }
  },
  data() {
    return {
      showMiniMap: false,
      timer: null,
      boxWidth: 0,
      boxHeight: 0,
      svgBoxScale: 1,
      svgBoxLeft: 0,
      svgBoxTop: 0,
      viewBoxStyle: {
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
      }
    }
  },
  mounted() {
    this.$bus.$on('toggle_mini_map', this.toggle_mini_map)
    this.$bus.$on('data_change', this.data_change)
    this.$bus.$on('view_data_change', this.data_change)
    this.$bus.$on('node_tree_render_end', this.data_change)
  },
  destroyed() {
    this.$bus.$off('toggle_mini_map', this.toggle_mini_map)
    this.$bus.$off('data_change', this.data_change)
    this.$bus.$off('view_data_change', this.data_change)
    this.$bus.$off('node_tree_render_end', this.data_change)
  },
  methods: {
    toggle_mini_map(show) {
      this.showMiniMap = show
      this.$nextTick(() => {
        if (this.$refs.navigatorBox) {
          this.init()
        }
        if (this.$refs.svgBox) {
          this.drawMiniMap()
        }
      })
    },
    data_change() {
      if (!this.showMiniMap) {
        return
      }
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.drawMiniMap()
      }, 500)
    },
    init() {
      let { width, height } = this.$refs.navigatorBox.getBoundingClientRect()
      this.boxWidth = width
      this.boxHeight = height
    },

    drawMiniMap() {
      let {
        svgHTML,
        viewBoxStyle,
        miniMapBoxScale,
        miniMapBoxLeft,
        miniMapBoxTop
      } = this.mindMap.miniMap.calculationMiniMap(this.boxWidth, this.boxHeight)
      // 渲染到小地图
      this.$refs.svgBox.innerHTML = svgHTML
      this.viewBoxStyle = viewBoxStyle
      this.svgBoxScale = miniMapBoxScale
      this.svgBoxLeft = miniMapBoxLeft
      this.svgBoxTop = miniMapBoxTop
    },

    onMousedown(e) {
      this.mindMap.miniMap.onMousedown(e)
    },

    onMousemove(e) {
      this.mindMap.miniMap.onMousemove(e)
    },

    onMouseup(e) {
      this.mindMap.miniMap.onMouseup(e)
    }
  }
}
</script>

<style lang="less" scoped>
.navigatorBox {
  position: absolute;
  width: 150px;
  height: 150px;
  background-color: #fff;
  bottom: 80px;
  left: 20px;
  box-shadow: 0 0 16px #989898;
  border-radius: 4px;
  border: 1px solid #eee;
  cursor: pointer;
  user-select: none;

  .svgBox {
    position: absolute;
    left: 0;
    transform-origin: left top;
  }

  .windowBox {
    position: absolute;
    border: 2px solid rgb(00, 119, 192);
    transition: all 0.3s;
  }
}
</style>
