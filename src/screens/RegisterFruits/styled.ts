import styled from "styled-components/native";
import ButtonComponent from "../../components/Button";

interface TextInputProps {
  placeholder: string;
}

export const Container = styled.KeyboardAvoidingView`
  padding: 12px;
  display: flex;
  flex: 1;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ViewContent = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 32px 0px;
  justify-content: space-between;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 24px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const FruitView = styled.KeyboardAvoidingView``;

export const TextInput = styled.TextInput<TextInputProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  width: 100%;
  color: ${({ theme }) => theme.colors.light_gray};
`;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 16px;
  left: 12px;
  right: 12px;
`;

export const StyledButtonComponent = styled(ButtonComponent)`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 16px;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 1.25px;
`;
