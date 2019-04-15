import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Echarts from 'native-echarts';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';
let { width, height } = Dimensions.get('window');
export default class EchartDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numDataY: ['2', '53', '24', '6', '100', '20', '30'],
      othernumDataY: ['10', '40', '20', '80', '120', '25', '5']
    };
  }
  render() {
    const option = {
      //图形位置样式
      grid: {
        right: 15,
        bottom: 30
      },
      title: {
        text: '访客数量',
        textStyle: {
          color: '#8e8e93',
          fontSize: 14,
          padding: [10, 0, 0, 10]
        },
        top: 0,
        left: 5
      },
      //点击图形某个位置的显示弹框
      tooltip: {
        trigger: 'axis'
      },
      //统计数据的种类切换
      legend: {
        orient: 'vertical',
        data: [
          { name: '访客数量', icon: 'circle' },
          { name: '付款金额', icon: 'circle' }
        ],
        selectedMode: 'multiple',
        backgroundColor: '#fff',
        align: 'left',
        right: 20, //距离右边界20
        top: 5
      },
      toolbox: {
        orient: 'vertical',
        show: true,
        showTitle: true,
        feature: {
          magicType: {
            type: 'bar'
          }
        }
      },
      xAxis: [
        {
          axisTick: {
            show: true,
            alignWithLabel: true
          },
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
      ],
      yAxis: [
        {
          axisTick: {
            show: false,
            alignWithLabel: false
          },
          nameLocation: 'end',
          nameTextStyle: {
            color: '#8e8e93',
            fontSize: 12,
            align: 'right',
            padding: [0, 0, 0, 10],
            left: 10
          },
          interval: 0, //强制分割间隔
          nameGap: 15,
          name: '访客数量(个)',
          offset: -5
        }
      ],
      color: ['#e62129', '#007aff'],
      //数据配置
      series: [
        {
          name: '访客数量',
          type: 'bar',
          data: this.state.numDataY
        },
        {
          name: '付款金额',
          type: 'line',
          data: this.state.othernumDataY
        }
      ]
    };
    return (
      <View>
        <Echarts option={option} height={200} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9'
  },
  echartstyle: {
    height: 50,
    width: 100
  },
  button: {
    backgroundColor: '#d9534f',
    padding: 8,
    borderRadius: 4,
    marginBottom: 20
  }
});
