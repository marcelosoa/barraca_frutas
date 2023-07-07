import React from "react"
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Container, ViewName, InputFormView, } from './styled'
import InputFormComponent from "../../../components/InputForm";
import ButtonComponent from "../../../components/Button";
import Breadcrumbs from "../../../components/Breadcrumbs";


export default function RegisterFruitSupplierScreen() {
  const navigation = useNavigation()

  return (
    <Container>
      <ViewName>
        <Ionicons 
          name="close"
          size={32}
          color={'#930000'}
        />
      </ViewName>
      <Breadcrumbs />
      <InputFormView>
        <InputFormComponent
          label="Escolha as frutas que esse fornecedor nos fornece"
        />
        <ButtonComponent 
          onPress={() => navigation.navigate('Nome')}
          label="Cadastrar Fornecedor"
        />
      </InputFormView>
    </Container>
  )
}