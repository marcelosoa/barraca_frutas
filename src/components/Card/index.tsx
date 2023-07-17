import React from "react";
import { Container, Text, View, StyledTextInputMask } from "./styled";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import { CardComponentProps } from "../../interface/card.component.interface";

export default function CardComponent({ name, cpf, phone }: CardComponentProps) {
  return (
    <Container style={styled.inputCard}>
      <Text type="title">{name}</Text>
      <View>
        <Ionicons name="person-outline" size={32} />
        <StyledTextInputMask
          type={"cpf"}
          value={cpf}
          editable={false}
        />
      </View>
      <View>
        <Ionicons name="call-outline" size={32} />
        <StyledTextInputMask
          type={"cel-phone"}
          options={{
            maskType: "BRL",
            withDDD: true,
            dddMask: "(99)"
          }}
          value={phone}
          editable={false}
        />
      </View>
    </Container>
  );
}

const styled = StyleSheet.create({
  inputCard: {
    marginTop: 24,
    width: "100%",
    flexDirection: "column",
    display: "flex",
    gap: 2,
    padding: 12,
    backgroundColor: "#FFFFFF",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    borderRadius: 8,
  },
});
