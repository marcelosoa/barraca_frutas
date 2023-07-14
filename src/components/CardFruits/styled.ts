import styled from "styled-components/native";

interface TextProps {
  left?: number;
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape };
  padding: 20px;
  border-radius: 8px;
`;

export const ContainerCard = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16px;
`;

export const Text = styled.Text<TextProps>`
  display: flex;
  font-size: 13px;
  margin-left: ${({ left }) => (left ? left + "px" : 0)};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const View = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ViewSupplier = styled.View`
  flex-direction: row;
  align-items: center;
`;
