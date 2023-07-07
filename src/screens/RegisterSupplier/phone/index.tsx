import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container, ViewName, InputFormView } from './styled'
import InputTextComponent from '../../../components/InputText';
import InputFormComponent from '../../../components/InputForm';
import ButtonComponent from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function RegisterPhoneSupplierScreen() {
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
      <Breadcrumbs />
      <InputFormView>
        <InputFormComponent 
          label='Digite o número de telefone do colaborador'
          placeholder='(00) 00000-0000'
          onChange={() => {}}        
        />
        <ButtonComponent
          onPress={() => navigation.navigate('FrutasFornecedor')}
          label='Próximo'
        />
      </InputFormView>
    </Container>
  )
}