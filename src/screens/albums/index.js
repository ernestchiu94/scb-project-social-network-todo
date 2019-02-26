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
      loading: true
    }
  }

  async componentDidMount() {
    const list = await Api.getAlbums();
    this.setState({ list, loading: false });
  }

  toPhoto(album) {
    const { navigation: { navigate } } = this.props;
    return navigate('photos', { album });
  };

  renderItem = ({ item }) => {
    return <AlbumCard album={item} style={styles.card} onPress={() => this.toPhoto(item)} />;
  };

  render() {
    const { list, loading } = this.state;

    return (
      <Fragment>
        <Header />
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
