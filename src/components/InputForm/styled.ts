import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  gap: 24px;
  width: 100%;
`

export const Label = styled.Text`
font-size: 15px;
font-family: ${({ theme }) => theme.fonts.medium};
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.25px;
color: ${({ theme }) => theme.colors.dark_gray};
`

export const TextInput = styled.TextInput`
font-family: ${({ theme }) => theme.fonts.regular};
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 24px;
color: ${({ theme }) => theme.colors.light_gray};
`

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
`