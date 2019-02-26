import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './style';

interface Props {
  style?: any
}

export default class Separator extends Component<Props> {
  render() {
    const { style } = this.props;

    return <View style={[styles.container, style]} />
  }
}
