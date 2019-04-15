import React from 'react';
import { Text, View } from 'react-native';
import { ButtonGroup, Button, Input, CheckBox } from 'react-native-elements';
export default class MineDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      pageState: 'mine',
      checked: false,
      sexRadio: 0
    };
  }
  updateIndex = selectedIndex => {
    this.setState({ selectedIndex });
    if (selectedIndex === 0) {
      this.setState({
        pageState: 'mine'
      });
    } else {
      this.setState({
        pageState: 'school'
      });
    }
  };
  selectCheckOne = () => {
    this.setState({
      sexRadio: 1
    });
  };
  selectCheckTwo = () => {
    this.setState({
      sexRadio: 2
    });
  };
  changeState = () => {
    const { pageState, sexRadio } = this.state;
    const changeAction = new Map([
      [
        'mine',
        <View style={{ minHeight: 600 }}>
          <Input
            placeholder="请输入你的姓名"
            leftIcon={{ type: 'font-awesome', name: 'user' }}
          />
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={{ fontSize: 18, lineHeight: 60, paddingLeft: 20 }}>
              请选择你的性别：
            </Text>
            <CheckBox
              title="男"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={sexRadio === 1 ? true : false}
              onPress={this.selectCheckOne}
              containerStyle={{ width: 100 }}
            />
            <CheckBox
              title="女"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={sexRadio === 2 ? true : false}
              onPress={this.selectCheckTwo}
              containerStyle={{ width: 100 }}
            />
          </View>

          <Input
            placeholder="请输入你的手机号"
            leftIcon={{ type: 'antdesign', name: 'mobile1' }}
          />
          <Input
            placeholder="请输入你的银行卡号"
            leftIcon={{ type: 'antdesign', name: 'wallet' }}
          />

          <Button
            title="确认信息"
            onPress={() => this.props.navigation.navigate('Detail')}
            containerStyle={{ padding: 12 }}
          />
        </View>
      ],
      [
        'school',
        <Button
          title="确认信息"
          onPress={() => {
            this.props.navigation.navigate('Detail');
          }}
        />
      ]
    ]);
    return changeAction.get(pageState);
  };
  render() {
    const buttons = ['表单测试', '信息展示测试'];
    const { selectedIndex } = this.state;
    return (
      <View>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 48 }}
        />
        {this.changeState()}
      </View>
    );
  }
}
