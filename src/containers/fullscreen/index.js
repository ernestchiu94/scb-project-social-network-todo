import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import styles from './style';

interface Props {
  children: any,
  centerVertical?: boolean,
  centerHorizontal?: boolean
}

export default class Fullscreen extends Component<Props> {
  render() {
    const { children, centerVertical, centerHorizontal } = this.props;

    return (
      <SafeAreaView style={styles.container(centerVertical, centerHorizontal)}>
        { children }
      </SafeAreaView>
    )
  }
}
