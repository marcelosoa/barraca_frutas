import React, { useState } from 'react';
import { Container, ViewName, InputFormView } from './styled';
import Ionicons from '@expo/vector-icons/Ionicons';
import InputFormComponent from '../../../components/InputForm';
import ButtonComponent from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';
import RouterComponent from '../../../components/Router';
import isValidCPF from '../../../utils/validCPF/isValidCPF';
import useErrors from '../../../hooks/useErros';

export default function RegisterCPFSupplierScreen() {
  const navigation = useNavigation();
  const [cpf, setCPF] = useState('');
  const { setError, removeError, getErrorMessageByFieldName } = useErrors();

  

  return (
    <Container>
      <ViewName>
        <Ionicons name='close' size={32} color={'#930000'} />
      </ViewName>
      <RouterComponent />
      <InputFormView>
        <InputFormComponent
        errors={getErrorMessageByFieldName('cpf')}
          limitCaracter={11}
          label='Digite o CPF do colaborador'
          onChange={() => {}}
          placeholder='000.000.000-00'
        />
        <ButtonComponent 
        onPress={() => navigation.navigate('Telefone')} 
        label='Próximo' 
        />
      </InputFormView>
    </Container>
  );
}
