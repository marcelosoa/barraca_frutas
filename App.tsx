import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import defaultTheme from './src/global/styles/default';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen'; // Importe o expo-splash-screen
import AppRoutes from './src/routes/app.routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  useEffect(() => {
    const hideSplashScreen = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      } catch (error) {
        console.warn(error);
      }
    };
    hideSplashScreen();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppRoutes />
    </ThemeProvider>
  );
}
