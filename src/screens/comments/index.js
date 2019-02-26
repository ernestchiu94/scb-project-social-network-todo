import React, { Component, Fragment } from 'react';
import { View, FlatList } from 'react-native';
import { Header, Spinner, Post, Comment } from '@components';
import { Separator, Fullscreen } from '@containers';
import type { ScreenProps } from '@config/types';
import Api from '@services/api';
import styles from './style';

export default class CommentsScreen extends Component<ScreenProps> {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      loading: true
    }
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const { post: { id } } = navigation.state.params;

    const list = await Api.getCommentsByPostId(id);

    this.setState({ list, loading: false })
  }

  onBack = () => {
    const { navigation: { goBack } } = this.props;
    return goBack();
  };

  renderItem = ({ item: { name, body } }) => <Comment title={name} body={body} />;

  renderEmpty() {
    return (
      <View style={styles.container}>
        <Fullscreen centerVertical centerHorizontal>
          <Spinner showText large />
        </Fullscreen>
      </View>
    )
  }

  renderContent() {
    const { list } = this.state;
    const { navigation } = this.props;
    const { post } = navigation.state.params;

    return (
      <Fragment>
        <Header onBack={this.onBack}/>
        <View style={styles.container}>
          <Fullscreen>
            <View style={styles.contentContainer}>
              <Post disabled post={post} style={styles.post} />
              <Separator style={styles.separator} />
              <View style={styles.commentContainer}>
                <FlatList
                  overScrollMode="always"
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={styles.listContainer}
                  data={list}
                  extraData={this.state}
                  renderItem={this.renderItem}
                />
              </View>
            </View>
          </Fullscreen>
        </View>
      </Fragment>
    )
  }

  render() {
    const { loading } = this.props;

    return loading ? this.renderEmpty() : this.renderContent();
  }
}
