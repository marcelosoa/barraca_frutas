import React from 'react'
import { ThemeProvider } from 'styled-components/native';
import defaultTheme from './src/global/styles/default'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts, Poppins_400Regular, Poppins_900Black_Italic} from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading';
import AppRoutes from './src/routes/app.routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
