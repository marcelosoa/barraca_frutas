import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Container, ViewName, InputFormView } from "./styled";
import InputFormComponent from "../../../components/InputForm";
import ButtonComponent from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import RouterComponent from "../../../components/Router";
import { useDispatch } from "react-redux";
import { addName } from '../../../redux/reducers/suppliersReducer'
import ModalComponent from "../../../components/Modal";
import { useTheme } from "styled-components";

export default function RegisterNameSupplier() {
  const theme = useTheme()
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const handleNameChange = (value) => {
    setName(value);
    dispatch(addName(value));
  };

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  return (
    <Container>
      <ViewName>
        <Ionicons
          name="close"
          size={32}
          color={"#930000"}
          onPress={handleOpenModal}
        />
        {isModalVisible && (
          <ModalComponent
            isVisible={isModalVisible}
            text="Cancelar Cadastro"
            contentText="Tem certeza que quer cancelar o cadastro do colaborador? Você perderá todas as informações inseridas até aqui"
          />
        )}
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
          onPress={() => navigation.navigate("CPF", { name: name })}
          label="Próximo"
        />
      </InputFormView>
    </Container>
  );
}
