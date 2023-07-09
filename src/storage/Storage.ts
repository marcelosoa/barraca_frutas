import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveState = async (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    await AsyncStorage.setItem('state', serializedState)
  } catch (error) {
    console.log('Error ao salvar state', error)
  }
};

export const loadState = async () => {
  try {
    const serializedState = await AsyncStorage.getItem('state')
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.log('Erro ao carregar estados', error)
    return undefined
  } 
}