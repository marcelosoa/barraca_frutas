import React, { useEffect } from "react";
import {
  Container,
  Text,
  Button,
  TextButton,
  ViewText,
  SupplierCard,
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
import ButtonComponent from "../../components/Button";

type StackParamList = {
  Home: undefined;
  Cadastro: undefined;
};

type RouterComponentProps = {
  navigation: StackNavigationProp<StackParamList, any>;
};

export default function SupplierScreen({ navigation }: RouterComponentProps) {
  const suppliers = useSelector((state: RootState) => state.supplier);
  console.log(suppliers);
  return (
    <>
      {suppliers ? (
        <ContainerSupplier>
          <SearchComponent label="Pesquisar Fornecedor" />
          <CardComponent
            cpf="123"
            name="Marcelo"
            phone="21993794094"
          />
          <NewSupplierButton onPress={() => navigation.navigate('Nome')}>
            <SupplierName>
              +
            </SupplierName>
          </NewSupplierButton>
        </ContainerSupplier>
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

{
  /* <Container>
        <ViewText>
          <Text> Cadastre seu primeiro fornecedor </Text>
        </ViewText>
        <Button onPress={() => navigation.navigate("Nome")}>
          <Ionicons name="add" size={32} color={"#FFFFFF"} />
          <TextButton>Cadastrar Fornecedor</TextButton>
        </Button>
      </Container>
 */
}

//   <ContainerSupplier>
//   <SearchComponent label="Pesquisar Fornecedor" />
//     <CardComponent cpf="12366326726" name="Marcelo Soares" phone="21993794094"/>
// </ContainerSupplier>
