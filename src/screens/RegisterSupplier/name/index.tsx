import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Container, ViewName, InputFormView } from "./styled";
import InputFormComponent from "../../../components/InputForm";
import ButtonComponent from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import RouterComponent from "../../../components/Router";
import { useDispatch, useSelector } from "react-redux";
import { addName } from '../../../redux/reducers/suppliersReducer'
import { RootState } from "../../../redux/store";

export default function RegisterNameSupplier() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const handleNameChange = (value) => {
    setName(value);
    dispatch(addName(value));
  };

  return (
    <Container>
      <ViewName>
        <Ionicons name="close" size={32} color={"#930000"} />
      </ViewName>
      <RouterComponent />
      <InputFormView>
        <InputFormComponent
          label="Digite o Nome do colaborador"
          onChange={handleNameChange}
          placeholder="Nome"
          value={name}
        />
        <ButtonComponent
          onPress={() => navigation.navigate("CPF", {
            name: name
          })}
          label="Próximo"
        />
      </InputFormView>
    </Container>
  );
}

