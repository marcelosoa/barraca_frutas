import React from "react";
import { Container, Text, View } from "./styled";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from 'react-native'
import DropShadow from "react-native-drop-shadow";

interface CardProps {
  name: string,
  cpf: string,
  phone: string
}

export default function CardComponent({ name, cpf, phone }: CardProps) {
  return (
      <Container>
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