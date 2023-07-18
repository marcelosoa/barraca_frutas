import React from "react";
import { CardFruitProps } from "../../interface/card_fruits.interface";
import {
  Container,
  ContainerCard,
  Text,
  TextName,
  PriceContainer,
  ViewSupplier,
} from "./styled";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "styled-components";
import { StyleSheet } from "react-native";

export default function CardFruitComponent({
  name,
  price,
  quantity,
  supplier,
  isModalCheck,
  onCardPress,
  isHighlighted,
}: CardFruitProps) {
  const theme = useTheme();
  const isModalOpen = () => {
    onCardPress();
    isModalCheck();
  };

  return (
    <Container style={[styled.inputcard, isHighlighted && styled.highlightedCard]}>
      <ContainerCard>
        <TextName>{name}</TextName>
        <Ionicons
          name="cog-outline"
          size={24}
          color={theme.colors.primary}
          onPress={isModalOpen}
        />
      </ContainerCard>
      <PriceContainer>
        <Ionicons name="cash-outline" size={24} color={"#008C21"} />
        <Text left={3} color="#008C21">
          R${price}
        </Text>
        <Text left={10}>{quantity} em estoque</Text>
      </PriceContainer>
      <ViewSupplier>
        <Ionicons name="people-outline" size={24} color={"#008C21"} />
        <Text left={6}>{supplier}</Text>
      </ViewSupplier>
    </Container>
  );
}

const styled = StyleSheet.create({
  inputcard: {
    marginTop: 24,
    width: "100%",
    flexDirection: "column",
    display: "flex",
    gap: 2,
    padding: 16,
    backgroundColor: "#FFFFFF",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    borderRadius: 8,
  },
  highlightedCard: {
    borderWidth: 1,
    borderColor: "#DA0D1E",
    position: 'relative',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 9998
  },
});
