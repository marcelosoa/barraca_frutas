import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
interface TextProps {
  first?: number;
}
const screenWidth = Dimensions.get('window').width;

const iconSize = screenWidth <= 360 ? 28 : 32;

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
  font-size: ${fontSize}px;
  font-style: normal;
  line-height: 24px;
  letter-spacing: 0.15px;
`;

export const Button = styled.TouchableOpacity``;

export const Icon = styled(Ionicons)`
  width: ${iconSize}px;
  height: ${iconSize}px;
`;