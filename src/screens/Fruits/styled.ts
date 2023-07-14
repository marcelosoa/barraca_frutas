import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex: 1;
  padding-top: 48px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  flex-direction: column;
  gap: 16px;
  
`;

export const ViewText = styled.View`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular };
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
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
  font-family: ${({ theme }) => theme.fonts.medium };
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 1.25px;
  color: ${({ theme }) => theme.text.primary};
`;


export const NewFruitButton = styled.TouchableOpacity`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  bottom: -16px; /* Ajustado para margem superior negativa */
  right: 16px;
`;

export const FruitButtonIcon = styled.Text`
  background-color: ${({ theme }) => theme.colors.primary };
  color: ${({ theme }) => theme.colors.background };
  padding: 16px;
  border-radius: 24px;

`