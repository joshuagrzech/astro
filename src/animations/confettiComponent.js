import React from 'react';
import {Animated, Easing, View} from 'react-native';
import LottieView from 'lottie-react-native';

export default class Confetti extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
    this.componentDidMount = this.componentDidMount.bind(this)
    
  }

  

  componentDidMount() {
    
      Animated.timing(this.state.progress, {
      toValue: 0.99,
      duration: 3000,
      useNativeDriver: true,
    }).start()
  }

  render() {
    return (
      <View style={{height: 1000, width: 1000}}>
      <LottieView
        style={{height: '100%', width: '100%'}}
        source={require('./35875-confetti-on-transparent-background.json')}
        progress={this.state.progress}
      />
      </View>
    );
  }
}
