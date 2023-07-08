import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background };
  display: flex;
  flex: 1;
`

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular };
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0.15px;
`

export const SmallText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.light_gray};
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.5px;
`

export const Image = styled.Image`
 
`