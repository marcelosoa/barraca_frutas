import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, ButtonText } from './styled'
import { useNavigationState } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type StackParamList = {
  Home: undefined;
  Cadastro: undefined;
};

type BreadCrumbsProps = {
  navigation: StackNavigationProp<StackParamList, any>;
};

export default function BreadCrumbsComponent ({ navigation }: BreadCrumbsProps) {
  const state = useNavigationState((state) => state);
  const routes = state.routes;
  const index = state.index;

  const paths = routes.slice(0, index + 1).map((route) => route.name);

  const handleBreadcrumbPress = (index: number) => {
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
          onPress={() => handleBreadcrumbPress(index)}
          style={{ marginRight: 5, flexDirection: 'row', alignItems: 'center' }}
        >
          <Text style={{ color: index === paths.length - 1 ? 'red' : 'black' }}>{path}</Text>
          {index !== paths.length - 1 && <Ionicons name="chevron-forward" size={16} />}
        </ButtonText>
      ))}
    </View>
  );
};