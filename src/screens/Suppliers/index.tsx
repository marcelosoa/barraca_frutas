import React from "react";
import {
  Container,
  Text,
  Button,
  TextButton,
  ViewText,
  SupplierName,
  ContainerSupplier,
  NewSupplierButton,
  ContentContainer
} from "./styled";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StackNavigationProp } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import SearchComponent from "../../components/InputSearch";
import CardComponent from "../../components/Card";

type StackParamList = {
  Nome: undefined;
  Cadastro: undefined;
  Supplier: undefined
};

type RouterComponentProps = {
  navigation: StackNavigationProp<StackParamList, any>;
};

export default function SuppliersScreen({ navigation }: RouterComponentProps) {
  const suppliers = useSelector((state: RootState) => state.supplier);
  console.log(suppliers)

  return (
    <>
      {suppliers?.suppliers.length > 0 ? (
        <>
          <ContainerSupplier>
            <SearchComponent label="Pesquisar Fornecedor" />
            <ContentContainer onPress={() => navigation.navigate('Supplier')}>
            {suppliers.suppliers.map((supplier) => (
              <CardComponent
                key={supplier.id}
                cpf={supplier.cpf}
                name={supplier.name}
                phone={supplier.phone}
              />
            ))}
            </ContentContainer>
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
