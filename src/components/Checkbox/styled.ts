import styled from 'styled-components/native'

interface TextProps {
  first?: number
}

export const Container = styled.View`


` 
export const ContainerView = styled.View`
  flex-direction: row;
  align-items: center;
  

`
export const Text = styled.Text<TextProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.text.black};
  margin-left: ${(props) => (props.first ? '0px' : '10px')};
  font-family: ${({ theme }) => theme.fonts.medium };
  text-align: center;
  font-size: 16px;
  font-style: normal;
  line-height: 24px;
  letter-spacing: 0.15px;

`

export const Button = styled.TouchableOpacity`


`