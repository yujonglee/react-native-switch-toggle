/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SwitchToggle from 'react-native-switch-toggle';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      switchOn1: false,
      switchOn2: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SwitchToggle
          switchOn={this.state.switchOn1}
          onPress={this.onPress1}
        />
        <SwitchToggle
          containerStyle={{
            marginTop: 16,
            width: 108,
            height: 48,
            borderRadius: 25,
            backgroundColor: '#ccc',
            padding: 5,
          }}
          circleStyle={{
            width: 38,
            height: 38,
            borderRadius: 19,
            backgroundColor: 'white', // rgb(102,134,205)
          }}
          switchOn={this.state.switchOn2}
          onPress={this.onPress2}
          circleColorOff='white'
          circleColorOn='red'
          duration={500}
        />
        <SwitchToggle
          containerStyle={{
            marginTop: 16,
            width: 160,
            height: 65,
            borderRadius: 30,
            padding: 5,
          }}
          backgroundColorOn='#a0e1e5'
          backgroundColorOff='#e5e1e0'
          circleStyle={{
            width: 55,
            height: 55,
            borderRadius: 27.5,
            backgroundColor: 'blue', // rgb(102,134,205)
          }}
          switchOn={this.state.switchOn3}
          onPress={this.onPress3}
          circleColorOff='#ff11ff'
          circleColorOn='green'
          duration={500}
        />
      </View>
    );
  }
  onPress1 = () => {
    this.setState({ switchOn1: !this.state.switchOn1 });
  }
  onPress2 = () => {
    this.setState({ switchOn2: !this.state.switchOn2 });
  }
  onPress3 = () => {
    this.setState({ switchOn3: !this.state.switchOn3 });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
