import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';

interface Props {
  onLogout?: () => any,
  onBack?: () => any
}

export default class Header extends Component<Props> {
  render() {
    const { onLogout, onBack } = this.props;

    return (
      <View style={styles.container}>
        { onBack && (
          <Icon name="arrow-left-thick" style={styles.back} onPress={onBack} />
        )}
        { onLogout && (
          <Icon name="exit-to-app" style={styles.logout} onPress={onLogout} />
        )}
      </View>
    )
  }
}
