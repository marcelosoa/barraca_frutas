
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigationState } from '@react-navigation/native';

export default function BreadcrumbsComponent ({ navigation }) {
  const state = useNavigationState((state) => state);
  const routes = state.routes;
  const index = state.index;

  const paths = routes.slice(0, index + 1).map((route) => route.name);

  const handleBreadcrumbPress = (index) => {
    navigation.navigate(routes[index].name);
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {paths.map((path, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleBreadcrumbPress(index)}
          style={{ marginRight: 5 }}
        >
          <Text>{path}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};