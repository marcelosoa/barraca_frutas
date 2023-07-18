import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
interface TextProps {
  first?: number;
}

const screenWidth = Dimensions.get('window').width;

// Definindo a largura do ícone com base na largura da tela
const iconSize = screenWidth <= 360 ? 28 : 32;

// Definindo a fonte com base na largura da tela
const fontSize = screenWidth <= 360 ? 14 : 16;

export const ContainerView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Text = styled.Text<TextProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.text.black};
  margin-left: ${(props) => (props.first ? '0px' : '10px')};
  text-align: center;
  font-size: ${fontSize}px; /* Usando a fonte responsiva */
  font-style: normal;
  line-height: 24px;
  letter-spacing: 0.15px;
`;

export const Button = styled.TouchableOpacity``;

export const Icon = styled(Ionicons)`
  width: ${iconSize}px;
  height: ${iconSize}px;
`;