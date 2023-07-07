import React from "react";
import { TextInput, Container, Label } from "./styled";

interface InputProps {
  placeholder: string;
  label: string
  onChange: () => void
}

export default function InputFormComponent({ placeholder, label, onChange }: InputProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <TextInput placeholder={placeholder} onTextInput={onChange} />
    </Container>
  );
}
