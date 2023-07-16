import styled from "styled-components/native";

interface ModalProps {
  isPrimary: boolean;
}

export const ViewModal = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.shape};
  gap: 16px;
  padding: 24px;
  flex-direction: column;
`;

export const ModalText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  gap: 16px;
`;

export const ContentModal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.dark_gray};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  width: 100%;
  gap: 16px;
  flex-wrap: wrap;
`;

export const ButtonModalContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonModal = styled.TouchableOpacity<ModalProps>`
  background-color: ${({ theme, isPrimary }) =>
    isPrimary ? theme.colors.secondary : theme.colors.primary};
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 12px 24px;
  margin: 0 24px;
`;

export const TextModal = styled.Text<ModalProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, isPrimary }) =>
    isPrimary ? theme.colors.secondary : theme.colors.shape};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`
