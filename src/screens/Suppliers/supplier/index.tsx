import React from "react";
import {
  Container,
  TextSupplier,
  ViewContent,
  SupplierView,
  SupplierName,
  SupplierContentView,
  SupplierInfosText,
  SupplierFruits,
  SupplierText,
  SupplierFruitsContent,
  SupplierViewView
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


export default function SupplierScreen({ navigation }: RouterComponentProps) {
  const suppliers = useSelector((state: RootState) => state.supplier);

  return (
    <Container>
      <ViewContent>
        <TextSupplier>Fornecedor</TextSupplier>
        <Ionicons name="close" size={32} onPress={() => navigation.navigate('Fornecedor')} />
      </ViewContent>
      <SupplierView>
        {suppliers.suppliers.map((supplier) => (
          <SupplierContentView key={supplier.id}>
            <SupplierName>{supplier.name}</SupplierName>
            <SupplierViewView>
              
            </SupplierViewView>
          </SupplierContentView>
        ))}
      </SupplierView>
    </Container>
  );
}

{/* <SupplierView>
        {suppliers.suppliers.map((supplier) => (
          <SupplierContentView key={supplier.id}>
            <SupplierName>{supplier.name}</SupplierName>
            <SupplierViewView>
            <SupplierInfosText>
                <Ionicons name="person-outline" size={24} />
              {supplier.cpf}
            </SupplierInfosText>
            </SupplierViewView>
            
            <SupplierViewView>
            <SupplierInfosText>
                <Ionicons name="call-outline" size={24} />
              {supplier.phone}
            </SupplierInfosText>
            </SupplierViewView>
            <SupplierFruits>
              <SupplierText>Frutas</SupplierText>
              <SupplierFruitsContent></SupplierFruitsContent>
            </SupplierFruits>
          </SupplierContentView>
        ))}
      </SupplierView> */}