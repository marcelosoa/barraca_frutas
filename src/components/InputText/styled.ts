import styled from 'styled-components/native'

export const Container = styled.View`
`

export const Text = styled.Text`
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1.25px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.primary};
`