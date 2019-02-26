import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Spinner } from '@components';
import Api from '@services/api';
import styles from './style';
import { AVATAR_URL } from "react-native-dotenv";

interface Props {
  style?: any,
  onPress?: () => any,
  album: {}
}

export default class AlbumCard extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      username: undefined,
      photo: [],
      loading: true
    }
  }

  async componentDidMount() {
    const { album: { userId, id } } = this.props;
    const user = await Api.getUserById(userId);
    const photos = await Api.getPhotosByAlbumId(id);
    this.setState({
      username: user[0].username,
      photo:  photos[0],
      loading: false
    });
  }

  renderContent() {
    const { username, photo } = this.state;
    const { style, onPress, album } = this.props;

    return (
      <View style={style}>
        <View style={styles.container}>
          <TouchableOpacity onPress={onPress} >
            <Image source={{ uri: photo.thumbnailUrl }} style={styles.thumbnail} />
            <View style={styles.descContainer} >
              <View style={styles.imageContainer}>
                <Image source={{ uri: `${AVATAR_URL}/150/${username}.png` }} style={styles.profile} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text} ellipsizeMode="tail" numberOfLines={2}>{ album.title }</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  renderEmpty() {
    const { style } = this.props;

    return (
      <View style={style}>
        <View style={[styles.container, styles.align]}>
          <Spinner />
        </View>
      </View>
    )
  }

  render() {
    const { loading } = this.state;

    return loading ? this.renderEmpty() : this.renderContent();
  }
}
