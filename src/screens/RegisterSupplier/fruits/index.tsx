import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container, ViewName, InputFormView } from './styled';
import InputFormComponent from '../../../components/InputForm';
import ButtonComponent from '../../../components/Button';
import RouterComponent from '../../../components/Router';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

type StackParamList = {
  Home: undefined;
  Cadastro: undefined;
};

type RouterComponentProps = {
  navigation: StackNavigationProp<StackParamList, any>;
};

export default function RegisterFruitSupplierScreen({ navigation }: RouterComponentProps) {
  const handleCadastroFornecedor = async () => {
    const supplierData = { fruits: selectedFruits };
    try {
      await AsyncStorage.setItem('supplierData', JSON.stringify(supplierData));
      navigation.navigate('Success');
    } catch (error) {
      console.log('Error saving supplier data:', error);
    }
  };

  return (
    <Container>
      <ViewName>
        <Ionicons 
          name="close"
          size={32}
          color={'#930000'}
        />
      </ViewName>
      <RouterComponent navigation={navigation}/>
      <InputFormView>
        <InputFormComponent
          label="Escolha as frutas que esse fornecedor nos fornece"
          value='Morae'
        />
        <ButtonComponent 
          onPress={handleCadastroFornecedor}
          label="Cadastrar Fornecedor"
        />
      </InputFormView>
    </Container>
  );
}
