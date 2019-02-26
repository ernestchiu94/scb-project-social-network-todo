import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';

interface Props {
  style?: any,
  value: string,
  completed: boolean,
  onPress: () => any
}

export default class TodoCard extends Component<Props> {
  render() {
    const { style, value, completed, onPress } = this.props;
    const icon = completed ? 'checkbox-marked-circle-outline' : 'checkbox-blank-circle-outline';

    return (
      <TouchableHighlight
        onPress={onPress}
        underlayColor
      >
        <View style={[styles.container, style]}>
          <View style={styles.checkContainer}>
            <Icon name={icon} style={styles.icon(completed)}/>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{ value }</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}
