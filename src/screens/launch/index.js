import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import type { ScreenProps } from '@config/types';
import styles from './style';

class LaunchScreen extends Component<ScreenProps> {
  componentDidMount() {
    const { profile, navigation: { navigate } } = this.props;
    console.log(profile);
    if (profile.profile === undefined) {
      return navigate('login')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>testing</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps)(LaunchScreen);
