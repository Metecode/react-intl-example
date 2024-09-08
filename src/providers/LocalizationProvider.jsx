import React, { useContext } from 'react';
import { IntlProvider } from 'react-intl';
import en from '../translation/en.json';
import tr from '../translation/tr.json';
import { GlobalContext } from '../utils/GlobalContext';

const messages = {
  en,
  tr
};

const LocalizationProvider = ({ children }) => {
  const { locale } = useContext(GlobalContext);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
};

export default LocalizationProvider;
