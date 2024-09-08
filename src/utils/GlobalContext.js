import React, { createContext, useState } from 'react';

export const GlobalContext = createContext(null);

const GlobalContextProvider = (props) => {
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'tr');

  const changeLocale = (newLocale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale); // Dili localStorage'da saklayabilirsiniz
  };

  return (
    <GlobalContext.Provider
      value={{
        locale,
        changeLocale
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
