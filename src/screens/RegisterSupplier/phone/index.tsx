import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container, ViewName, InputFormView } from './styled';
import InputFormComponent from '../../../components/InputForm';
import ButtonComponent from '../../../components/Button';
import BreadCrumbsComponent from '../../../components/Router';
import isValidPhone from '../../../utils/IsValidPhone';
import useErrors from '../../../utils/hooks/useErros';
import { useDispatch } from 'react-redux';
import { addNumber } from '../../../redux/reducers/suppliersReducer';
import { useNavigation, useRoute } from '@react-navigation/native';
import { propsStack } from '../../../interface/routerinterface';

export default function RegisterPhoneSupplierScreen() {
  const navigation = useNavigation<propsStack>();
  const params = useRoute();
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState('');
  const { setError, removeError, getErrorMessageByFieldName } = useErrors();

  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value);
    dispatch(addNumber(value));
    removeError('phone');
  };

  const handleSubmit = () => {
    if (!isValidPhone(phoneNumber)) {
      setError({ field: 'phone', message: 'Insira um número de telefone válido'})
      return;
    }
    navigation.navigate('Frutas', {
      name: params?.params?.name,
      cpf: params?.params?.cpf,
      phone: phoneNumber,
    });
  };

  return (
    <Container>
      <ViewName>
        <Ionicons name='close' size={32} color='#930000' />
      </ViewName>
      <BreadCrumbsComponent navigation={navigation} />
      <InputFormView>
        <InputFormComponent
          errors={getErrorMessageByFieldName('phone')}
          limitCaracter={11}
          label='Digite o número de telefone do colaborador'
          placeholder='(00) 00000-0000'
          onChange={handlePhoneChange}
          value={phoneNumber}
        />
        <ButtonComponent onPress={handleSubmit} label='Próximo' />
      </InputFormView>
    </Container>
  );
}
