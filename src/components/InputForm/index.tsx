import React from 'react';
import { TextInput, Container, Label, ErrorText } from './styled';

interface InputProps {
  placeholder?: string;
  label?: string;
  onChange?: (value: any) => void;
  limitCaracter?: number;
  errors?: string;
  value: string
}

export default function InputFormComponent({ placeholder, label, onChange, limitCaracter, errors, value = '' }: InputProps) {

  const handleChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Container>
      <Label>{label}</Label>
      <TextInput 
          maxLength={limitCaracter} 
          placeholder={placeholder} 
          onChangeText={handleChange} 
          value={value}
      />
      {errors && <ErrorText>{errors}</ErrorText>}
    </Container>
  );
}
