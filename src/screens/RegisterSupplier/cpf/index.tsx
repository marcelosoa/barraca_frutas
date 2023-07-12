import React, { useState } from 'react';
import { Container, ViewName, InputFormView } from './styled';
import InputFormComponent from '../../../components/InputForm';
import ButtonComponent from '../../../components/Button';
import BreadCrumbsComponent from '../../../components/Router';
import Ionicons from '@expo/vector-icons/Ionicons';
import isValidCPF from '../../../utils/isValidCPF';
import useErrors from '../../../utils/hooks/useErros';
import { useDispatch } from 'react-redux';
import { addCPF } from '../../../redux/reducers/suppliersReducer';
import { useNavigation, useRoute } from '@react-navigation/native';
import { propsStack } from '../../../interface/routerinterface';

export default function RegisterCPFSupplierScreen() {
  const navigation = useNavigation<propsStack>();
  const params = useRoute();
  const dispatch = useDispatch();
  const [cpf, setCPF] = useState('');
  const { setError, removeError, getErrorMessageByFieldName } = useErrors();

  const handleCPFChange = (value: string) => {
    setCPF(value);
    dispatch(addCPF(value));
    removeError('cpf');
  };

  const handleSubmit = () => {
    if (!isValidCPF(cpf)) {
      setError({field: 'cpf', message: 'Insira um CPF válido'});
      return;
    }
    navigation.navigate('Telefone', {
      name: params?.params?.name,
      cpf: cpf,
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
          errors={getErrorMessageByFieldName('cpf')}
          limitCaracter={11}
          label='Digite o CPF do colaborador'
          onChange={handleCPFChange}
          placeholder='000.000.000-00'
          value={cpf}
        />
        <ButtonComponent onPress={handleSubmit} label='Próximo' />
      </InputFormView>
    </Container>
  );
}
