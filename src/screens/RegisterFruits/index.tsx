import React from "react";
import { Container, Text, ViewName, FruitCards, FruitCardsInput } from "./styled";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function RegisterFruitScreen() {
  return (
    <Container>
      <ViewName>
        <Ionicons name="close" size={32} />
      </ViewName>
      <Text> Cadastrar Fruta </Text>
      <FruitCards>
        <FruitCardsInput>
          Nome da fruta
        </FruitCardsInput>
      </FruitCards>
    </Container>
  );
}
