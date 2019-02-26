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
      loading: true
    }
  }

  async componentDidMount() {
    const list = await Api.getPosts();
    this.setState({ list, loading: false });
  }

  renderItem = ({ item }) => {
    return <Post onPress={() => console.log(true)} post={item} style={styles.post} />
  };

  render() {
    const { list, loading } = this.state;

    return (
      <Fragment>
        <Header/>
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
