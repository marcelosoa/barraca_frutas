import styled from 'styled-components/native'

export const Container = styled.View`
  margin-left: 9px;
` 
export const View = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Text = styled.Text`
  margin: 8px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  font-family: ${({ theme }) => theme.fonts.regular };
  color: ${({ theme }) => theme.text.black };
`

export const Button = styled.TouchableOpacity`
  color: ${({ theme }) => theme.colors.primary };
  justify-content: center;
  align-items: center;
`