import React from "react"
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container, ViewName, InputFormView } from './styled'
import InputTextComponent from "../../../components/InputText";
import InputFormComponent from "../../../components/InputForm";
import ButtonComponent from "../../../components/Button";

export default function RegisterFruitSupplierScreen() {
  return (
    <Container>
      <ViewName>
        <Ionicons 
          name="close"
          size={32}
          color={'#930000'}
        />
      </ViewName>
      <InputTextComponent
        label="Frutas"
      />
      <InputFormView>
        <InputFormComponent
          label="Escolha as frutas que esse fornecedor nos fornece"
        />
        <ButtonComponent 
          label="Cadastrar Fornecedor"
        />
      </InputFormView>
    </Container>
  )
}