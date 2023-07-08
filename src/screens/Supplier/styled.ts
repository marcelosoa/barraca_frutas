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
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
