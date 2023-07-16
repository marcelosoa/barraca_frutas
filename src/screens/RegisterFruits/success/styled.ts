import styled from "styled-components/native";
import ButtonComponent from "../../../components/Button";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 24px 28px;
  display: flex;
  flex: 1;
  gap: 44px;
`;

export const ViewIcon = styled.View`
  padding: 28px 0;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 44px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0.15px;
`;
export const TextView = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ViewText = styled.View`
  padding-top: 66px;
`;

export const SmallText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.light_gray};
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.5px;
  margin-top: 16px;
`;

export const ViewButton = styled.View`
  padding-top: 46px;
`

export const StyledButtonComponent = styled(ButtonComponent)`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 16px 10px;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
`;
