import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ViewText = styled.View`
  width: 100%;
  margin-bottom: 50px;
`

export const Text = styled.Text`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.15px;
  font-family: ${({ theme }) => theme.fonts.regular }
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background: ${({ theme }) => theme.colors.primary};
  gap: 8px;
  padding: 8px 16px;
  border-radius: 30px;
  width: 100%;
`;

export const TextButton = styled.Text`
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.medium };
  font-weight: normal;
  line-height: 16px;
  letter-spacing: 1.25px;
  color: ${({ theme }) => theme.text.primary};
`;

export const ContainerSupplier = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex: 1;
  padding-top: 48px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  flex-direction: column;
  gap: 8px;
  position: relative;
`

export const ContentContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`

export const NewSupplierButton = styled.TouchableOpacity `
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  bottom: 16px;
  right: 16px;
`
export const SupplierName = styled.Text`
  background-color: ${({ theme }) => theme.colors.primary };
  color: ${({ theme }) => theme.colors.background };
  padding: 16px;
  border-radius: 24px;
`

