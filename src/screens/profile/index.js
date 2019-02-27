import React, { Component, Fragment } from 'react';
import { View, Text, Alert, ScrollView } from 'react-native';
import { Fullscreen, Separator } from '@containers';
import { Header, ProfileIcon, Field, IconButton } from '@components';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import type { ScreenProps } from '@config/types';
import { clearProfile as clear } from '@redux-actions/profile';
import styles from './style';

class ProfileScreen extends Component<ScreenProps> {

  logout = () => {
    const { clearProfile, navigation: { navigate } } = this.props;

    clearProfile();
    return navigate('login');
  };

  toNextScreen(screenName) {
    const { navigation: { navigate }, profile: { profile } } = this.props;

    switch (screenName) {
      case 'posts':
        return navigate('myPosts', { profile });
      case 'albums':
        return navigate('myAlbums', { profile });
      default:
        return;
    }
  }

  onLogoutPress = () => {
    const { t } = this.props;
    const buttons = [
      {text: t('common:cancel')},
      {text: t('screen:profile:logout:title'), onPress: () => this.logout(), style: 'destructive'}
      ];

    Alert.alert(t('screen:profile:logout:title'), t('screen:profile:logout:desc'), buttons, { cancelable: false } )
  };

  renderContent = () => {
    const { profile: { profile }, t } = this.props;
    const { street, suite, city, zipcode } = profile.address;

    const userAddress = `${suite}, ${street},\n${city},\n${zipcode}`;

    return (
      <Fragment>
        <ProfileIcon size={200} />
          <Fragment>
            <Text style={styles.titleText}>{ profile.name }</Text>
            <Text style={styles.descText}>{ profile.username }</Text>
            <View style={styles.iconContainer}>
              <IconButton icon="note-outline" title={t('screen:profile:posts')} onPress={() => this.toNextScreen('posts')} />
              <IconButton icon="animation-outline" title={t('screen:profile:albums')} onPress={() => this.toNextScreen('albums')} />
            </View>
          </Fragment>
        <Separator style={styles.separator} />
          <ScrollView style={styles.infoContainer} showsVerticalScrollIndicator={false}>
              <Field icon="email-outline" value={profile.email} style={styles.field()} />
              <Field icon="phone" value={profile.phone} style={styles.field()} />
              <Field
                icon="map-marker"
                numberOfLines={3}
                value={userAddress}
                style={styles.field(3)}
              />
              <Field icon="search-web" value={profile.website} style={styles.field()}/>
              <Field icon="office-building" value={profile.company.name} style={styles.field()} />
          </ScrollView>
      </Fragment>
    )
  };

  render() {
    const { profile: { profile } } = this.props;

    return (
      <Fragment>
        <Header onLogout={this.onLogoutPress}/>
        <View style={styles.container}>
          <Fullscreen verticalCenter>
            <View style={styles.contentContainer}>
              { profile && this.renderContent() }
            </View>
          </Fullscreen>
        </View>
      </Fragment>
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
