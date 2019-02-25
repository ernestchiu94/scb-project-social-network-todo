import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AVATAR_URL } from 'react-native-dotenv';
import styles from './style';

interface Props {
  size: number,
  style?: any
}

class ProfileIcon extends Component<Props> {
  renderIcon() {
    const { size, style, profile: { profile: { username } } } = this.props;

    return (
      <View style={[styles.container(size), style]}>
        <Image source={{ uri: `${AVATAR_URL}/${size}/${username}.png`}} style={styles.image(size)} />
      </View>
    );
  }

  renderEmpty() {
    const { size, style } = this.props;

    return <Icon name="account-circle-outline" style={[styles.icon(size), style]} />
  }

  render() {
    const { profile: { profile } } = this.props;
    return profile ? this.renderIcon() : this.renderEmpty();
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps)(ProfileIcon);
