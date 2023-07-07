import React from 'react'
import { Container, ViewName, InputFormView } from './styled'
import Ionicons from '@expo/vector-icons/Ionicons';
import InputTextComponent from '../../../components/InputText';
import InputFormComponent from '../../../components/InputForm';
import ButtonComponent from '../../../components/Button';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function RegisterCPFSupplierScreen() {
  const navigation = useNavigation()


  return (
    <Container>
      <ViewName>
        <Ionicons
          name='close'
          size={32}
          color={'#930000'}
        />
      </ViewName>
      {/* <InputTextComponent
      icon={
        <Ionicons 
          name="chevron-forward-sharp"
          size={20}
        />
        }
        label={paths}
      /> */}
      <Breadcrumbs />
      <InputFormView>
        <InputFormComponent
          label='Digite o CPF do colaborador'
          onChange={() => { }}
          placeholder='000.000.000-00'
        />
        <ButtonComponent
          onPress={() => navigation.navigate('Telefone')}
          label='Próximo' />
      </InputFormView>
    </Container>
  )
}