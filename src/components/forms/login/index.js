import React, { Component } from 'react';
import { View } from 'react-native';
import { translate } from 'react-i18next';
import { TextInput, Button } from '@components';
import type { ModalProps } from '@config/types';
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
    const { onClose } = this.props;

    onClose();
  };

  render() {
    const { email, error } = this.state;
    const { t } = this.props;

    return (
      <View>
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

export default translate('form', { wait: true })(LoginForm);
