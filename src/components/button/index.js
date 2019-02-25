import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from './style';

interface Props {
  onPress: () => any,
  onLongPress?: () => any,
  style?: any,
  title: string,
  disabled?: boolean
}

export default class Button extends Component<Props> {
  render() {
    const {
      onPress, onLongPress, style, title, disabled
    } = this.props;

    return (
      <TouchableHighlight
        style={[styles.container, disabled && styles.disabled, style]}
        onPress={onPress}
        onLongPress={onLongPress}
        disabled={disabled}
        underlayColor
      >
        <Text style={styles.text}>{ title.toUpperCase() }</Text>
      </TouchableHighlight>
    )
  }
}
