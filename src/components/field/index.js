import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';

interface Props {
  icon: string,
  value: string,
  style?: any,
  numberOfLines?: number
}

export default class Field extends Component<Props> {
  render() {
    const { icon, value, style, numberOfLines } = this.props;

    return (
      <View style={[styles.container, style]}>
        <Icon name={icon} style={styles.icon}/>
        <View style={styles.separator} />
        <Text style={styles.text} numberOfLines={numberOfLines}>{ value }</Text>
      </View>
    )
  }
}
