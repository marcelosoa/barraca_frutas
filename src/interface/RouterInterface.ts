import { StackNavigationProp } from '@react-navigation/stack';

type StackParamList = {
  Home: undefined;
  Cadastro: undefined
}

export interface RouterProps {
  navigation: StackNavigationProp<StackParamList, any>;
}