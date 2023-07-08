import React, { useState, useEffect } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container, ViewName, InputFormView } from './styled'
import InputFormComponent from "../../../components/InputForm";
import ButtonComponent from "../../../components/Button";
import RouterComponent from "../../../components/Router";
import { StackNavigationProp } from '@react-navigation/stack';
import CheckBoxComponent from "../../../components/Checkbox";
import LoaderComponent from "../../../components/Loader";

type StackParamList = {
  Home: undefined;
  Cadastro: undefined;
};

type RouterComponentProps = {
  navigation: StackNavigationProp<StackParamList, any>;
};

export default function RegisterFruitSupplierScreen({ navigation }: RouterComponentProps) {
  const fruits: Option[] = [
    { id: 'banana', label: 'Banana' },
    { id: 'maca', label: 'Maçã' },
    { id: 'laranja', label: 'Laranja' },
    { id: 'abacaxi', label: 'Abacaxi' },
    { id: 'morango', label: 'Morango' },
  ];

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
        />
        <CheckBoxComponent options={fruits} onChange={() => {}} />
        <ButtonComponent 
          onPress={() => navigation.navigate('Success')}
          label="Cadastrar Fornecedor"
        />
      </InputFormView>
    </Container>
  )
}
