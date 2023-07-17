import styled from 'styled-components/native'
import ButtonComponent from '../../../../components/Button'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background };
  padding: 24px 28px;
  display: flex;
  flex: 1;
  gap: 44px;
`
export const ViewIcon = styled.View`
  padding: 28px 0;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 44px;
`
export const TextView = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 44px;
`
export const Image = styled.Image`
  width: 169px;
  height: 200px;
`

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium };
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0.15px;
`


export const SmallText = styled.Text`
  /* font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.light_gray};
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.5px; */
`

export const View = styled.View`
  /* flex: 1;
  width: 100%;
  padding-top: 66px; */
`

export const TextButton = styled.Text`
text-align: center;
color: ${({ theme }) => theme.text.primary};
font-family: ${({ theme }) => theme.fonts.regular};
font-size: 13px;
font-style: normal;
font-weight: 500;
line-height: 16px;
letter-spacing: 1.25px;
`

export const StyledButtonComponent = styled(ButtonComponent)`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 16px;
`