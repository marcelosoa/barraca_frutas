import React from "react";
import { Container, Text, Button, TextButton, ViewText } from "./styled";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function SupplierScreen() {
  const navigation = useNavigation();

  function handleNextPage() {
    navigation.navigate("RegisterSupplierScreen");
  }

  return (
    <Container>
      <ViewText>
        <Text> Cadastre seu primeiro fornecedor </Text>
      </ViewText>
      <Button onPress={handleNextPage}>
        <Ionicons name="add" size={32} color={"#FFFFFF"} />
        <TextButton>Cadastrar Fornecedor</TextButton>
      </Button>
    </Container>
  );
}
