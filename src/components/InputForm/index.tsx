import React from "react";
import { TextInput, Container, Label } from "./styled";

interface InputProps {
  placeholder?: string;
  label?: string
  onChange?: () => void
  limitCaracter?: number
}

export default function InputFormComponent({ placeholder, label, onChange, limitCaracter }: InputProps) {
  return (
    <Container>
      <Label>
        {label}
        </Label>
      <TextInput 
      maxLength={limitCaracter}
      placeholder={placeholder} 
      onTextInput={onChange} 
      />
    </Container>
  );
}
