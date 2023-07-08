import styled from 'styled-components/native'

export const Container = styled.View``

export const Cards = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
`
export const CardsInput = styled.TextInput`
  font-family: ${({ theme }) => theme.fonts.regular };
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.text.light_gray };
  text-decoration: none;
` 