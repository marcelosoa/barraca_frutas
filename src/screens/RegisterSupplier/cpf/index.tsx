import React, { useState } from 'react';
// Style
import { Container, ViewName, InputFormView } from './styled';
// Props
import { StackNavigationProp } from '@react-navigation/stack';
// Components
import InputFormComponent from '../../../components/InputForm';
import ButtonComponent from '../../../components/Button';
import RouterComponent from '../../../components/Router';
// Utils
import Ionicons from '@expo/vector-icons/Ionicons';
import isValidCPF from '../../../utils/validCPF/isValidCPF';
// Hooks
import useErrors from '../../../hooks/useErros';

type StackParamList = {
  Home: undefined;
  Cadastro: undefined;
};

type RouterComponentProps = {
  navigation: StackNavigationProp<StackParamList, any>;
};

export default function RegisterCPFSupplierScreen({ navigation }: RouterComponentProps) {
  const [cpf, setCPF] = useState('');
  const { setError, removeError, getErrorMessageByFieldName } = useErrors();

  const handleCPFNumberChange = (value: string) => {
    setCPF(value)
    removeError('cpf')
  }

  const validateCPFNumber = () => {
    const isValid = isValidCPF(cpf)
    if (!isValid) {
      console.log('caiu aqui')
      setError({field: 'cpf', message: 'Insira um CPF válido' })
    } else {
      navigation.navigate("Telefone")
    }
  }

  return (
    <Container>
      <ViewName>
        <Ionicons name='close' size={32} color={'#930000'} />
      </ViewName>
      <RouterComponent navigation={navigation}/>
      <InputFormView>
        <InputFormComponent
        errors={getErrorMessageByFieldName('cpf')}
          limitCaracter={11}
          label='Digite o CPF do colaborador'
          onChange={handleCPFNumberChange}
          placeholder='000.000.000-00'
        />
        <ButtonComponent 
        onPress={validateCPFNumber} 
        label='Próximo' 
        />
      </InputFormView>
    </Container>
  );
}
