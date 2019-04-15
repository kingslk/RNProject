import React from 'react';
import { FlatList, View, RefreshControl, StyleSheet ,Text} from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import List from '../data/listdata';
export default class HomeDetail extends React.Component {
  // static navigationOptions = {
  //   title: 'Home',
  //   headerRight: <Button title="打开抽屉" onPress={() => { }} />
  // };
  constructor(props) {
    super(props);
    {
      this.state = {
        refreshing: false,
        buttonStatus: false
      };
    }
  }
  keyExtractor = (item, index) => index.toString();
  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      leftAvatar={{ source: { uri: item.avatar_url } }}
    />
  );
  _onRefresh = () => {
    this.setState({ refreshing: true });
    fetch('https://www.baidu.com/').then(() => {
      this.setState({
        refreshing: false
      });
    });
  };
  navgationAction = () => {
    this.setState({
      buttonStatus: true
    });
    fetch('https://www.baidu.com/').then(() => {
      this.props.navigation.navigate('Mine');
      this.setState({
        buttonStatus: false
      });
    });
  };
  render() {
    return (
      <View>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={List}
          renderItem={this.renderItem}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
          // style={styles.flatListStyles}
          ListHeaderComponent={
            <Text style={{ textAlign: 'center' }}>This is a List</Text>
          }
          ListFooterComponent={
            <Button
              title="Go to Mine"
              type="outline"
              onPress={this.navgationAction}
              loading={this.state.buttonStatus}
            />
          }
        />
      </View>
    );
  }
}
// const styles = StyleSheet.create({
//   flatListStyles: {
//     height: 500
//   }
// });
