export default {
  // 主题色彩：樱花粉、浅粉、淡紫系列
  color: [
    '#ff758f', // 樱花粉
    '#ffb3c1', // 浅粉
    '#ffa5a5', // 淡珊瑚粉
    '#e91e63', // 玫红色
    '#f8bbd0', // 淡粉色
    '#ce93d8', // 淡紫色
    '#ff80ab', // 亮粉色
    '#ffcdd2' // 超浅粉
  ],
  
  // 柔和背景色
  backgroundColor: '#fffaf0',
  
  // 基础文本样式
  textStyle: {
    color: '#795548',
    fontFamily: 'Microsoft YaHei, sans-serif',
    textShadowBlur: 1,
    textShadowColor: '#ff758f'
  },
  
  // 标题样式
  title: {
    textStyle: {
      color: '#e91e63',
      fontSize: 18,
      fontWeight: 'bold',
      textShadowBlur: 2,
      textShadowColor: '#ff758f'
    },
    subtextStyle: {
      color: '#ff80ab',
      textShadowBlur: 1,
      textShadowColor: '#ff80ab'
    }
  },
  
  // 折线图样式
  line: {
    itemStyle: {
      borderWidth: 2,
      borderColor: '#ff758f'
    },
    lineStyle: {
      width: 3,
      color: '#ff758f',
      shadowBlur: 5,
      shadowColor: '#ff758f'
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
          color: '#ff758f'
        }, {
          offset: 1,
          color: '#ffcdd2'
        }]
      },
      borderRadius: [4, 4, 0, 0],
      shadowBlur: 5,
      shadowColor: '#ff758f'
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
            color: '#e91e63'
          }, {
            offset: 1,
            color: '#ff80ab'
          }]
        }
      }
    }
  },
  
  // 饼图样式
  pie: {
    itemStyle: {
      color: '#ff758f',
      borderWidth: 1,
      borderColor: '#fffaf0',
      shadowBlur: 4,
      shadowColor: '#ff758f'
    }
  },
  
  // 分类轴样式
  categoryAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: '#ffccbc',
        width: 2
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: true,
      color: '#795548',
      fontSize: 10
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#ffebee',
        type: 'dashed'
      }
    }
  },
  
  // 数值轴样式
  valueAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: '#ffccbc',
        width: 2
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: true,
      color: '#795548',
      fontSize: 10
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#ffebee',
        type: 'dashed'
      }
    }
  },
  
  // 提示框样式
  tooltip: {
    backgroundColor: 'rgba(255, 250, 240, 0.95)',
    borderColor: '#ff758f',
    borderWidth: 1,
    textStyle: {
      color: '#795548'
    },
    axisPointer: {
      lineStyle: {
        color: '#ff758f',
        width: 2
      },
      crossStyle: {
        color: '#ff758f',
        width: 1,
        type: 'dashed'
      }
    }
  },
  
  // 图例样式
  legend: {
    textStyle: {
      color: '#795548'
    },
    itemWidth: 12,
    itemHeight: 12,
    itemGap: 15
  },
  
  // 数据区域缩放组件样式
  dataZoom: {
    backgroundColor: 'rgba(255, 250, 240, 0.2)',
    dataBackgroundColor: 'rgba(255, 117, 143, 0.2)',
    fillerColor: 'rgba(255, 117, 143, 0.1)',
    handleColor: '#ff758f',
    handleSize: '100%',
    textStyle: {
      color: '#795548'
    }
  },
  
  // 视觉映射组件样式
  visualMap: {
    color: ['#e91e63', '#ff758f']
  },
  
  // 工具箱样式
  toolbox: {
    iconStyle: {
      borderColor: '#795548'
    },
    emphasis: {
      iconStyle: {
        borderColor: '#ff758f'
      }
    }
  }
}