import React, { Component, Fragment } from 'react';
import { View, FlatList, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Fullscreen } from '@containers';
import { TodoCard, Header, Spinner } from '@components';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import Api from '@services/api';
import type { ScreenProps } from '@config/types';
import styles from './style';

class TodosScreen extends Component<ScreenProps> {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      loading: true
    }
  }

  async componentDidMount() {
    const { profile: { id } } = this.props.profile;
    this.loadList(id);
  }

  async componentWillReceiveProps(nextProps) {
    const { profile: { id } } = nextProps.profile;
    this.loadList(id);
  }

  async loadList(id) {
    const result = await Api.getTodos(id);
    this.setState({ list: result, loading: false });
  }

  toggleTodo(index) {
    const { list } = this.state;
    const item = list[index];
    const newList = list;

    item.completed = !item.completed;
    newList[index] = item;
    this.setState({ list: newList });
  }

  renderItem = ({ item, index }) => {
    return (
      <TodoCard
        completed={item.completed}
        onPress={() => this.toggleTodo(index)}
        value={item.title}
        style={styles.card}
      />
    )
  };

  renderContent = () => {
    const { list } = this.state;
    const { t } = this.props;
    console.log(list);

    return (
      <View style={styles.emptyContainer}>
        { list.length > 0 ? (
          <FlatList
            overScrollMode="always"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            data={list}
            extraData={this.state}
            renderItem={this.renderItem}
          />
        ) : (
          <Fragment>
            <Icon name="exclamation" style={styles.icon} />
            <Text style={styles.text}>{ t('screen:todos:empty') }</Text>
          </Fragment>
        )}
      </View>
    )
  };

  render() {
    const { loading } = this.state;

    return (
      <Fragment>
        <Header />
        <View style={styles.container}>
          <Fullscreen verticalCenter>
            { loading ? <Spinner large showText /> : this.renderContent() }
          </Fullscreen>
        </View>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

const LocaleTodosScreen = translate(['common', 'screen'], { wait: true })(TodosScreen);
export default connect(mapStateToProps)(LocaleTodosScreen);
