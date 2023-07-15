import styled from 'styled-components/native'

interface TextProps {
  first?: number
}

export const Container = styled.View`


` 
export const ContainerView = styled.View`
  flex-direction: row;

`
export const Text = styled.Text<TextProps>`
font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.text.black};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-transform: capitalize;

  margin-left: ${(props) => (props.first ? '0px' : '10px')}; /* Estilo condicional para margin-left */
`

export const Button = styled.TouchableOpacity`


`