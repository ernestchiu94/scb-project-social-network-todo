import React, { Component, Fragment } from 'react';
import { View, Text, StatusBar } from 'react-native';
import Video from 'react-native-video';
import { translate } from 'react-i18next';
import { Fullscreen, Hero, Modal } from '@containers';
import { Login } from '@forms';
import { Button } from '@components';
import type { ScreenProps } from '@config/types';
import styles from './style';
import video from '@assets/login_background.mp4';

class LoginScreen extends Component<ScreenProps> {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }
  }

  toggleModal = response => {
    const { showModal } = this.state;
    const { navigation: { navigate } } = this.props;

    this.setState({ showModal: !showModal });
    if (response === 'onSuccess') {
      navigate('app');
    }
  };

  renderContent() {
    const { t } = this.props;

    return (
      <View style={styles.contentContainer}>
        <Text style={styles.text}>{t('screen:login:desc')}</Text>
        <Button style={styles.button} onPress={this.toggleModal} title={t('common:login')} />
      </View>
    )
  }

  renderBackground() {
    return (
      <Video source={video} style={styles.video} resizeMode="cover" repeat muted/>
    )
  }

  render() {
    const { showModal } = this.state;

    return (
      <Fragment>
        { this.renderBackground() }
        <Fullscreen>
          <StatusBar barStyle="light-content" />
          <Hero content={this.renderContent()}/>
          <Modal visible={showModal} onBackdropPress={this.toggleModal}>
            <Login onClose={this.toggleModal} />
          </Modal>
        </Fullscreen>
      </Fragment>
    )
  }
}

export default translate(['screen', 'common'], { wait: true })(LoginScreen);
