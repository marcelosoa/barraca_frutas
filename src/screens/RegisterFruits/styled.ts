import styled from 'styled-components/native';

interface TextInputProps {
  placeholder: string
}


export const Container = styled.View`
  padding: 16px;
  display: flex;
  flex: 1;
  gap: 44px;
`;

export const ViewContent = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 48px 0; 
  justify-content: space-between;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular };
  font-size: 24px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.primary };
`;

export const FruitView = styled.View`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 16px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.shape};
`

export const TextInput = styled.TextInput<TextInputProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  width: 100%;
  color: ${({ theme }) => theme.colors.light_gray}
`

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 12px 24px;
  border-radius: 100px;
`

export const TextButton = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape };
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 1.25px;
`