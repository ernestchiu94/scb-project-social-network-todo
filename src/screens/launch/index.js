import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import type { ScreenProps } from '@config/types';
import styles from './style';

class LaunchScreen extends Component<ScreenProps> {
  componentDidMount() {
    const { userProfile: { profile }, navigation: { navigate } } = this.props;
    console.log(profile);
    return navigate(profile === undefined ? 'login' : 'todos');
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
  userProfile: state.profile
});

export default connect(mapStateToProps)(LaunchScreen);
