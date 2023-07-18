import React from 'react'
import { Container, TextInput } from './styled'
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";

interface FormGroupProps {
  name: string | any
  size: number
  placeholder: string
  value?: string | undefined
  onChangeText?: ((text: string) => void) | undefined;
}

export default function FormGroupComponent({ name, size, placeholder, value, onChangeText }: FormGroupProps) {
  return (
    <Container style={styled.card}>
      <Ionicons name={name} size={size}/>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </Container>
  )
}

const styled = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    padding: 16,
    backgroundColor: "#FFFFFF",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderRadius: 8,
  },
});
