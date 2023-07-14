import styled from 'styled-components/native'

export const Container = styled.KeyboardAvoidingView``

export const TextInput = styled.TextInput`
  font-family: ${({ theme }) => theme.fonts.regular };
  color: ${({ theme }) => theme.text.light_gray };
  width: 100%;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.5px;
`

export const RegisterFruitView = styled.View