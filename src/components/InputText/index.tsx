import React from 'react'
import { Text, Container } from "./styled";

interface InputProps {
  label: string
  icon: React.ReactNode
  prevPage?: string
}

export default function InputTextComponent({ label, icon, prevPage }: InputProps) {
  return (
    <Container>
       <>
       {icon}
        <Text>{label}</Text>
        </>
    </Container>
  )
}