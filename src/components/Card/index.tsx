import React from "react";
import { Container, Text, View } from "./styled";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import { CardComponentProps } from "../../interface/CardComponentInterface";

export default function CardComponent({ name, cpf, phone }: CardComponentProps) {
  return (
    <Container style={styled.inputCard}>
      <Text type="title">{name}</Text>
      <View>
        <Ionicons name="person-outline" size={32} />
        <Text type="text">{cpf}</Text>
      </View>
      <View>
        <Ionicons name="call-outline" size={32} />
        <Text type="text">{phone}</Text>
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
    padding: 16,
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 6,
    borderRadius: 8
  },
});
