import React, { useEffect } from "react";
import {
  Container,
  Text,
  Button,
  TextButton,
  ViewText,
  SupplierName,
  ContainerSupplier,
  NewSupplierButton,
} from "./styled";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StackNavigationProp } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import SearchComponent from "../../components/InputSearch";
import CardComponent from "../../components/Card";

type StackParamList = {
  Home: undefined;
  Cadastro: undefined;
};

type RouterComponentProps = {
  navigation: StackNavigationProp<StackParamList, any>;
};

export default function SupplierScreen({ navigation }: RouterComponentProps) {
  
  const suppliers = useSelector((state: RootState) => state.supplier);
  return (
    <>
      {suppliers ? (
        <>
        <ContainerSupplier>
          <SearchComponent label="Pesquisar Fornecedor" />
          <CardComponent
            cpf="000.000.000-00"
            name="Marcelo"
            phone="(00) 00000-0000"
          />
        </ContainerSupplier>
        <NewSupplierButton onPress={() => navigation.navigate('Nome')}>
        <SupplierName>
          <Ionicons name="add" size={32}/>
        </SupplierName>
      </NewSupplierButton>
      </>
      ) : (
        <Container>
          <ViewText>
            <Text> Cadastre seu primeiro fornecedor </Text>
          </ViewText>
          <Button onPress={() => navigation.navigate("Nome")}>
            <Ionicons name="add" size={32} color={"#FFFFFF"} />
            <TextButton>Cadastrar Fornecedor</TextButton>
          </Button>
        </Container>
      )}
    </>
  );
}