import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './style';

interface Props {
  title: string,
  body: string,
  style?: any
}

export default class Comment extends Component<Props> {
  render() {
    const { title, body, style } = this.props;

    return (
      <View style={[styles.container, style]}>
        <View style={styles.separator}/>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{ title }</Text>
          <Text style={styles.desc}>{ body }</Text>
        </View>
      </View>
    )
  }
}
