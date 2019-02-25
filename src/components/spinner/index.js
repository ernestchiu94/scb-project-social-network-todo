import React, { Component } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { translate } from 'react-i18next';
import { COLOR } from '@styles/constants';
import styles from './styles';

interface Props {
  large?: boolean,
  showText?: boolean,
  style?: any
}

class Spinner extends Component<Props> {
  render() {
    const { t, large, showText, style } = this.props;

    return (
      <View style={[styles.container, style]}>
        <ActivityIndicator size={large ? "large" : "small"} color={COLOR.DARKGREY}/>
        { showText && <Text style={styles.text}>{t('common:loading')}</Text> }
      </View>
    )
  }
}

export default translate('common', { wait: true })(Spinner);
