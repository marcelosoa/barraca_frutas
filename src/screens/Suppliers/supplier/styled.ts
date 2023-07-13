import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 24px 18px;
  display: flex;
  flex: 1;
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
  padding: 16px 0; 
`

export const SupplierView = styled.View`
  display: flex;
  width: 100%;
  padding: 8px 0;
  flex-direction: row;
  gap: 8px;
  align-items: center;

`

export const SupplierContentView = styled.View`
  width: 100%;
  gap: 8px;
`

export const SupplierViewView = styled.View`
  display: flex;
  width: 100%;
  padding: 8px 0;
  flex-direction: row;
  gap: 8px;
  align-items: center;

`

export const SupplierTextFruits = styled.Text`
font-family: ${({ theme }) => theme.fonts.regular};
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 30px;
letter-spacing: 0.1px;
`
export const SupplierName = styled.Text`
font-family: ${({ theme }) => theme.fonts.regular};
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 30px;
`

export const FruitView = styled.View`

`

export const RenderFruits = styled.Text`

`

export const Fruits = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular };
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.15px;
`