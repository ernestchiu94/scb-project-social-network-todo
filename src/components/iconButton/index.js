import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';

interface Props {
  icon: string,
  title: string,
  onPress: () => any,
  style: any
}

export default class IconButton extends Component<Props> {
  render() {
    const { icon, title, style, onPress } = this.props;

    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
          <Icon name={icon} style={styles.icon} />
          <Text style={styles.text}>{ title }</Text>
        </TouchableOpacity>
    )
  }
}
