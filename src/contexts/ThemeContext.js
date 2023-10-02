'use client';

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
const ThemeContext = createContext();

const themes = {
  DEFAULT: 'default',
  DARK: 'dark',
  LIGHT: 'light',
};

const ThemeProvider = ({ children }) => {
  const [theme, setNewTheme] = useState(themes.DEFAULT);

  const [mounted, setMounted] = React.useState(false);

  const setTheme = (theme) => {
    localStorage.setItem('theme', theme);
    setNewTheme(theme);
  };

  useEffect(() => {
    setMounted(true);

    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setNewTheme(storedTheme);
    }
  }, []);

  const body = (
    <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
  );

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>;
  }

  return body;
};

const withTheme = (Child) => (props) => (
  <ThemeContext.Consumer>{(context) => <Child {...props} {...context} />}</ThemeContext.Consumer>
);

const useTheme = () => {
  return useContext(ThemeContext);
};

export { themes, withTheme, ThemeProvider, useTheme };
