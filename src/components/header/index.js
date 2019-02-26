import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';

interface Props {
  onLogout?: () => any
}

export default class Header extends Component<Props> {
  render() {
    const { onLogout } = this.props;

    return (
      <View style={styles.container}>
        { onLogout &&
        (<Icon name="exit-to-app" style={styles.icon} onPress={onLogout} />
        )}
      </View>
    )
  }
}
