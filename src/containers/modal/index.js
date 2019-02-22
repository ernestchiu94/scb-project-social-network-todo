import React, { Component } from 'react';
import {
  Modal as ModalView,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View
} from 'react-native';
import styles from './style';

interface Props {
  children: any,
  visible: boolean,
  onBackdropPress?: () => any
}

export default class Modal extends Component<Props> {
  render() {
    const { children, visible, onBackdropPress } = this.props;

    return (
      <ModalView
        animationType="fade"
        visible={visible}
        onRequestClose={onBackdropPress}
        transparent
      >
        <TouchableOpacity style={styles.container} activeOpacity={1} onPressoOut={onBackdropPress}>
          <ScrollView contentContainerStyle={styles.contentContainer} directionalLocalEnabled>
            <TouchableWithoutFeedback>
              <View style={styles.content}>
                { children }
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </TouchableOpacity>
      </ModalView>
    )
  }
};
