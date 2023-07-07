import React from 'react'
import { ThemeProvider } from 'styled-components/native';
import defaultTheme from './src/global/styles/default'
import { NavigationContainer } from '@react-navigation/native'
import AppRoutes from './src/routes/app.routes';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}

