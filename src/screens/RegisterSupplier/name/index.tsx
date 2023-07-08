import React, { useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Container, ViewName, InputFormView } from "./styled";
import InputFormComponent from "../../../components/InputForm";
import ButtonComponent from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import RouterComponent from "../../../components/Router";
import { useDispatch, useSelector } from "react-redux";
import { SupplierPropsState } from "../../../interface/SupplierInterface";
import { setName } from "../../../redux/reducers/suppliersReducer";

export default function RegisterNameSupplier() {
  const navigation = useNavigation();

  const { name } = useSelector(
    (state: { supplier: SupplierPropsState }) => state.supplier
  );
  const dispatch = useDispatch();
  return (
    <Container>
      <ViewName>
        <Ionicons name="close" size={32} color={"#930000"} />
      </ViewName>
      <RouterComponent />
      <InputFormView>
        <InputFormComponent
          label="Digite o Nome do colaborador"
          onChange={(value: string) => dispatch(setName(value))}
          placeholder="Nome"
          value={name}
        />
        <ButtonComponent
          onPress={() => navigation.navigate("CPF")}
          label="Próximo"
        />
      </InputFormView>
    </Container>
  );
}
