import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Container, ViewName, InputFormView } from "./styled";
import InputTextComponent from "../../../components/InputText";
import InputFormComponent from "../../../components/InputForm";
import ButtonComponent from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function RegisterNameSupplier() {
  const navigation = useNavigation()
  function handleNextPage() {
    navigation.navigate('CPF')
  }
  return (
    <Container>
      <ViewName>
        <Ionicons 
          name="close" 
          size={32} 
          color={"#930000"} 
        />
      </ViewName>
      <InputTextComponent 
        label="Nome" 
      />
      <InputFormView>
        <InputFormComponent 
          label="Digite o Nome do colaborador"
          onChange={() => {}}
          placeholder="Nome"        
        />
        <ButtonComponent
          onPress={handleNextPage}
          label="Próximo"        
        />
      </InputFormView>
    </Container>
  );
}
