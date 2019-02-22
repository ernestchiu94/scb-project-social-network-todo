import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './style';

interface Props {
  banner?: any,
  content?: any
}

export default class Hero extends Component<Props> {
  render() {
    const { banner, content } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          { banner }
        </View>
        <View style={styles.content}>
          { content }
        </View>
      </View>
    )
  }
};
