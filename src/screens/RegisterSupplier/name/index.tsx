import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Container, ViewName, InputFormView } from "./styled";
import InputFormComponent from "../../../components/InputForm";
import ButtonComponent from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import BreadCrumbsComponent from "../../../components/Router";
import { useDispatch } from "react-redux";
import { addName } from '../../../redux/reducers/suppliersReducer'
import ModalComponent from "../../../components/Modal";
import { propsStack } from "../../../interface/routerinterface";
import isValidName from "../../../utils/isValidName";
import useErrors from "../../../utils/hooks/useErros";

export default function RegisterNameSupplier() {
  const navigation = useNavigation<propsStack>()
  const [isModalVisible, setIsModalVisible] = useState<boolean>()
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const { setError, removeError, getErrorMessageByFieldName } = useErrors();

  const handleNameChange = (value) => {
    setName(value);
    dispatch(addName(value));
    removeError('name');
  };

  const handleOpenModal = () => {
    setIsModalVisible(true)
  }

  const handleSubmitName = () => {
    if (!isValidName(name)) {
      setError({ field: 'name', message: 'Insira um nome válido' })
      return
    }
    navigation.navigate('CPF', {
    name: name
   })
  }

  return (
    <Container>
      <ViewName>
        <Ionicons name="close" size={32} color={"#930000"} onPress={handleOpenModal}/>
        {isModalVisible && (
          <ModalComponent 
            isVisible={isModalVisible}
            text="Cancelar Cadastro"
            contentText="Tem certeza que quer cancelar o cadastro do colaborador?
            Você perderá todas as informações inseridas até aqui"
          />
        )}
      </ViewName>
      <BreadCrumbsComponent />
      <InputFormView>
        <InputFormComponent
          label="Digite o Nome do colaborador"
          onChange={handleNameChange}
          placeholder="Nome"
          value={name}
        />
        <ButtonComponent
          onPress={handleSubmitName}
          label="Próximo"
        />
      </InputFormView>
    </Container>
  );
}

