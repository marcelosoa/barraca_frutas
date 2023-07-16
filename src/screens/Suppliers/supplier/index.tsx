import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  Container,
  TextSupplier,
  ViewContent,
  SupplierView,
  SupplierName,
  SupplierContentView,
  SupplierViewView,
  FruitView,
  Fruits,
  StyledInputMask,
  RenderFruits,
} from "./styled";
import { propsStack } from "../../../interface/routerinterface";

export default function SupplierScreen() {
  const navigation = useNavigation<propsStack>();
  const route = useRoute();
  const { supplierId } = route.params ?? {};
  const suppliers = useSelector((state: RootState) => state.supplier.suppliers);
  const selectedSupplier = suppliers.find((supplier) => supplier.id === supplierId);

  if (!selectedSupplier) {
    return null;
  }

  const handleGoBack = () => {
    navigation.navigate("Suppliers");
  };

  return (
    <Container>
      <ViewContent>
        <TextSupplier>Fornecedor</TextSupplier>
        <Ionicons name="close" size={32} onPress={handleGoBack} />
      </ViewContent>
      <SupplierView>
        <SupplierContentView>
          <SupplierName>{selectedSupplier.name}</SupplierName>
          <SupplierViewView>
            <Ionicons name="person-outline" size={24} />
            <StyledInputMask
              type={"cpf"}
              value={selectedSupplier.cpf}
              editable={false}
            />
          </SupplierViewView>
          <SupplierViewView>
            <Ionicons name="call-outline" size={24} />
            <StyledInputMask
              type={"cel-phone"}
              options={{
                maskType: "BRL",
                withDDD: true,
                dddMask: "(99) ",
              }}
              value={selectedSupplier.phone}
              editable={false}
            />
          </SupplierViewView>
          <FruitView>
            <Fruits type="title">Frutas</Fruits>
            <RenderFruits>
              {selectedSupplier.fruits.map((fruit, index) => (
                <Fruits type="text" key={index}>
                  {fruit}
                </Fruits>
              ))}
            </RenderFruits>
          </FruitView>
        </SupplierContentView>
      </SupplierView>
    </Container>
  );
}
