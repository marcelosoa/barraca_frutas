import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  display: flex;
  padding: 6px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 30px;
`;

export const TextButton = styled.Text`
color: ${({ theme}) => theme.colors.primary};
font-size: 13px;
font-style: normal;
font-weight: 500;
line-height: 16px;
letter-spacing: 1.25px;
`