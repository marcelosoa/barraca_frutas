import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container, ViewName, InputFormView } from './styled';
import InputFormComponent from '../../../components/InputForm';
import ButtonComponent from '../../../components/Button';
import RouterComponent from '../../../components/Router';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { Supplier, SupplierState } from '../../../interface/SupplierInterface';
import { addName, addSupplier } from '../../../redux/reducers/suppliersReducer';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../../../redux/store';

type StackParamList = {
  Home: undefined;
  Cadastro: undefined;
};

type RouterComponentProps = {
  navigation: StackNavigationProp<StackParamList, any>;
};

export default function RegisterFruitSupplierScreen({ navigation }: RouterComponentProps) {
  const dispatch = useDispatch();

  const handleSaveDatas = () => {
    const newSupplier: Supplier = {
      id: 0,
      name: 'Emilio',
      cpf: '12366326726',
      phone: '21993794094'
    };
    dispatch(addSupplier(newSupplier));
    navigation.navigate('Success');
  };

  return (
    <Container>
      <ViewName>
        <Ionicons name="close" size={32} color={'#930000'} />
      </ViewName>
      <RouterComponent navigation={navigation} />
      <InputFormView>
        <InputFormComponent label="Escolha as frutas que esse fornecedor nos fornece" value="Morae" />
        <ButtonComponent onPress={handleSaveDatas} label="Cadastrar Fornecedor" />
      </InputFormView>
    </Container>
  );
}
