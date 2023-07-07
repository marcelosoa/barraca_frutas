import React from 'react'
import { Text, Container } from "./styled";

interface InputProps {
  label: string
}

export default function InputTextComponent({ label }: InputProps) {
  return (
    <Container>
      <Text>{label}</Text>
    </Container>
  )
}