import styled, { css } from "styled-components/native";

type TextProps = {
  type: "title" | "text";
};

export const Container = styled.View`
  /* width: 100%;
  flex-direction: column;
  display: flex;
  padding: 16px;
  border: 1px;
  border-radius: 8px; */
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
          overflow: hidden;
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
  padding: 8px 0;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;
