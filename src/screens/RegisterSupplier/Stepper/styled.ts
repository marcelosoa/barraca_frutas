import styled, { css } from 'styled-components/native'
import ButtonComponent from '../../../components/Button'


interface TextProps {
  isRed?: boolean
}

export const Container = styled.KeyboardAvoidingView`
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
  align-items: flex-start; /* Alinhar os elementos à esquerda */
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

export const StyledButtonComponent = styled(ButtonComponent)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: '#FFF';
  padding: 16px
`

export const TextButton = styled.Text`
  color: ${({ theme}) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 1.25px;
`