import React from "react";
import { Container, Text, ViewName, FruitCards, FruitCardsInput } from "./styled";
import Ionicons from "@expo/vector-icons/Ionicons";
import CardComponent from "../../components/Card";

export default function RegisterFruitScreen() {
  return (
    <Container>
      <ViewName>
        <Ionicons name="close" size={32} />
      </ViewName>
      <Text> Cadastrar Fruta </Text>
      <FruitCards>
        <CardComponent placeholder="Nome da fruta"/>
      </FruitCards>
    </Container>
  );
}
