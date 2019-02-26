import React, { Component, Fragment } from 'react';
import { Text, View, FlatList, Image, TouchableWithoutFeedback } from 'react-native';
import { Fullscreen, Modal } from '@containers';
import { Header, Spinner } from '@components';
import type { ScreenProps } from '@config/types';
import Api from '@services/api';
import styles from './style';

export default class PhotosScreen extends Component<ScreenProps> {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      list: [],
      showModal: false,
      currentPhoto: {}
    }
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const { id } = navigation.state.params.album;

    const list = await Api.getPhotosByAlbumId(id);
    this.setState({ list, loading: false })
  }

  onBack = () => {
    const { navigation: { goBack } } = this.props;
    return goBack();
  };

  toggleModal(item) {
    const { showModal } = this.state;

    this.setState({
      currentPhoto: showModal ? {} : item,
      showModal: !showModal
    });
  }

  renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <TouchableWithoutFeedback onPress={() => this.toggleModal(item)}>
        <Image source={{ uri: item.url }} style={styles.image} />
      </TouchableWithoutFeedback>
    </View>
  );

  render() {
    const { list, showModal, currentPhoto } = this.state;
    const { loading } = this.props;

    return (
      <Fragment>
        <Header onBack={this.onBack} />
        <View style={styles.container}>
          <Fullscreen>
            { loading ? (
              <Spinner large showText />
            ) : (
              <View>
                <FlatList
                  overScrollMode="always"
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={styles.listContainer}
                  data={list}
                  numColumns={3}
                  extraData={this.state}
                  renderItem={this.renderItem}
                />
                <Modal
                  visible={showModal}
                  onBackdropPress={() => this.toggleModal()}
                  transparent
                >
                  { showModal && (
                    <View style={styles.modalContainer}>
                      <Image source={{ url: currentPhoto.url }} style={styles.largeImage} />
                      <Text style={styles.modalText}>{ currentPhoto.title }</Text>
                    </View>
                  )}
                </Modal>
              </View>
            )}
          </Fullscreen>
        </View>
      </Fragment>
    )
  }
}

