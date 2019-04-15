import React from 'react';
import { Button, View } from 'react-native';
import Echart from '../pages/echarts/EchartDemo';
export default class DrawSecond extends React.Component {
  static navigationOptions = {
    title: '数据展示测试'
  };
  render() {
    return (
      <View>
        <View>
          <Echart />
        </View>
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title="Go back home"
        />
      </View>
    );
  }
}
