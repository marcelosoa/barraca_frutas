import React from 'react'
import { Text, Container } from "./styled";
import { InputTextComponentProps } from '../../interface/input-text-component.interface';


export default function InputTextComponent({ label, icon }: InputTextComponentProps) {
  return (
    <Container>
       <>
       {icon}
        <Text>{label}</Text>
        </>
    </Container>
  )
}