import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, ButtonText } from './styled'
import { useNavigationState } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type StackParamList = {
  Home: undefined;
  Cadastro: undefined;
};

type RouterComponentProps = {
  navigation: StackNavigationProp<StackParamList, any>;
};

export default function RouterComponent ({ navigation }: RouterComponentProps) {
  const state = useNavigationState((state) => state);
  const routes = state.routes;
  const index = state.index;

  const paths = routes.slice(0, index + 1).map((route) => route.name);

  const handleRoutePress = (index: number) => {
    if (index !== paths.length - 1) {
      navigation.navigate(routes[index].name as keyof StackParamList);
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {paths.map((path, index) => (
        <ButtonText
          key={index}
          onPress={() => handleRoutePress(index)}
          style={{ marginRight: 5, flexDirection: 'row', alignItems: 'center' }}
        >
          <Text isRed={index === paths.length -1}>{path}</Text>
          {index !== paths.length - 1 && <Ionicons name="chevron-forward" size={24} />}
        </ButtonText>
      ))}
    </View>
  );
};