import styled, { css } from 'styled-components/native'

interface TextProps {
  isRed: boolean
}

export const View = styled.View`
  display: flex;
  flex-direction: row;
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

export const ButtonText = styled.TouchableOpacity`
  margin-right: 5px;
  flex-direction: row;
  align-items: center;

`