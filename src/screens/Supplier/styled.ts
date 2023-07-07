import styled from "styled-components/native";

export const View = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ViewButton = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.15px;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 328px;
  height: 40px;
  padding: 8px 16px;
  justify-content: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 100px;
  background: ${({ theme }) => theme.colors.primary};
`;

export const TextButton = styled.Text`
  font-size: 13px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: 1.25px;
  color: ${({ theme }) => theme.text.primary};
`;
