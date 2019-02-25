import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Fullscreen } from '@containers';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import type { ScreenProps } from '@config/types';
import styles from './style';


class PostsScreen extends Component<ScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <Fullscreen horizontalCenter>
          <Text>Posts</Text>
        </Fullscreen>
      </View>
    )
  }
}

const mapStateToProps = state => ({

});

const LocalePostsScreen = translate(['common', 'submit'], { wait: true })(PostsScreen);
export default connect(mapStateToProps)(LocalePostsScreen);
