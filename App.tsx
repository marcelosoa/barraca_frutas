import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import defaultTheme from './src/global/default';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AppRoutes from './src/routes/app.routes';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { loadState, saveState } from './src/storage/Storage';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf')
  });

  useEffect(() => {
    const loadData = async () => {
      const persistedState = await loadState();
      store.subscribe(() => {
        saveState(store.getState());
      });
      store.dispatch({ type: 'LOAD_STATE', payload: persistedState });
    };

    if (fontsLoaded) {
      loadData();
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
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
}
