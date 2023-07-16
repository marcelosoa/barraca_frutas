import React from "react";
import { Container, Label, ErrorText, TextInputForm } from "./styled";
import { InputFormProps } from "../../interface/InputFormComponentInterface";

export default function InputFormComponent({
  placeholder,
  label,
  onChangeText,
  limitCaracter,
  errors,
  value = "",
  keyboardType,
  mask,
}: InputFormProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <TextInputForm
        maxLength={limitCaracter}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        autoCapitalize="words"
        textContentType="name"
        mask={mask}
      />
      {errors && <ErrorText>{errors}</ErrorText>}
    </Container>
  );
}
