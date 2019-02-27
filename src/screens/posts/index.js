import React, { Component, Fragment } from 'react';
import { View, FlatList } from 'react-native';
import { Fullscreen } from '@containers';
import { Header, Spinner, Post } from '@components';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import type { ScreenProps } from '@config/types';
import Api from '@services/api';
import styles from './style';


class PostsScreen extends Component<ScreenProps> {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      loading: true,
      fromCurrentUser: false
    }
  }

  async componentDidMount() {
    const { navigation } = this.props;
    let list;

    if (navigation.state.params) {
      const { id } = navigation.state.params.profile;
      list = await Api.getPostsByUserId(id);
      this.setState({ fromCurrentUser: true });
    } else {
      list = await Api.getPosts();
    }

    this.setState({ list, loading: false });
  }

  onBack = () => {
    const { navigation: { goBack } } = this.props;
    return goBack();
  };

  toComment(post) {
    const { navigation } = this.props;
    const path = navigation.state.params ? 'myComments' : 'comments';

    return navigation.navigate(path, { post });
  };

  renderItem = ({ item }) => {
    return <Post onPress={() => this.toComment(item)} post={item} style={styles.post} />
  };

  render() {
    const { list, loading, fromCurrentUser } = this.state;

    return (
      <Fragment>
        <Header onBack={fromCurrentUser && this.onBack} />
        <View style={styles.container}>
          <Fullscreen horizontalCenter>
            { loading ? (
              <Spinner large showText />
            ) : (
              <FlatList
                overScrollMode="always"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
                data={list}
                extraData={this.state}
                renderItem={this.renderItem}
              />
            )}
          </Fullscreen>
        </View>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

const LocalePostsScreen = translate(['common', 'submit'], { wait: true })(PostsScreen);
export default connect(mapStateToProps)(LocalePostsScreen);
