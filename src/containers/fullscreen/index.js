import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import styles from './style';

interface Props {
  children: any
}

export default class Fullscreen extends Component<Props> {
  render() {
    const { children } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        { children }
      </SafeAreaView>
    )
  }
}
