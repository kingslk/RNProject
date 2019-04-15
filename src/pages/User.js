import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Input, Button } from 'react-native-elements';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageState: 'signIn',
      text: '',
      errorMessage: '',
      errorStatus: false
    };
  }
  seterrorMessageAction = text => {
    this.setState({
      text: text
    });
    if (text === '') {
      this.setState({
        errorMessage: 'Please input your password',
        errorStatus: false
      });
    } else {
      this.setState({
        errorMessage: 'Right',
        errorStatus: true
      });
    }
  };
  buttonAction = () => {
    const { text } = this.state;
    if (text.length < 4) {
      this.setState({
        errorMessage: 'Please input your password',
        errorStatus: false,
        text: ''
      });
    } else {
      this.setState({
        errorMessage: 'Right',
        errorStatus: true,
        text: ''
      });
    }
  };

  changeState = () => {
    const { pageState } = this.state;
    const changeAction = new Map([
      [
        'signIn',
        <View style={{ width: 350 }}>
          <Text style={{ textAlign: 'center', fontSize: 36 }}>Sign In</Text>
          <Input
            placeholder="Please Input Your Email"
            leftIcon={<Icon name="mail" size={20} color="black" />}
            label="Email"
            onChangeText={text => this.seterrorMessageAction(text)}
            errorMessage={this.state.errorMessage}
            errorStyle={
              this.state.errorStatus === false ? styles.error : styles.right
            }
            inputContainerStyle={styles.input_container}
            value={this.state.text}
            // autoFocus={true}
          />
          <Input
            placeholder="Please Input Your PassWord"
            leftIcon={<Icon name="lock1" size={20} color="black" />}
            label="Password"
            onChangeText={text => this.seterrorMessageAction(text)}
            errorMessage=""
            inputContainerStyle={styles.input_container}
          />
          <Text
            style={styles.changestatus_container}
            onPress={() => {
              this.setState({ pageState: 'loginIn' });
            }}
          >
            Login In
          </Text>
          <View style={styles.button_container}>
            <Button
              title="注册"
              onPress={() => {
                this.setState({ pageState: 'loginIn' });
              }}
              buttonStyle={{ width: 320, borderRadius: 10 }}
            />
          </View>
        </View>
      ],
      [
        'loginIn',
        <View style={{ width: 350 }}>
          <Text style={{ textAlign: 'center', fontSize: 36 }}>Login In</Text>
          <Input
            placeholder="Please Input Your Email"
            leftIcon={<Icon name="mail" size={20} color="black" />}
            label="Email"
            onChangeText={text => this.seterrorMessageAction(text)}
            errorMessage={this.state.errorMessage}
            errorStyle={
              this.state.errorStatus === false ? styles.error : styles.right
            }
            inputContainerStyle={styles.input_container}
            value={this.state.text}
          />
          <Input
            placeholder="Please Input Your PassWord"
            leftIcon={<Icon name="lock1" size={20} color="black" />}
            label="Password"
            onChangeText={text => this.seterrorMessageAction(text)}
            errorMessage=""
            inputContainerStyle={styles.input_container}
          />
          <Text
            style={styles.changestatus_container}
            onPress={() => {
              this.setState({ pageState: 'signIn' });
            }}
          >
            Sign In
          </Text>
          <View style={styles.button_container}>
            <Button
              title="登陆"
              onPress={() => this.props.navigation.navigate('Draw')}
              buttonStyle={{ width: 320, borderRadius: 10 }}
            />
          </View>
        </View>
      ]
    ]);
    return changeAction.get(pageState);
  };
  render() {
    return <View style={styles.container}>{this.changeState()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input_container: {
    borderWidth: 1,
    borderRadius: 10
  },
  button_container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  changestatus_container: {
    textAlign: 'right',
    fontSize: 20,
    marginRight: 10
  },
  right: {
    color: 'green'
  },
  error: {
    color: 'red'
  }
});
