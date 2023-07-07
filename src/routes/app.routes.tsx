import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import SupplierScreen from '../screens/Supplier';
import FruitsScreen from '../screens/Fruits';
import RegisterCPFSupplierScreen from '../screens/RegisterSupplier/cpf';
import RegisterPhoneSupplierScreen from '../screens/RegisterSupplier/phone';
import RegisterNameSupplier from '../screens/RegisterSupplier/name';
import RegisterFruitSupplierScreen from '../screens/RegisterSupplier/fruits';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false

    }}>
      <Tab.Screen name="Fornecedor" component={SupplierScreen} options={{
        
      }}/>
      <Tab.Screen name="FrutasFornecedor" component={FruitsScreen} />
    </Tab.Navigator>
  );
}

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Inicio" component={HomeTabs} />
        <Stack.Screen name='Nome' component={RegisterNameSupplier} />
        <Stack.Screen name="CPF" component={RegisterCPFSupplierScreen} />
        <Stack.Screen name="Telefone" component={RegisterPhoneSupplierScreen} />
        <Stack.Screen name='Frutas' component={RegisterFruitSupplierScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}