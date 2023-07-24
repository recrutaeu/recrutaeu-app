'use client';

import React, { createContext, useState } from 'react';
const ThemeContext = createContext();

const themes = {
  DEFAULT: 'default',
  DARK: 'dark',
  LIGHT: 'light',
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.DEFAULT);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

const withTheme = (Child) => (props) => (
  <ThemeContext.Consumer>{(context) => <Child {...props} {...context} />}</ThemeContext.Consumer>
);

export { themes, withTheme, ThemeProvider };
