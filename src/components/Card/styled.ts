import styled, { css } from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";

type TextProps = {
  type: "title" | "text";
};

export const Container = styled.View`
`;

export const Text = styled.Text<TextProps>`
  ${({ type }) =>
    type === "title"
      ? css`
          overflow: hidden;
          color: ${({ theme }) => theme.text.black};

          font-family: ${({ theme }) => theme.fonts.medium};
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0.15px;
        `
      : css`
          color: ${({ theme }) => theme.text.light_gray};
          font-family: ${({ theme }) => theme.fonts.medium};
          font-size: 15px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: 0.1px;
        `}
`;
export const View = styled.View`
  display: flex;
  width: 100%;
  padding: 6px 0;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const StyledTextInputMask = styled(TextInputMask)`
  font-family: ${({ theme }) => theme.fonts.regular };
  color: ${({ theme }) => theme.text.light_gray };
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.1px;
`
