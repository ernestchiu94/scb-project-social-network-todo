import React, { Component, lazy, Suspense, Fragment } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Alert } from 'react-native';
import { Fullscreen } from '@containers';
import { ProfileIcon } from '@components';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import type { ScreenProps } from '@config/types';
import { clearProfile as clear } from '@redux-actions/profile';
import styles from './style';

const Spinner = lazy(() => import('@components/spinner'));

class ProfileScreen extends Component<ScreenProps> {

  logout = () => {
    const { clearProfile, navigation: { navigate } } = this.props;

    clearProfile();
    return navigate('login');
  };

  onLogoutPress = () => {
    const { t } = this.props;
    const buttons = [
      {text: t('common:cancel')},
      {text: t('screen:profile:logout:title'), onPress: () => this.logout(), style: 'destructive'}
      ];

    Alert.alert(t('screen:profile:logout:title'), t('screen:profile:logout:desc'), buttons, { cancelable: false } )
  };

  renderSpinner = () => {
    return <Spinner showText large />
  };

  renderHeader = () => {
    return (
      <View styles={styles.headerContainer}>
        <Icon name="exit-to-app" style={styles.logoutIcon} onPress={this.onLogoutPress}/>
      </View>
    )
  };

  renderContent = () => {
    return (
      <Fragment>
        <ProfileIcon size={200} />
      </Fragment>
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Fullscreen verticalCenter>

          <Suspense fallback={this.renderSpinner}>
            { this.renderHeader() }
            <View style={styles.contentContainer}>
              { this.renderContent() }
            </View>
          </Suspense>
        </Fullscreen>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

const mapDispatchToProps = dispatch => ({
  clearProfile: () => dispatch(clear())
});

const LocaleProfileScreen = translate(['common', 'screen'], { wait: true })(ProfileScreen);
export default connect(mapStateToProps, mapDispatchToProps)(LocaleProfileScreen);
