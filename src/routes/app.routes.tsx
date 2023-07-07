import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'

import SupplierScreen from '../screens/Supplier';
import RegisterSupplierScreen from '../screens/RegisterSupplier'
import FruitsScreen from '../screens/Fruits';

const { Navigator, Screen } = createBottomTabNavigator()

export default function AppRoutes() {
  const theme = useTheme()
  return (
    <Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: theme.colors.primary,
      tabBarStyle: {
        height: 88,
        backgroundColor: theme.colors.background,
      }
    }}
    >
      <Screen 
        name='Fornecedor'
        component={RegisterSupplierScreen}
        options={{
          tabBarIcon: (({size, color}) => 
          <Ionicons name='people-sharp'
          size={size}
          color={color}
          />
          )
        }}
      />
      <Screen 
        name='Frutas'
        component={FruitsScreen}
        options={{
          tabBarIcon: (({size, color}) => 
          <Ionicons  name='nutrition-outline'
          size={size}
          color={color}
          />
          )
        }}
      />
    </Navigator>
  )
}