import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background };
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium };
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0.15px;
  margin-top: 60px;
`
export const TextView = styled.View`

`

export const SmallText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.light_gray};
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.5px;
  margin-top: 16px;
`