import React, { useEffect, useState } from "react";
import InputFormComponent from "../../../components/InputForm";
import CheckBoxComponent from "../../../components/Checkbox";
import ModalComponent from "../../../components/Modal";

import {
  Container,
  ViewName,
  Text,
  InputFormView,
  StyledButtonComponent,
  TextButton,
  TextNextButton,
  TextChekboxStepper,
} from "./styled";
import Ionicons from "@expo/vector-icons/Ionicons";
import ButtonComponent from "../../../components/Button";
import { Supplier } from "../../../interface/supplier.interface";
import { addSupplier } from "../../../redux/reducers/suppliersReducer";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../interface/routerinterface";
import { useDispatch } from "react-redux";
import { View } from "react-native";
import { useTheme } from "styled-components";
interface SupplierData {
  name: string;
  cpf: string;
  phone: string;
  fruits?: string[];
}

const Data: Partial<SupplierData> = {};

export default function App() {
  /**
   * Stepper para navegação do header
   */
  const navigation = useNavigation<propsStack>();
  const [data, setData] = useState<Partial<SupplierData>>({});
  const [step, setStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    name: "",
    cpf: "",
    phone: "",
  });
  const dispatch = useDispatch();
  const theme = useTheme();

  // Adicionar dados ao data para armazenar no async storage

  const handleSaveData = () => {
    const newSupplier: Supplier = {
      name: data.name || "",
      cpf: data.cpf || "",
      phone: data.phone || "",
      fruits: data.fruits || [],
      id: "",
    };
    dispatch(addSupplier(newSupplier));
    navigation.navigate("Success", { supplier: newSupplier });
  };

  // Function para avançar ao proximo Step como Nome -> CPF -> Telefone -> Frutas
  const validateFields = () => {
    const newErrors: { [key: string]: string } = {};

    if (step === 1 && (data.cpf?.length ?? 0) < 14) {
      newErrors.cpf = "Insira um CPF válido";
    } else {
      newErrors.cpf = "";
    }

    if (step === 2 && (data.phone?.length ?? 0) < 14) {
      newErrors.phone = "Insira um número válido";
    } else {
      newErrors.phone = "";
    }

    setErrors(newErrors);
  };

  useEffect(() => {
    validateFields();
  }, [data, step]);

  const handleStepClick = (index: number) => {
    // Etapa pode avançar se a validação estiver correta
    if (Object.values(errors).every((error) => !error)) {
      setStep(index);
    }
  };
  

  // Function para abrir/ Fechar modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleResetRegister = () => {
    navigation.navigate("Suppliers");
  };

  const selectedFruits = [
    { id: 1, label: "Banana" },
    { id: 2, label: "Maçã" },
    { id: 3, label: "Laranja" },
    { id: 4, label: "Abacaxi" },
    { id: 5, label: "Morango" },
    { id: 6, label: "Manga" },
    { id: 7, label: "Uva" },
    { id: 8, label: "Pera" },
    { id: 9, label: "Kiwi" },
    { id: 10, label: "Melancia" },
  ];

  // Frutas -> Select -> Checkbox component
  const handleFruitsChange = (fruits: any) => {
    const selectedFruitLabels = fruits.map((fruit: any) => fruit.label);
    setData((prevData) => ({ ...prevData, fruits: selectedFruitLabels }));
  };

  // Conteúdo da navegação Nome -> CPF -> Telefone -> Frutas -> Cadastro do Fornecedor
  const contents = [
    {
      label: "Nome",
      component: (
        <InputFormView>
          <InputFormComponent
            keyboardType="default"
            placeholder="Nome"
            label="Digite o nome do colaborador"
            value={data.name}
            onChangeText={(name) => setData({ ...data, name })}
          />
        </InputFormView>
      ),
    },
    {
      label: "CPF",
      component: (
        <InputFormView>
          <InputFormComponent
            keyboardType="numeric"
            limitCaracter={14}
            placeholder="000.000.00-00"
            label="Digite o CPF do colaborador"
            value={data.cpf}
            onChangeText={(cpf) => setData({ ...data, cpf })}
            mask={[
              /\d/,
              /\d/,
              /\d/,
              ".",
              /\d/,
              /\d/,
              /\d/,
              ".",
              /\d/,
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/,
            ]}
          />
        </InputFormView>
      ),
    },
    {
      label: "Telefone",
      component: (
        <InputFormView>
          <InputFormComponent
            keyboardType="numeric"
            limitCaracter={15}
            placeholder="(00) 00000-0000"
            label="Digite o Telefone do fornecedor"
            value={data.phone}
            onChangeText={(phone) => setData({ ...data, phone })}
            mask={[
              "(",
              /\d/,
              /\d/,
              ")",
              " ",
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/,
              /\d/,
              /\d/,
            ]}
          />
        </InputFormView>
      ),
    },
    {
      label: "Frutas",
      component: (
        <>
          <InputFormView>
            <TextChekboxStepper>
              Escolha as frutas que esse fornecedor nos fornece
            </TextChekboxStepper>
            <CheckBoxComponent
              options={selectedFruits}
              value={data.fruits}
              onChange={handleFruitsChange}
            />
            <StyledButtonComponent
            onPress={handleSaveData}
          >
            <TextButton>Cadastrar Fornecedor</TextButton>
          </StyledButtonComponent>
          </InputFormView>
        </>
      ),
    },
  ];

  // Conteúdo da navegação para retornar a anterior e/ adicionar um chevron/cor vermelha caso avançe Nome > CPF
  const steps = contents.map((content) => content.label);
  const currentSteps = steps.slice(0, step + 1);

  return (
    <Container>
      <ViewName>
        <Ionicons
          name="close"
          size={36}
          color={theme.colors.primary_dark}
          onPress={handleOpenModal}
        />
        {isModalOpen && (
          <ModalComponent
            onPressButton={handleCloseModal}
            onPressCancelButton={handleResetRegister}
            labelButton="Não"
            labelCancelButton="Sim, cancelar"
            isVisible={isModalOpen}
            text="Cancelar Cadastro"
            contentText="Tem certeza que quer cancelar o cadastro do colaborador? Você
            perderá todas as informações inseridas até aqui"
          />
        )}
      </ViewName>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {currentSteps.map((stepLabel, index) => (
          <React.Fragment key={index}>
            <Text isRed={index === step} onPress={() => handleStepClick(index)}>
              {stepLabel}
            </Text>
            {index !== currentSteps.length - 1 && (
              <Ionicons name="chevron-forward" size={32} />
            )}
          </React.Fragment>
        ))}
      </View>
      {contents[step].component}

      {Object.values(errors).map((error, index) => (
        <Text key={index} style={{ color: "red" }}>
          {error}
        </Text>
      ))}
      {step < contents.length - 1 && (
        <ButtonComponent
          onPress={() => handleStepClick(step + 1)}
        >
          <TextNextButton>Próximo</TextNextButton>
          <Ionicons name="chevron-forward" size={32} color={"#DA0D1E"} />
        </ButtonComponent>
      )}
    </Container>
  );
}
