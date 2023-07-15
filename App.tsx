import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import defaultTheme from './src/global/default';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AppRoutes from './src/routes/app.routes';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import {GestureHandlerRootView} from "react-native-gesture-handler"


export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf')
  });

  useEffect(() => {
    if (fontsLoaded) {
    }
  }, [fontsLoaded]);

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

  useEffect(() => {
    hideSplashScreen();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  </GestureHandlerRootView>
  );
}
