'use client';

import React, { createContext, useEffect, useRef, useState } from 'react';
const ThemeContext = createContext();

const themes = {
  DEFAULT: 'default',
  DARK: 'dark',
  LIGHT: 'light',
};

const ThemeProvider = ({ children }) => {
  const [theme, setNewTheme] = useState(themes.DEFAULT);

  const setTheme = (theme) => {
    localStorage.setItem('theme', theme);
    setNewTheme(theme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setNewTheme(storedTheme);
    }
  });

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

const withTheme = (Child) => (props) => (
  <ThemeContext.Consumer>{(context) => <Child {...props} {...context} />}</ThemeContext.Consumer>
);

export { themes, withTheme, ThemeProvider };
