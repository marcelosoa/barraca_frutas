import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container, ViewName, InputFormView } from './styled';
import InputFormComponent from '../../../components/InputForm';
import ButtonComponent from '../../../components/Button';
import RouterComponent from '../../../components/Router';
import isValidPhone from '../../../utils/validPhone/IsValidPhone';
import useErrors from '../../../hooks/useErros';
import { StackNavigationProp } from '@react-navigation/stack';
import { addNumber } from '../../../redux/reducers/suppliersReducer';
import { useDispatch, useSelector } from 'react-redux';

type StackParamList = {
  Home: undefined;
  Cadastro: undefined;
};

type RouterComponentProps = {
  navigation: StackNavigationProp<StackParamList, any>;
};

export default function RegisterPhoneSupplierScreen({ navigation }: RouterComponentProps) { 
  const dispatch = useDispatch()
  const [phoneNumber, setPhoneNumber] = useState('');
  const { setError, removeError, getErrorMessageByFieldName } = useErrors();

  const handleNameChange = (value) => {
    setPhoneNumber(value);
    dispatch(addNumber(value));
  };

  return (
    <Container>
      <ViewName>
        <Ionicons name='close' size={32} color={'#930000'} />
      </ViewName>
      <RouterComponent navigation={navigation}/>
      <InputFormView>
        <InputFormComponent
          errors={getErrorMessageByFieldName('phone')}
          limitCaracter={11}
          label='Digite o número de telefone do colaborador'
          placeholder='(00) 00000-0000'
          onChange={handleNameChange}
          value={phoneNumber}
        />
        <ButtonComponent 
          onPress={() => navigation.navigate('Frutas')} 
          label='Próximo' 
        />
      </InputFormView>
    </Container>
  );
}
