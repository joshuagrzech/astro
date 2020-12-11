// @flow
import React, {createContext} from 'react';
import {View} from 'react-native';
import {nodeFromRef} from 'react-native-shared-element';
import {SharedElementNode} from 'react-native-shared-element';



// $FlowFixMe
const Context = createContext(undefined);





export class ScreenTransitionContext extends React.Component {
  _sharedElementNodes = {};
  _sharedElementAncestor = undefined;
  state = {
    sharedElementNodes: this._sharedElementNodes,
  };

  render() {
    const {onSharedElementsUpdated, style, ...otherProps} = this.props;
    return (
      <View style={style} collapsable={false} ref={this.onSetRef}>
        <Context.Provider value={this} {...otherProps} />
      </View>
    );
  }

  onSetRef = (ref) => {
    this._sharedElementAncestor = nodeFromRef(ref);
  };

  componentDidUpdate(
    prevProps,
    prevState
  ) {
    if (prevState === this.state) {
      return;
    }
    const {children, onSharedElementsUpdated} = this.props;
    const {sharedElementNodes} = this.state;
    if (onSharedElementsUpdated) {
      onSharedElementsUpdated({
        children,
        ancestor: this._sharedElementAncestor,
        nodes: sharedElementNodes,
      });
    }
  }

  addSharedElement(sharedId, node) {
    // console.log('ScreenTransitionContext.add: ', sharedId);
    const sharedElementNodes = {...this._sharedElementNodes};
    sharedElementNodes[sharedId] = node;
    this._sharedElementNodes = sharedElementNodes;
    this.setState({
      sharedElementNodes,
    });
  }

  removeSharedElement(sharedId, node) {
    // console.log('ScreenTransitionContext.remove: ', sharedId);
    const sharedElementNodes = {...this._sharedElementNodes};
    delete sharedElementNodes[sharedId];
    this._sharedElementNodes = sharedElementNodes;
    this.setState({
      sharedElementNodes,
    });
  }
}

export function withScreenTransitionContext(WrappedComponent) {
  const comp = (props) => {
    return (
      <Context.Consumer>
        {value => (
          <WrappedComponent {...props} screenTransitionContext={value} />
        )}
      </Context.Consumer>
    );
  };
  if (WrappedComponent.propTypes) {
    const propTypes = {
      ...WrappedComponent.propTypes,
    };
    delete propTypes.screenTransitionContext;
    comp.propTypes = propTypes;
  }
  comp.defaultProps = WrappedComponent.defaultProps;
  return comp;
}
