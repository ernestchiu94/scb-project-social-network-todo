import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { translate } from 'react-i18next';
import type { ScreenProps } from '@config/types';
import styles from './style';

class CommentsScreen extends Component<ScreenProps> {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }
  }

  render() {
    const { loading } = this.props;

    return (
      <View>
        <Text>hi</Text>
      </View>
    )
  }
}

export default translate(['common', 'screen'], { wait: true })(CommentsScreen);
