import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { loadProfile as load } from '@redux-actions/profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput, Button } from '@components';
import type { ModalProps } from '@config/types';
import { validateEmail } from "@utils";
import styles from './style';

class LoginForm extends Component<ModalProps> {
  constructor(props) {
    super(props);

    this.state = {
      email: undefined,
      error: false
    }
  }

  onChangeText(text) {
    this.setState({ email: text, error: false });
  }

  validateForm = () => {
    const { email } = this.state;
    const { onClose, loadProfile } = this.props;

    if (validateEmail(email)) {
      loadProfile({ email });
      return onClose('onSuccess');
    }

    return this.setState({ error: true });
  };

  renderHeader() {
    const { t } = this.props;

    return (
      <View style={styles.headerContainer}>
        <Icon name="account-circle-outline" style={styles.headerIcon} />
        <Text style={styles.headerTitle}>{t('form:login:title')}</Text>
        <Text style={styles.headerText}>{t('form:login:desc')}</Text>
      </View>
    )
  }

  render() {
    const { email, error } = this.state;
    const { t } = this.props;

    return (
      <View>
        { this.renderHeader() }
        <TextInput
          value={email}
          placeholder={t('form:login:email')}
          onChangeText={text => this.onChangeText(text)}
          onSubmitEditing={this.validateForm}
          blurOnSubmit={false}
          autoCapitalize="none"
          type="email"
          error={error}
          errorText={t('form:login:error')}
        />
        <Button
          title={t('common:submit')}
          style={styles.button}
          onPress={this.validateForm}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

const mapDispatchToProps = dispatch => ({
  loadProfile: payload => dispatch(load(payload))
});

const LocaleLoginForm =  translate('form', { wait: true })(LoginForm);
export default connect(mapStateToProps, mapDispatchToProps)(LocaleLoginForm);
