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
  console.log(params)
  const [phoneNumber, setPhoneNumber] = useState('');
  const { setError, removeError, getErrorMessageByFieldName } = useErrors();


  // const handleSubmit = () => {
  //   if (!isValidPhone(phoneNumber)) {
  //     setError({ field: 'phone', message: 'Insira um número de telefone válido'})
  //     return;
  //   }
  //   navigation.navigate('Frutas', {
  //     name: params?.params?.name,
  //     cpf: params?.params?.cpf,
  //     phone: phoneNumber,
  //   });
  // };

  return (
    <Container>
      <ViewName>
        <Ionicons name='close' size={32} color='#930000' />
      </ViewName>
      <BreadCrumbsComponent/>
      <InputFormView>
        <InputFormComponent
          errors={getErrorMessageByFieldName('phone')}
          limitCaracter={11}
          label='Digite o número de telefone do colaborador'
          placeholder='(00) 00000-0000'
          onChangeText={(phone) => setPhoneNumber(phone)}
          value={phoneNumber}
        />
        <ButtonComponent onPress={() => navigation.navigate('Frutas', {
          phone: phoneNumber,
          cpf: params.params?.cpf,
          name: params.params?.name
        })} label='Próximo' />
      </InputFormView>
    </Container>
  );
}
