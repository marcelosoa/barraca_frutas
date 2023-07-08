import React from 'react';
import { TextInput, Container, Label, ErrorText } from './styled';

interface InputProps {
  placeholder?: string;
  label?: string;
  onChange?: (value: string) => void;
  limitCaracter?: number;
  errors?: string; 
}

export default function InputFormComponent({ placeholder, label, onChange, limitCaracter, errors }: InputProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <TextInput maxLength={limitCaracter} placeholder={placeholder} onChangeText={onChange} />
      {errors && <ErrorText>{errors}</ErrorText>}
    </Container>
  );
}
