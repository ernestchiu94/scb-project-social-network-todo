import React, { Component, Fragment } from 'react';
import { View, FlatList } from 'react-native';
import { Fullscreen } from '@containers';
import { Header, Spinner, AlbumCard } from '@components';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import Api from '@services/api';
import type { ScreenProps } from '@config/types';
import styles from './style';


class AlbumsScreen extends Component<ScreenProps> {
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
      list = await Api.getAlbumsByUserId(id);
      this.setState({ fromCurrentUser: true });
    } else {
      list = await Api.getAlbums();
    }

    this.setState({ list, loading: false });
  }

  onBack = () => {
    const { navigation: { goBack } } = this.props;
    return goBack();
  };

  toPhoto(album) {
    const { navigation } = this.props;
    const path = navigation.state.params ? 'myPhotos' : 'photos';

    return navigation.navigate(path, { album });
  };

  renderItem = ({ item }) => {
    return <AlbumCard album={item} style={styles.card} onPress={() => this.toPhoto(item)} />;
  };

  render() {
    const { list, loading, fromCurrentUser } = this.state;

    return (
      <Fragment>
        <Header onBack={fromCurrentUser && this.onBack} />
        <View style={styles.container}>
          <Fullscreen verticalCenter>
            <View style={styles.contentContainer}>
              { loading ? (
                <Spinner large showText />
              ) : (
                <FlatList
                  overScrollMode="always"
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={styles.listContainer}
                  data={list}
                  numColumns={2}
                  extraData={this.state}
                  renderItem={this.renderItem}
                />
              )}
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

const LocaleAlbumsScreen = translate(['common', 'submit'], { wait: true })(AlbumsScreen);
export default connect(mapStateToProps)(LocaleAlbumsScreen);
