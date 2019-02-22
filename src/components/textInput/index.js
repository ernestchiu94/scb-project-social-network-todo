import React, { Component, Fragment } from 'react';
import { TextInput as Input, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLOR } from '@styles/constants';
import styles from './style';

interface Props {
  ref?: () => any,
  style?: any,
  onSubmitEditing?: () => any,
  blurOnSubmit?: boolean,
  onChangeText: () => any,
  value: string,
  placeholder?: string,
  autoCapitalize?: string,
  type?: string,
  focus?: boolean,
  error?: boolean,
  errorText?: string
}

export default class TextINput extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: false,
      keyboardType: 'default',
      icon: null
    }
  }

  componentDidMount() {
    const { type } = this.props;

    switch (type) {
      case 'email':
        this.setState({keyboardType: 'email-address', icon: 'email-outline'});
        break;
      case 'name':
        this.setState({icon: 'account-outline'});
      default:
        break
    }
  }

  onFocus = () => {
    const { type } = this.props;

    switch(type) {
      case 'email':
        return this.setState({ isFocused: true, icon: 'email' });
      case 'name':
        return this.setState({ isFocused: true, icon: 'account' });
      default:
        return this.setState({ isFocused: true });
    }
  };

  onBlur = () => {
    const { type } = this.props;

    switch(type) {
      case 'email':
        return this.setState({ isFocused: false, icon: 'email-outline' });
      case 'name':
        return this.setState({ isFocused: false, icon: 'account-outline' });
      default:
        return this.setState({ isFocused: false });
    }
  };

  focus() {
    this.refs.textInput.focus();
  }

  render() {
    const { isFocused, keyboardType, icon } = this.state;
    const {
      style, onSubmitEditing, blurOnSubmit, onChangeText, error,
      value, placeholder, autoCapitalize, type, focus, errorText
    } = this.props;

    return (
      <Fragment>
        { error && <Text style={styles.errorDescription}>{ errorText }</Text> }
        <View style={[styles.inputContainer, isFocused && styles.highlight, error && styles.error, style]}>
          <Icon
            name={error ? 'alert-circle' : icon}
            style={[styles.icon, !isFocused && styles.iconHighlight, error && styles.textError]}
          />
          <Input
            ref="textInput"
            focus={focus}
            style={[styles.textInput, error && styles.textError]}
            placeholderTextColor={error ? COLOR.OFFWHITE : COLOR.LIGHTGREY}
            onSubmitEditing={onSubmitEditing}
            blurOnSubmit={blurOnSubmit}
            onChangeText={onChangeText}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            value={value}
            placeholder={placeholder}
            autoCapitalize={autoCapitalize}
            autoComplete={type}
            textContentType={type}
            keyboardType={keyboardType}
            autoCorrect={false}
            underlineColorAndroid={COLOR.TRANSPARENT.HEX}
            clearButtonMode
            enablesReturnKeyAutomatically
          />
        </View>
      </Fragment>
    )
  }
}
