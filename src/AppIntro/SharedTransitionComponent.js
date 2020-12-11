import {
  SharedElement,
  SharedElementTransition,
  nodeFromRef,
} from 'react-native-shared-element';
import * as React from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
  Image,
  SafeAreaView
} from 'react-native';

export class SharedImageSceneOne extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('shared element from scene one rendering');
    console.log(this.props);
    return (
      
        <SharedElement
          style={{flex: 1}}
          onNode={(node) => this.props.setScene1Node(node)}>
          <Image
            style={this.props.style}
            resizeMode={this.props.resizeMode}
            source={this.props.source}
            resizeMethod={this.props.resizeMethod}
            borderRadius={this.props.borderRadius}
          />
        </SharedElement>
      
    );
  }
}

export class SharedImageSceneTwo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      
        <SharedElement onNode={(node) => this.props.setScene2Node(node)}>
          <Image
            style={this.props.style}
            resizeMode={this.props.resizeMode}
            source={this.props.source}
          />
        </SharedElement>
     
    );
  }
}

export default class SharedTransition extends React.Component {
  constructor(props) {
      super(props)
  }
  render() {
    
    
    console.log(Dimensions.get('window'))
    return (
      <>
        <View style={{flex: 1}}>
          <View style={styles.container}>
            <Animated.View
              style={{
                ...StyleSheet.absoluteFillObject,
                transform: [
                  {translateX: Animated.multiply(-200, this.props.progress)},
                ],
              }}>
              {this.props.children[0]}
            </Animated.View>
          </View>
          {/* Scene 2 */}
          {this.props.isScene2Visible ? (
            <Animated.View
              style={{
                ...StyleSheet.absoluteFillObject,
                transform: [
                  {
                    translateX: Animated.multiply(
                      -width,
                      Animated.add(this.props.progress, -1),
                    ),
                  },
                ],
              }}>
              {this.props.children[1]}
            </Animated.View>
          ) : undefined}

          {this.props.isInProgress ? (
            <View style={styles.sharedElementOverlay} pointerEvents="none">
              <SharedElementTransition
                start={{
                  node: this.props.scene1Node,
                  ancestor: this.props.scene1Ancestor,
                }}
                end={{
                  node: this.props.scene2Node,
                  ancestor: this.props.scene2Ancestor,
                }}
                position={this.props.progress}
                animation="move"
                resize="auto"
                align="auto"
              />
            </View>
          ) : undefined}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    ...StyleSheet.absoluteFillObject,
    
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: '100%',
    width: '100%',
  },
  scene2: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#00d8ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image1: {
    resizeMode: 'cover',
    width: 160,
    height: 160,
    // Images & border-radius have quirks in Expo SDK 35/36
    // Uncomment the next line when SDK 37 has been released
    //borderRadius: 80
  },
  image2: {
    resizeMode: 'cover',
    width: 300,
    height: 300,
    borderRadius: 0,
  },
  sharedElementOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
});
