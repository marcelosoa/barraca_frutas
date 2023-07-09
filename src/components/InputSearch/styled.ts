import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 16px;
  padding: 16px 18px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.shape};
`

export const SearchInput = styled.TextInput`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  width: 100%;
`