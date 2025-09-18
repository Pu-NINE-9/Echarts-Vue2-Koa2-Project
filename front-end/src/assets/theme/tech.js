export default {
  // 主题色彩：霓虹蓝、紫色、青色系列
  color: [
    '#00e5ff', // 霓虹蓝
    '#651fff', // 深紫
    '#1de9b6', // 青色
    '#00b0ff', // 亮蓝
    '#ea80fc', // 亮紫
    '#00e5ff', // 重复的霓虹蓝增强科技感
    '#8c9eff', // 淡紫蓝
    '#82b1ff' // 淡蓝色
  ],
  
  // 深色背景，营造科技感
  backgroundColor: '#0a1128',
  
  // 基础文本样式
  textStyle: {
    color: '#ffffff',
    fontFamily: 'Microsoft YaHei, sans-serif',
    textShadowBlur: 2,
    textShadowColor: '#00e5ff'
  },
  
  // 标题样式
  title: {
    textStyle: {
      color: '#00e5ff',
      fontSize: 18,
      fontWeight: 'bold',
      textShadowBlur: 4,
      textShadowColor: '#00e5ff'
    },
    subtextStyle: {
      color: '#82b1ff',
      textShadowBlur: 2,
      textShadowColor: '#82b1ff'
    }
  },
  
  // 折线图样式
  line: {
    itemStyle: {
      borderWidth: 2,
      borderColor: '#00e5ff'
    },
    lineStyle: {
      width: 3,
      color: '#00e5ff',
      shadowBlur: 10,
      shadowColor: '#00e5ff'
    },
    symbolSize: 6,
    symbol: 'circle',
    smooth: true
  },
  
  // 柱状图样式（Seller组件主要使用）
  bar: {
    itemStyle: {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
          offset: 0,
          color: '#00e5ff'
        }, {
          offset: 1,
          color: '#006064'
        }]
      },
      borderRadius: [4, 4, 0, 0],
      shadowBlur: 10,
      shadowColor: '#00e5ff'
    },
    emphasis: {
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: '#651fff'
          }, {
            offset: 1,
            color: '#311b92'
          }]
        }
      }
    }
  },
  
  // 饼图样式
  pie: {
    itemStyle: {
      color: '#00e5ff',
      borderWidth: 1,
      borderColor: '#0a1128',
      shadowBlur: 8,
      shadowColor: '#00e5ff'
    }
  },
  
  // 分类轴样式
  categoryAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: '#263238',
        width: 2
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: true,
      color: '#b0bec5',
      fontSize: 10
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#263238',
        type: 'dashed'
      }
    }
  },
  
  // 数值轴样式
  valueAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: '#263238',
        width: 2
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: true,
      color: '#b0bec5',
      fontSize: 10
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#263238',
        type: 'dashed'
      }
    }
  },
  
  // 提示框样式
  tooltip: {
    backgroundColor: 'rgba(10, 17, 40, 0.9)',
    borderColor: '#00e5ff',
    borderWidth: 1,
    textStyle: {
      color: '#ffffff'
    },
    axisPointer: {
      lineStyle: {
        color: '#00e5ff',
        width: 2
      },
      crossStyle: {
        color: '#00e5ff',
        width: 1,
        type: 'dashed'
      }
    }
  },
  
  // 图例样式
  legend: {
    textStyle: {
      color: '#b0bec5'
    },
    itemWidth: 12,
    itemHeight: 12,
    itemGap: 15
  },
  
  // 数据区域缩放组件样式
  dataZoom: {
    backgroundColor: 'rgba(10, 17, 40, 0.2)',
    dataBackgroundColor: 'rgba(0, 229, 255, 0.2)',
    fillerColor: 'rgba(0, 229, 255, 0.1)',
    handleColor: '#00e5ff',
    handleSize: '100%',
    textStyle: {
      color: '#b0bec5'
    }
  },
  
  // 视觉映射组件样式
  visualMap: {
    color: ['#651fff', '#00e5ff']
  },
  
  // 工具箱样式
  toolbox: {
    iconStyle: {
      borderColor: '#b0bec5'
    },
    emphasis: {
      iconStyle: {
        borderColor: '#00e5ff'
      }
    }
  }
}