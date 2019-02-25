import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Fullscreen } from '@containers';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import type { ScreenProps } from '@config/types';
import styles from './style';


class TodosScreen extends Component<ScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <Fullscreen verticalCenter>
          <Text>albums</Text>
          <Text>{ JSON.stringify(this.props.profile) }</Text>
        </Fullscreen>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

const LocaleTodosScreen = translate(['common', 'submit'], { wait: true })(TodosScreen);
export default connect(mapStateToProps)(LocaleTodosScreen);
