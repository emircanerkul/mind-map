/**
 * @Author: 王林
 * @Date: 2021-04-11 10:19:55
 * @Desc: 默认主题
 */
export default {
  // 节点内边距
  paddingX: 15,
  paddingY: 5,
  // 图片显示的最大宽度
  imgMaxWidth: 100,
  // 图片显示的最大高度
  imgMaxHeight: 100,
  // icon的大小
  iconSize: 20,
  // 连线的粗细
  lineWidth: 1,
  // 连线的颜色
  lineColor: '#549688',
  // 连线样式
  lineDasharray: 'none',
  // 连线风格
  lineStyle: 'straight', // 针对logicalStructure、mindMap两种结构。曲线（curve）、直线（straight）、直连（direct）
  // 概要连线的粗细
  generalizationLineWidth: 1,
  // 概要连线的颜色
  generalizationLineColor: '#549688',
  // 概要曲线距节点的距离
  generalizationLineMargin: 0,
  // 概要节点距节点的距离
  generalizationNodeMargin: 20,
  // 背景颜色
  backgroundColor: '#fafafa',
  // 背景图片
  backgroundImage: 'none',
  // 背景重复
  backgroundRepeat: 'no-repeat',
  // 节点使用横线样式
  nodeUseLineStyle: false,
  // 根节点样式
  root: {
    shape: 'rectangle',
    fillColor: '#549688',
    fontFamily: '微软雅黑, Microsoft YaHei',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 1.5,
    borderColor: 'transparent',
    borderWidth: 0,
    borderDasharray: 'none',
    borderRadius: 5,
    textDecoration: 'none',
    active: {
      borderColor: 'rgb(57, 80, 96)',
      borderWidth: 3,
      borderDasharray: 'none'
    }
  },
  // 二级节点样式
  second: {
    shape: 'rectangle',
    marginX: 100,
    marginY: 40,
    fillColor: '#fff',
    fontFamily: '微软雅黑, Microsoft YaHei',
    color: '#565656',
    fontSize: 16,
    fontWeight: 'noraml',
    fontStyle: 'normal',
    lineHeight: 1.5,
    borderColor: '#549688',
    borderWidth: 1,
    borderDasharray: 'none',
    borderRadius: 5,
    textDecoration: 'none',
    active: {
      borderColor: 'rgb(57, 80, 96)',
      borderWidth: 3,
      borderDasharray: 'none'
    }
  },
  // 三级及以下节点样式
  node: {
    shape: 'rectangle',
    marginX: 50,
    marginY: 0,
    fillColor: 'transparent',
    fontFamily: '微软雅黑, Microsoft YaHei',
    color: '#6a6d6c',
    fontSize: 14,
    fontWeight: 'noraml',
    fontStyle: 'normal',
    lineHeight: 1.5,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 5,
    borderDasharray: 'none',
    textDecoration: 'none',
    active: {
      borderColor: 'rgb(57, 80, 96)',
      borderWidth: 3,
      borderDasharray: 'none'
    }
  },
  // 概要节点样式
  generalization: {
    shape: 'rectangle',
    marginX: 100,
    marginY: 40,
    fillColor: '#fff',
    fontFamily: '微软雅黑, Microsoft YaHei',
    color: '#565656',
    fontSize: 16,
    fontWeight: 'noraml',
    fontStyle: 'normal',
    lineHeight: 1.5,
    borderColor: '#549688',
    borderWidth: 1,
    borderDasharray: 'none',
    borderRadius: 5,
    textDecoration: 'none',
    active: {
      borderColor: 'rgb(57, 80, 96)',
      borderWidth: 3,
      borderDasharray: 'none'
    }
  }
}

// 支持激活样式的属性
// 简单来说，会改变节点大小的都不支持在激活时设置，为了性能考虑，节点切换激活态时不会重新计算节点大小
export const supportActiveStyle = [
  'fillColor',
  'color',
  'fontWeight',
  'fontStyle',
  'borderColor',
  'borderWidth',
  'borderDasharray',
  'borderRadius',
  'textDecoration'
]

export const lineStyleProps = ['lineColor', 'lineDasharray', 'lineWidth']
