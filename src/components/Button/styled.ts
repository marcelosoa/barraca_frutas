import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  display: flex;
  width: 328px;
  height: 40px;
  padding: 8px 16px 8px 24px;
  gap: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
color: ${({ theme}) => theme.colors.primary};
font-size: 13px;
font-style: normal;
font-weight: 500;
line-height: 16px;
letter-spacing: 1.25px;
`
