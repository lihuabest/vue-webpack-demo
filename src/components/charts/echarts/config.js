import tool from '@/tools/_all'

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
