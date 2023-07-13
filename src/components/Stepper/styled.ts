import styled, { css } from 'styled-components/native'


interface TextProps {
  isRed?: boolean
}

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background };
  padding: 24px 28px;
  display: flex;
  flex: 1;
  gap: 16px;
`

export const ViewName = styled.View`
  padding: 24px 0;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`
export const InputFormView = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`

export const Text = styled.Text<TextProps>`
  font-family: ${({ theme }) => theme.fonts.regular };
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: ${({ theme }) => theme.text.black};
  ${({ isRed }) => isRed ? css`
    color: ${({ theme }) => theme.colors.primary };
  ` : css`
    color: ${({ theme }) => theme.text.black };
  `}
`