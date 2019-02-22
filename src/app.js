import React, { Component } from 'react';
import { I18nextProvider, translate } from 'react-i18next';
import type { ScreenProps } from '@config/types';
import i18n from './locale/i18n';
import RootStack from './routes';

const WrappedStack = () => (
  <RootStack screenProps={{ t: i18n.getFixedT() }} />
);

const LocaleApp = translate('translation', {
  bindI18n: 'languageChanged',
  bindStore: false
})(WrappedStack);

export default class App extends Component<ScreenProps> {
  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <LocaleApp />
      </I18nextProvider>
    )
  }
}
