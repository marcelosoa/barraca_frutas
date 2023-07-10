import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 24px 28px;
  display: flex;
  flex: 1;
  gap: 44px;
`
export const TextSupplier = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 45px;

`
export const ViewContent = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px 0; 
`