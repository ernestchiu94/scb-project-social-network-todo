import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { translate } from 'react-i18next';
import type { ScreenProps } from '@config/types';
import styles from './style';

class PhotosScreen extends Component<ScreenProps> {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }
  }

  render() {
    return (
      <View>
        <Text>hi</Text>
      </View>
    )
  }
}

export default translate(['common', 'screen'], { wait: true })(PhotosScreen);
