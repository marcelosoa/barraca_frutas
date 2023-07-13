import React, { useState } from "react";
import InputFormComponent from "../InputForm";
import { Container, ViewName, Text, InputFormView } from "./styled";
import Ionicons from "@expo/vector-icons/Ionicons";
import ButtonComponent from "../Button";
import { Supplier } from "../../interface/SupplierInterface";
import { addSupplier } from "../../redux/reducers/suppliersReducer";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../interface/routerinterface";
import { useDispatch } from "react-redux";
import { View } from "react-native";

interface SupplierData {
  name: string;
  cpf: string;
  phone: string;
  fruits?: string[];
}

const Data: Partial<SupplierData> = {};

export default function App() {
  const navigation = useNavigation<propsStack>();
  const [data, setData] = useState<Partial<SupplierData>>({});
  const [step, setStep] = useState(0);
  const dispatch = useDispatch();

  const handleSaveData = () => {
    const newSupplier: Supplier = {
      name: data.name || "",
      cpf: data.cpf || "",
      phone: data.phone || "",
      fruits: data.fruits || [],
      id: "",
    };
    dispatch(addSupplier(newSupplier));
    navigation.navigate("Success");
  };

  const handleStepClick = (index: number) => {
    setStep(index);
  };

  const contents = [
    {
      label: "Nome",
      component: (
        <InputFormView>
          <InputFormComponent
            placeholder="Nome"
            label="Digite o nome do Fornecedor"
            value={data.name || ""}
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
            placeholder="000.000.00-00"
            label="Digite o CPF do colaborador"
            value={data.cpf || ""}
            onChangeText={(cpf) => setData({ ...data, cpf })}
          />
        </InputFormView>
      ),
    },
    {
      label: "Telefone",
      component: (
        <InputFormView>
          <InputFormComponent
            placeholder="(00) 00000-0000"
            label="Digite o Telefone do fornecedor"
            value={data.phone || ""}
            onChangeText={(phone) => setData({ ...data, phone })}
          />
        </InputFormView>
      ),
    },
    {
      label: "Fruta",
      component: (
        <>
          <InputFormView>
            <InputFormComponent
              label="Escolha as frutas que esse fornecedor nos fornece"
              value={data.fruits || ""}
              onChangeText={(fruits) => setData({ ...data, fruits })}
            />
          </InputFormView>
          <ButtonComponent label="Salvar Frutas" onPress={handleSaveData} />
        </>
      ),
    },
  ];

  const steps = contents.map((content) => content.label);
  const currentSteps = steps.slice(0, step + 1);

  return (
    <Container>
      <ViewName>
        <Ionicons name="close" size={32} />
      </ViewName>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {currentSteps.map((stepLabel, index) => (
          <React.Fragment key={index}>
            <Text
              isRed={index === step}
              onPress={() => handleStepClick(index)}
              style={{ marginRight: 10 }}
            >
              {stepLabel}
            </Text>
            {index !== currentSteps.length - 1 && (
              <Ionicons name="chevron-forward" size={24} />
            )}
          </React.Fragment>
        ))}
      </View>
      {contents[step].component}
      {step < contents.length - 1 && (
        <ButtonComponent label="Próximo" onPress={() => setStep(step + 1)} />
      )}
    </Container>
  );
}