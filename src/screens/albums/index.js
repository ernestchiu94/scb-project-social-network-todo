import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Fullscreen } from '@containers';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import type { ScreenProps } from '@config/types';
import styles from './style';


class AlbumsScreen extends Component<ScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <Fullscreen verticalCenter>
          <Text>albums</Text>
        </Fullscreen>
      </View>
    )
  }
}

const mapStateToProps = state => ({

});

const LocaleAlbumsScreen = translate(['common', 'submit'], { wait: true })(AlbumsScreen);
export default connect(mapStateToProps)(LocaleAlbumsScreen);
