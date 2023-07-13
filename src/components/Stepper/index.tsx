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
      id: ""
    };
    dispatch(addSupplier(newSupplier));
    navigation.navigate("Success");
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
      )
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
      )
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
      )
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
      )
    }
  ];

  const steps = contents.map((content, index) => content.label);

  return (
    <Container>
      <ViewName>
        <Ionicons name="close" size={32} />
      </ViewName>
      {steps.slice(0, step + 1).map((stepLabel, index) => (
        <Text key={index} style={{ color: "red" }}>
          {stepLabel} {index < step && ">"}
        </Text>
      ))}

      {contents[step].component}

      {step < contents.length - 1 && (
        <ButtonComponent label="Próximo" onPress={() => setStep(step + 1)} />
      )}
    </Container>
  );
}
