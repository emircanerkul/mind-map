import { isKey } from './utils/keyMap'
import { bfsWalk } from './utils'

/**
 * javascript comment
 * @Author: 王林25
 * @Date: 2022-12-09 11:06:50
 * @Desc: 键盘导航类
 */
export default class KeyboardNavigation {
  /**
   * javascript comment
   * @Author: 王林25
   * @Date: 2022-12-09 11:07:24
   * @Desc: 构造函数
   */
  constructor(opt) {
    this.opt = opt
    this.mindMap = opt.mindMap
    this.onKeyup = this.onKeyup.bind(this)
    this.mindMap.on('keyup', this.onKeyup)
  }

  /**
   * javascript comment
   * @Author: 王林25
   * @Date: 2022-12-09 14:12:27
   * @Desc: 处理按键事件
   */
  onKeyup(e) {
    ;['Left', 'Up', 'Right', 'Down'].forEach(dir => {
      if (isKey(e, dir)) {
        if (this.mindMap.renderer.activeNodeList.length > 0) {
          this.focus(dir)
        } else {
          let root = this.mindMap.renderer.root
          this.mindMap.renderer.moveNodeToCenter(root)
          root.active()
        }
      }
    })
  }

  /**
   * javascript comment
   * @Author: 王林25
   * @Date: 2022-12-09 14:12:39
   * @Desc: 聚焦到下一个节点
   */
  focus(dir) {
    // 当前聚焦的节点
    let currentActiveNode = this.mindMap.renderer.activeNodeList[0]
    console.log(this.mindMap.renderer.activeNodeList);
    // 当前聚焦节点的位置信息
    let currentActiveNodeRect = this.getNodeRect(currentActiveNode)
    // 寻找的下一个聚焦节点
    let targetNode = null
    let targetDis = Infinity
    // 保存并维护距离最近的节点
    let checkNodeDis = (rect, node) => {
      let dis = this.getDistance(currentActiveNodeRect, rect)
      if (dis < targetDis) {
        targetNode = node
        targetDis = dis
      }
    }

    // 第一优先级：阴影算法
    this.getFocusNodeByShadowAlgorithm({
      currentActiveNode,
      currentActiveNodeRect,
      dir,
      checkNodeDis
    })

    // 第二优先级：区域算法
    if (!targetNode) {
      this.getFocusNodeByAreaAlgorithm({
        currentActiveNode,
        currentActiveNodeRect,
        dir,
        checkNodeDis
      })
    }

    // 第三优先级：简单算法
    if (!targetNode) {
      this.getFocusNodeBySimpleAlgorithm({
        currentActiveNode,
        currentActiveNodeRect,
        dir,
        checkNodeDis
      })
    }

    // 找到了则让目标节点聚焦
    if (targetNode) {
      this.mindMap.renderer.moveNodeToCenter(targetNode)
      targetNode.active()
    }
  }

  /**
   * javascript comment
   * @Author: 王林25
   * @Date: 2022-12-12 16:22:54
   * @Desc: 1.简单算法
   */
  getFocusNodeBySimpleAlgorithm({
    currentActiveNode,
    currentActiveNodeRect,
    dir,
    checkNodeDis
  }) {
    // 遍历节点树
    bfsWalk(this.mindMap.renderer.root, node => {
      // 跳过当前聚焦的节点
      if (node === currentActiveNode) return
      // 当前遍历到的节点的位置信息
      let rect = this.getNodeRect(node)
      let { left, top, right, bottom } = rect
      let match = false
      // 按下了左方向键
      if (dir === 'Left') {
        // 判断节点是否在当前节点的左侧
        match = right <= currentActiveNodeRect.left
        // 按下了右方向键
      } else if (dir === 'Right') {
        // 判断节点是否在当前节点的右侧
        match = left >= currentActiveNodeRect.right
        // 按下了上方向键
      } else if (dir === 'Up') {
        // 判断节点是否在当前节点的上面
        match = bottom <= currentActiveNodeRect.top
        // 按下了下方向键
      } else if (dir === 'Down') {
        // 判断节点是否在当前节点的下面
        match = top >= currentActiveNodeRect.bottom
      }
      // 符合要求，判断是否是最近的节点
      if (match) {
        checkNodeDis(rect, node)
      }
    })
  }

  /**
   * javascript comment
   * @Author: 王林25
   * @Date: 2022-12-12 16:24:54
   * @Desc: 2.阴影算法
   */
  getFocusNodeByShadowAlgorithm({
    currentActiveNode,
    currentActiveNodeRect,
    dir,
    checkNodeDis
  }) {
    bfsWalk(this.mindMap.renderer.root, node => {
      if (node === currentActiveNode) return
      let rect = this.getNodeRect(node)
      let { left, top, right, bottom } = rect
      let match = false
      if (dir === 'Left') {
        match =
          left < currentActiveNodeRect.left &&
          top < currentActiveNodeRect.bottom &&
          bottom > currentActiveNodeRect.top
      } else if (dir === 'Right') {
        match =
          right > currentActiveNodeRect.right &&
          top < currentActiveNodeRect.bottom &&
          bottom > currentActiveNodeRect.top
      } else if (dir === 'Up') {
        match =
          top < currentActiveNodeRect.top &&
          left < currentActiveNodeRect.right &&
          right > currentActiveNodeRect.left
      } else if (dir === 'Down') {
        match =
          bottom > currentActiveNodeRect.bottom &&
          left < currentActiveNodeRect.right &&
          right > currentActiveNodeRect.left
      }
      if (match) {
        checkNodeDis(rect, node)
      }
    })
  }

  /**
   * javascript comment
   * @Author: 王林25
   * @Date: 2022-12-13 16:15:36
   * @Desc: 3.区域算法
   */
  getFocusNodeByAreaAlgorithm({
    currentActiveNode,
    currentActiveNodeRect,
    dir,
    checkNodeDis
  }) {
    // 当前聚焦节点的中心点
    let cX = (currentActiveNodeRect.right + currentActiveNodeRect.left) / 2
    let cY = (currentActiveNodeRect.bottom + currentActiveNodeRect.top) / 2
    bfsWalk(this.mindMap.renderer.root, node => {
      if (node === currentActiveNode) return
      let rect = this.getNodeRect(node)
      let { left, top, right, bottom } = rect
      // 遍历到的节点的中心点
      let ccX = (right + left) / 2
      let ccY = (bottom + top) / 2
      // 节点的中心点坐标和当前聚焦节点的中心点坐标的差值
      let offsetX = ccX - cX
      let offsetY = ccY - cY
      if (offsetX === 0 && offsetY === 0) return
      let match = false
      if (dir === 'Left') {
        match = offsetX <= 0 && offsetX <= offsetY && offsetX <= -offsetY
      } else if (dir === 'Right') {
        match = offsetX > 0 && offsetX >= -offsetY && offsetX >= offsetY
      } else if (dir === 'Up') {
        match = offsetY <= 0 && offsetY < offsetX && offsetY < -offsetX
      } else if (dir === 'Down') {
        match = offsetY > 0 && -offsetY < offsetX && offsetY > offsetX
      }
      if (match) {
        checkNodeDis(rect, node)
      }
    })
  }

  /**
   * javascript comment
   * @Author: 王林25
   * @Date: 2022-12-09 14:12:50
   * @Desc: 获取节点的位置信息
   */
  getNodeRect(node) {
    let { scaleX, scaleY, translateX, translateY } =
      this.mindMap.draw.transform()
    let { left, top, width, height } = node
    return {
      right: (left + width) * scaleX + translateX,
      bottom: (top + height) * scaleY + translateY,
      left: left * scaleX + translateX,
      top: top * scaleY + translateY
    }
  }

  /**
   * javascript comment
   * @Author: 王林25
   * @Date: 2022-12-09 14:13:04
   * @Desc: 获取两个节点的距离
   */
  getDistance(node1Rect, node2Rect) {
    let center1 = this.getCenter(node1Rect)
    let center2 = this.getCenter(node2Rect)
    return Math.sqrt(
      Math.pow(center1.x - center2.x, 2) + Math.pow(center1.y - center2.y, 2)
    )
  }

  /**
   * javascript comment
   * @Author: 王林25
   * @Date: 2022-12-09 14:13:11
   * @Desc: 获取节点的中心点
   */
  getCenter({ left, right, top, bottom }) {
    return {
      x: (left + right) / 2,
      y: (top + bottom) / 2
    }
  }
}
