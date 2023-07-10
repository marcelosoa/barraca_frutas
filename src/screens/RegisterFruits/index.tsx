import React, { useState } from "react";
import { Container, Text, ViewContent, TextInput, FruitView, Button, TextButton } from "./styled";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function RegisterFruitScreen() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <Container>
      <ViewContent>
        <Text>Cadastrar Fruta</Text>
        <Ionicons name="close" size={32} />
      </ViewContent>
      <FruitView>
        <Ionicons name="nutrition-outline" size={32} />
        <TextInput placeholder="Nome da Fruta" />
      </FruitView>
      <FruitView>
        <Ionicons name="cash-outline" size={32} />
        <TextInput placeholder="Preço do Kilo" />
      </FruitView>
      <FruitView>
        <Ionicons name="server-outline" size={32} />
        <TextInput placeholder="Quantidade no estoque" />
      </FruitView>
      <FruitView>
        <Ionicons name="people-outline" size={32} />
        <TextInput placeholder="Fornecedor" />
      </FruitView>
      <Button>
        <TextButton>Cadastrar Fruta</TextButton>
      </Button>
    </Container>
  );
}
