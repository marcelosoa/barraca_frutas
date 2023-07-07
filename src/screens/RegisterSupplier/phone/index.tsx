import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container, ViewName, InputFormView } from './styled'
import InputTextComponent from '../../../components/InputText';
import InputFormComponent from '../../../components/InputForm';
import ButtonComponent from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';

export default function RegisterPhoneSupplierScreen() {
  const navigation = useNavigation()

  function handleNextPage() {
    navigation.navigate('FrutasFornecedor')
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
        label='Telefone'      
      />
      <InputFormView>
        <InputFormComponent 
          label='Digite o número de telefone do colaborador'
          placeholder='(00) 00000-0000'
          onChange={() => {}}        
        />
        <ButtonComponent
          onPress={handleNextPage}
          label='Próximo'
        />
      </InputFormView>
    </Container>
  )
}