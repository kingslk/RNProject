import React from 'react';
import { Text, View } from 'react-native';
import { Overlay, Button } from 'react-native-elements';
export default class ThreeDetial extends React.Component {
  static navigationOptions = {
    title: '信息确认',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };
  constructor() {
    super();
    this.state = {
      isVisible: false
    };
  }
  showOverlay = () => {
    this.setState({
      isVisible: true
    });
  };
  render() {
    return (
      <View>
        <Button title="全局提示" onPress={this.showOverlay} />

        <Overlay
          isVisible={this.state.isVisible}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          overlayBackgroundColor="red"
          width="auto"
          height="auto"
          onBackdropPress={() => this.setState({ isVisible: false })}
        >
          <Text>Hello from Overlay!</Text>
        </Overlay>
      </View>
    );
  }
}
