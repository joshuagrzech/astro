import React from 'react';
import {Animated, Easing, View} from 'react-native';
import LottieView from 'lottie-react-native';

export default class SunIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
    this.componentDidMount = this.componentDidMount.bind(this)
    
  }

  

  componentDidMount() {
    Animated.loop(
      Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    })).start()
  }

  render() {
    return (
        
      <LottieView
        style={{height: '100%', width: '100%'}}
        source={require('./35627-weather-day-clear-sky.json')}
        progress={this.state.progress}
      />
     
    );
  }
}
