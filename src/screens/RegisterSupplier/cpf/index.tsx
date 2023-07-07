import React from 'react'
import { Container, ViewName, InputFormView } from './styled'
import Ionicons from '@expo/vector-icons/Ionicons';
import InputTextComponent from '../../../components/InputText';
import InputFormComponent from '../../../components/InputForm';
import ButtonComponent from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';

export default function RegisterCPFSupplierScreen() {
  const navigation = useNavigation()
  const routeName = navigation.getState()?.routeNames

  function handleNextPage() {
    navigation.navigate('Telefone')
    console.log(routeName)
  }

  return (
    <Container>
      <ViewName>
        <Ionicons
          name='close'
          size={32}
          color={'#930000'}
        />
      </ViewName>
      <InputTextComponent
        label='CPF'
      />
      <InputFormView>
        <InputFormComponent
          label='Digite o CPF do colaborador'
          onChange={() => { }}
          placeholder='000.000.000-00'
        />
        <ButtonComponent
          onPress={handleNextPage}
          label='Próximo' />
      </InputFormView>
    </Container>
  )
}