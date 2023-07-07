import React from 'react'
import { ThemeProvider } from 'styled-components/native';
import defaultTheme from './src/global/styles/default'
import SupplierScreen from './src/screens/Supplier';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SupplierScreen />
    </ThemeProvider>
  );
}

