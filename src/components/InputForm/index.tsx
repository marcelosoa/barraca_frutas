import React from 'react';
import { TextInput, Container, Label, ErrorText } from './styled';
import { InputFormProps } from '../../interface/InputFormComponentInterface';

export default function InputFormComponent({ placeholder, label, onChangeText, limitCaracter, errors, value = '' }: InputFormProps) {

  // const handleChange = (value: string) => {
  //   if (onChange) {
  //     onChange(value);
  //   }
  // };

  return (
    <Container>
      <Label>{label}</Label>
      <TextInput 
          maxLength={limitCaracter} 
          placeholder={placeholder} 
          onChangeText={onChangeText} 
          value={value}
      />
      {errors && <ErrorText>{errors}</ErrorText>}
    </Container>
  );
}
