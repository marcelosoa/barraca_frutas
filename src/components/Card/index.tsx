import React from "react";
import { Container, Text, View } from "./styled";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";

interface CardProps {
  cpf: string;
  name: string;
  phone: string;
}

export default function CardComponent({ name, cpf, phone }: CardProps) {
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
    elevation: 2,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
       height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 6,
  },
});
