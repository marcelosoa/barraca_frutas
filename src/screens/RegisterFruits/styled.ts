import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background };
  display: flex;
  flex: 1;
  gap: 44px;
  padding: 24px 28px;
`;

export const ViewName = styled.View`
  width: 100%;
  display: flex;
  padding: 16px 0;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular };
  font-size: 24px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.primary };
`;

export const FruitCards = styled.View`
  background-color: ${({ theme }) => theme.colors.shape };
  gap: 16px;
  padding: 16px 12px;
  border-radius: 8px;

`

export const FruitCardsInput = styled.TextInput`

`