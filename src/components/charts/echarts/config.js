import echarts from 'echarts'
import tool from '@/tools/_all'

/**
 * 饼图配置
 */
export class EchartPieConfig {
  static getLabel (params) {
    let nameLength = (params.name.length > 10 ? (params.name.length - 5) : params.name.length) * 15  // 超过10个字符的名字要折行 需要减掉5个字符
    let valueLength = tool.mumberTransform(params.value).length * 8
    let max = Math.max(nameLength, valueLength)
    let left = -max - 20

    return {
      normal: {
        // formatter: '{b|{b}}\n{a|{c}}',
        formatter: function (a) {
          let name
          let value = tool.mumberTransform(a.data.value)
          if (a.data.name.length > 10) {
            name = a.data.name.split('')
            name.splice(5, 0, '\n')
            name = name.join('')
            name = '{aa|' + name + '}'
            value = '{bb|' + value + '}'
          } else {
            name = '{a|' + a.data.name + '}'
            value = '{b|' + value + '}'
          }

          return name + '\n' + value
        },
        borderWidth: 0,
        borderRadius: 4,
        padding: [0, left],
        rich: {
          a: {
            fontSize: 12,
            lineHeight: 16,
            align: 'center',
            width: max + 20
          },
          aa: {
            fontSize: 12,
            lineHeight: 16,
            align: 'center',
            width: max + 20,
            padding: [15, 0, 0, 0]
          },
          b: {
            fontSize: 14,
            lineHeight: 20,
            fontFamily: 'iosevka-extralight',
            align: 'center',
            width: max + 20,
            fontWeight: 'bold'
          },
          bb: {
            fontSize: 14,
            lineHeight: 20,
            fontFamily: 'iosevka-extralight',
            align: 'center',
            width: max + 20,
            fontWeight: 'bold',
            padding: [15, 0, 0, 0]
          }
        }
      }
    }
  }

  static getLabelLine (params) {
    let nameLength = (params.name.length > 10 ? (params.name.length - 5) : params.name.length) * 15  // 超过10个字符的名字要折行 需要减掉5个字符
    let valueLength = tool.mumberTransform(params.value).length * 8
    let max = Math.max(nameLength, valueLength)
    return {
      normal: {
        // length: 10,
        length2: max + 20
      }
    }
  }

  static getConfig () {
    return {
      title: [{
        text: '',
        left: '49%',
        top: '45%',
        textAlign: 'center',
        textBaseline: 'middle',
        textStyle: {
          color: '#999',
          fontWeight: 'bold',
          fontSize: 16
        }
      }, {
        text: '',
        left: '49%',
        top: '51%',
        textAlign: 'center',
        textBaseline: 'middle',
        textStyle: {
          color: '#666',
          fontWeight: 'bold',
          fontFamily: 'iosevka-extralight',
          fontSize: 14
        }
      }, {
        text: '条数据',
        left: '49%',
        top: '56%',
        textAlign: 'center',
        textBaseline: 'middle',
        textStyle: {
          color: '#999',
          fontWeight: 'normal',
          fontSize: 12
        }
      }],
      color: ['#66CC33', '#9933FF', '#4499EE', '#F4AD26', '#E64A19'],
      itemStyle: {
        normal: {
          borderColor: '#FFFFFF',
          borderWidth: 2
        }
      },
      tooltip: {
        trigger: 'item',
        // formatter: '{a} <br/>{b}: {c} ({d}%)',
        formatter: function (a) {
          return a.seriesName + '<br/>' + a.data.name + ':' + tool.mumberTransform(a.data.value) + '(' + a.percent + '%)'
        },
        textStyle: {
          fontFamily: 'iosevka-extralight'
        }
      },
      legend: {
        orient: 'vertical',
        show: true,
        x: 'left',
        data: ['视频广告', '百度', '谷歌', '必应']
      },
      series: [
        {
          name: '',
          type: 'pie',
          radius: ['30%', '55%'],
          data: [
            {value: 1353, name: '视频广告', label: EchartPieConfig.getLabel({value: 1353, name: '视频广告'}), labelLine: EchartPieConfig.getLabelLine({value: 1353, name: '视频广告'})},
            {value: 23464, name: '百度', label: EchartPieConfig.getLabel({value: 2344, name: '百度'}), labelLine: EchartPieConfig.getLabelLine({value: 2344, name: '百度'})},
            {value: 2513, name: '谷歌', label: EchartPieConfig.getLabel({value: 2513, name: '谷歌'}), labelLine: EchartPieConfig.getLabelLine({value: 2513, name: '谷歌'})},
            {value: 1474, name: '必应', label: EchartPieConfig.getLabel({value: 1474, name: '必应'}), labelLine: EchartPieConfig.getLabelLine({value: 1474, name: '必应'})}
          ]
        }
      ]
    }
  }
}

/**
 * 折线图配置
 */
export class EchartLineConfig {
  static getConfig () {
    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: [{
          name: '进口数量',
          icon: 'image://../../../../static/ledge-1.png'
        }, {
          name: '进口预测',
          icon: 'image://../../../../static/ledge-2.png'
        }, {
          name: '进口警戒',
          icon: 'image://../../../../static/ledge-3.png'
        }, {
          name: '出口数量',
          icon: 'image://../../../../static/ledge-4.png'
        }, {
          name: '出口预测',
          icon: 'image://../../../../static/ledge-5.png'
        }, {
          name: '出口警戒',
          icon: 'image://../../../../static/ledge-6.png'
        }],
        textStyle: {    // 图例文字的样式
          color: '#B9B9B9',
          fontSize: 12,
          letterSpacing: '0.86px'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
          axisLabel: {
            show: true,
            textStyle: {
              color: '#B9B9B9',
              fontSize: 8.5
            },
            interval: 0
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            textStyle: {
              color: '#B9B9B9',
              fontSize: 12
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#27292A'],
              type: 'dotted'
            }
          }
        }
      ],
      series: [
        {
          name: '进口数量',
          type: 'line',
          stack: '1',
          showSymbol: false,
          smooth: true,
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(2, 212, 236, 0.6)' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(2, 212, 236, 0.1)' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            }
          },
          itemStyle: {
            normal: {
              color: '#02D4EC',
              lineStyle: {
                width: 1,
                shadowColor: 'rgba(2, 212, 236, 0.8)',
                shadowBlur: 20
              }
            }
          },
          data: [90, 100, 115, 145, 167, 200, 245, 278, 360, 350, 321, 311, 367, 254, 218]
        },
        {
          name: '进口预测',
          type: 'line',
          stack: '2',
          showSymbol: false,
          smooth: true,
          itemStyle: {
            normal: {
              color: '#02D4EC',
              lineStyle: {
                width: 1,
                type: 'dashed',  // 'dotted'虚线 'solid'实线
                shadowColor: 'rgba(2, 212, 236, 0.8)'
                // shadowBlur: 20, // 这个参数加了要报错
              }
            }
          },
          data: [120, 125, 133, 134, 110, 150, 250, 258, 350, 340, 350, 358, 400, 334, 250, 220, 180, 160, 120, 90, 86, 70, 60, 55]
        },
        {
          name: '进口警戒',
          type: 'line',
          stack: '3',
          step: 'start',
          showSymbol: false,
          // smooth: true,
          areaStyle: {
            normal: {
              opacity: 0 // 不要背景填充
            }
          },
          itemStyle: {
            normal: {
              color: '#FF4545' // 线条颜色
            }
          },
          data: [220, 220, 220, 220, 220, 220, 220, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 250, 250, 250, 250, 250]
        },
        {
          name: '出口数量',
          type: 'line',
          stack: '4',
          showSymbol: false,
          smooth: true,
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(255, 255, 113, 0.6)' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(255, 255, 113, 0.1)' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            }
          },
          itemStyle: {
            normal: {
              color: '#FFFF71',
              lineStyle: {
                width: 1,
                // type: 'dashed',  // 'dotted'虚线 'solid'实线
                shadowColor: 'rgba(255, 255, 113, 0.8)',
                shadowBlur: 20
              }
            }
          },
          data: [70, 90, 115, 128, 121, 168, 186, 190, 234, 231, 224, 300, 280, 213, 187]
        },
        {
          name: '出口预测',
          type: 'line',
          stack: '5',
          showSymbol: false,
          smooth: true,
          itemStyle: {
            normal: {
              color: '#FFFF71',
              lineStyle: {
                width: 1,
                type: 'dashed',  // 'dotted'虚线 'solid'实线
                shadowColor: 'rgba(255, 255, 113, 0.8)'
              }
            }
          },
          data: [80, 97, 120, 100, 130, 145, 151, 167, 187, 200, 222, 231, 234, 321, 336, 368, 390, 321, 280, 165, 153, 121, 101, 87]
        },
        {
          name: '出口警戒',
          type: 'line',
          stack: '6',
          showSymbol: false,
          step: 'last',
          // smooth: true,
          areaStyle: {
            normal: {
              opacity: 0 // 不要背景填充
            }
          },
          itemStyle: {
            normal: {
              color: '#DF45FF' // 线条颜色
            }
          },
          data: [180, 180, 180, 180, 180, 180, 180, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 200, 200, 200, 200, 200]
        }
      ]
    }
  }
}
