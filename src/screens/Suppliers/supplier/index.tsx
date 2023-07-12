import React from "react";
import {
  Container,
  TextSupplier,
  ViewContent,
  SupplierView,
  SupplierName,
  SupplierContentView,
  SupplierViewView,
  SupplierTextFruits,
  FruitView,
  Fruits
} from "./styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { propsStack } from "../../../interface/routerinterface";

export default function SupplierScreen() {
  const navigation = useNavigation<propsStack>();
  const suppliers = useSelector((state: RootState) => state.supplier.suppliers);
  const route = useRoute();
  
  const selectedSupplier = suppliers.find(supplier => supplier.id === route.params?.supplierId);
  console.log('FRUTEIRO SELECIONADO', selectedSupplier)

  if (!selectedSupplier) {
    return null;
  }

  return (
    <Container>
      <ViewContent>
        <TextSupplier>Fornecedor</TextSupplier>
        <Ionicons
          name="close"
          size={32}
          onPress={() => navigation.navigate("Fornecedor")}
        />
      </ViewContent>
      <SupplierView>
        <SupplierContentView key={selectedSupplier.id}>
          <SupplierName>{selectedSupplier.name}</SupplierName>
          <SupplierViewView>
            <Ionicons name="person-outline" size={24} />
            <SupplierTextFruits>{selectedSupplier.cpf}</SupplierTextFruits>
          </SupplierViewView>
          <SupplierViewView>
            <Ionicons name="call-outline" size={24} />
            <SupplierTextFruits>{selectedSupplier.phone}</SupplierTextFruits>
          </SupplierViewView>
          <FruitView>
            <Fruits>
              Frutas
            </Fruits>
          </FruitView>
        </SupplierContentView>
      </SupplierView>
    </Container>
  );
}
