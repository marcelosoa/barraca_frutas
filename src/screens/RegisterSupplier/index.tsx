import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import InputTextComponent from '../../components/InputText';
import InputFormComponent from '../../components/InputForm'

import { Container, ViewName, InputFormView } from './styled'
import ButtonComponent from '../../components/Button';

export default function RegisterSupplierScreen() {
  return (
    <Container>
      <ViewName>
        <Ionicons name='close' size={32} color={'#930000'} />
      </ViewName>
      <InputTextComponent label='Nome' />
      <InputFormView>
        <InputFormComponent label='Digite o nome do colaborador' onChange={() => { }} placeholder='Nome' />
        <ButtonComponent label='Próximo'/>
      </InputFormView>
    </Container>
  )
}