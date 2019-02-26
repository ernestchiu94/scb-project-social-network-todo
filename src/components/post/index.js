import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Api from '@services/api';
import styles from './style';
import { AVATAR_URL } from "react-native-dotenv";

interface Props {
  onPress?: () => any,
  post: {},
  style?: any,
  disabled?: boolean
}

export default class Post extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      username: undefined
    }
  }

  async componentDidMount() {
    const { post: { userId } } = this.props;
    const user = await Api.getUserById(userId);
    this.setState({ username: user[0].username });
  }

  render() {
    const { username } = this.state;
    const { post, onPress, style, disabled } = this.props;

    return (
      <View style={style}>
        <TouchableOpacity onPress={onPress} style={styles.container} disabled={disabled}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: `${AVATAR_URL}/150/${username}.png` }} style={styles.profile}/>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title} numberOfLines={2}>{ post.title }</Text>
            <Text style={styles.desc} numberOfLines={2}>{ post.body }</Text>
          </View>
          { !disabled && <Icon name="arrow-right-drop-circle" style={styles.icon} /> }
        </TouchableOpacity>
      </View>
    )
  }
}
