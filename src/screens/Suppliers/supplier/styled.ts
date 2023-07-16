import styled, { css } from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";

type TextProps = {
  type: "title" | "text";
};

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 24px 18px;
  flex: 1;
`;

export const TextSupplier = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 24px;
  line-height: 45px;
`;

export const ViewContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 20px 12px;
`;

export const SupplierView = styled.View`
  width: 100%;
  padding: 2px 12px;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

export const SupplierContentView = styled.View`
  width: 100%;
  gap: 8px;
`;

export const SupplierViewView = styled.View`
  width: 100%;
  padding: 8px 0;
  flex-direction: row;
  align-items: center;
`;

export const SupplierName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 24px;
  line-height: 30px;
`;

export const FruitView = styled.View`
  flex-direction: column;
`;

export const RenderFruits = styled.View`
  gap: 8px;
`;

export const TextFruits = styled.Text``;

export const Fruits = styled.Text<TextProps>`
  ${({ type }) =>
    type === "title"
      ? css`
          overflow: hidden;
          color: ${({ theme }) => theme.text.black};
          font-family: ${({ theme }) => theme.fonts.regular};
          font-size: 17px;
          line-height: 24px;
          letter-spacing: 0.15px;
          margin-bottom: 8px;
          margin-right: 25px;
        `
      : css`
          color: ${({ theme }) => theme.text.light_gray};
          font-family: ${({ theme }) => theme.fonts.medium};
          font-size: 15px;
          line-height: 24px;
          letter-spacing: 0.1px;
          margin-left: 10px;
          text-decoration: solid;
        `}
`;

export const StyledInputMask = styled(TextInputMask)`
  font-size: 17px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.light_gray};
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.1px;
  padding-left: 10px;
`;
