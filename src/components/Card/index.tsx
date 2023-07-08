import React from "react";
import { Container, Cards, CardsInput } from "./styled";
import Ionicons from "@expo/vector-icons/Ionicons";

interface CardProps {
  placeholder: string;
}

export default function CardComponent({ placeholder }: CardProps) {
  return (
    <Container>
      <Cards>
        <CardsInput placeholder={placeholder} underlineColorAndroid='transparent'/>
      </Cards>
    </Container>
  );
}
