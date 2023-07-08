import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container, ViewName, InputFormView } from './styled';
import InputFormComponent from '../../../components/InputForm';
import ButtonComponent from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';
import Breadcrumbs from '../../../components/Router';
import isValidPhone from '../../../utils/validPhone/IsValidPhone';
import useErrors from '../../../hooks/useErros';
import { StackNavigationProp } from '@react-navigation/stack';

type StackParamList = {
  Home: undefined;
  Cadastro: undefined;
};

type RouterComponentProps = {
  navigation: StackNavigationProp<StackParamList, any>;
};

export default function RegisterPhoneSupplierScreen({ navigation }: RouterComponentProps) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const { setError, removeError, getErrorMessageByFieldName } = useErrors();

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
    removeError('phone');
  };

  const validatePhoneNumber = () => {
    const isValid = isValidPhone(phoneNumber);
    if (!isValid) {
      console.log('caiu aqui')
      setError({ field: 'phone', message: 'Insira um telefone válido' });
    } else {
      navigation.navigate('Frutas');
    }
  };

  return (
    <Container>
      <ViewName>
        <Ionicons name='close' size={32} color={'#930000'} />
      </ViewName>
      <Breadcrumbs navigation={navigation}/>
      <InputFormView>
        <InputFormComponent
          errors={getErrorMessageByFieldName('phone')}
          limitCaracter={11}
          label='Digite o número de telefone do colaborador'
          placeholder='(00) 00000-0000'
          onChange={handlePhoneNumberChange}
        />
        <ButtonComponent onPress={validatePhoneNumber} label='Próximo' />
      </InputFormView>
    </Container>
  );
}
