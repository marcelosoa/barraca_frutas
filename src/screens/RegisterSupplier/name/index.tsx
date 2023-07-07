import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Container, ViewName, InputFormView } from "./styled";
import InputTextComponent from "../../../components/InputText";
import InputFormComponent from "../../../components/InputForm";
import ButtonComponent from "../../../components/Button";
import { useNavigation, useNavigationState, useRoute } from "@react-navigation/native";
import Breadcrumbs from "../../../components/Breadcrumbs";

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
      {/* <InputTextComponent
      icon={
        <Ionicons 
          name="chevron-forward-sharp"
          size={20}
        />
        }r
        label='Nome'
      /> */}
      <Breadcrumbs />
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
