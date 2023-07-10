import React from "react";
import {
  Container,
  TextSupplier,
  ViewContent,
} from "./styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StackNavigationProp } from "@react-navigation/stack";

type StackParamList = {
  Nome: undefined;
  Cadastro: undefined;
  Supplier: undefined
  Fornecedor: undefined
}

type RouterComponentProps = {
  navigation: StackNavigationProp<StackParamList, any>;
};


export default function SupplierScreen({ navigation }: RouterComponentProps ) {
  const suppliers = useSelector((state: RootState) => state.supplier);

  return (
    <Container>
      <ViewContent>
        <TextSupplier>Fornecedor</TextSupplier>
        <Ionicons name="close" size={32} onPress={() => navigation.navigate('Fornecedor')}/>
      </ViewContent>
    </Container>
  );
}