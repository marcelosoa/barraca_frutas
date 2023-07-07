import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Container, ViewName, InputFormView } from "./styled";
import InputFormComponent from "../../../components/InputForm";
import ButtonComponent from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import RouterComponent from "../../../components/Router";

export default function RegisterNameSupplier() {

  const navigation = useNavigation()

  return (
    <Container>
      <ViewName>
        <Ionicons 
          name="close" 
          size={32} 
          color={"#930000"} 
        />
      </ViewName>
      <RouterComponent />
      <InputFormView>
        <InputFormComponent 
          label="Digite o Nome do colaborador"
          onChange={() => {}}
          placeholder="Nome"        
        />
        <ButtonComponent
          onPress={() => navigation.navigate('CPF')}
          label="Próximo"        
        />
      </InputFormView>
    </Container>
  );
}
