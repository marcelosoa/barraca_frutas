import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Loader = styled.ActivityIndicator`
  size: "large";
  color: ${({ theme }) => theme.colors.primary };
`