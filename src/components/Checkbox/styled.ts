import styled from 'styled-components/native'

export const Container = styled.View`
` 
export const ContainerView = styled.View`
  
`

export const Text = styled.Text`

font-family: ${({ theme }) => theme.fonts.medium };
color: ${({ theme }) => theme.text.black };
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
letter-spacing: 0.15px;
`

export const Button = styled.TouchableOpacity`

`