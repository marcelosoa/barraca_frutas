import React from 'react';
import { Container, ViewName, InputFormView } from './styled';
import Ionicons from '@expo/vector-icons/Ionicons';
import InputFormComponent from '../../../components/InputForm';
import ButtonComponent from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';
import RouterComponent from '../../../components/Router';

export default function RegisterCPFSupplierScreen() {
  const navigation = useNavigation();

  return (
    <Container>
      <ViewName>
        <Ionicons name='close' size={32} color={'#930000'} />
      </ViewName>
      <RouterComponent />
      <InputFormView>
        <InputFormComponent
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
