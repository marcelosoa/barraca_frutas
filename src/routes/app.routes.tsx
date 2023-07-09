import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";

// Screens
import SupplierScreen from "../screens/Supplier";
import FruitsScreen from "../screens/Fruits";
import RegisterCPFSupplierScreen from "../screens/RegisterSupplier/cpf";
import RegisterPhoneSupplierScreen from "../screens/RegisterSupplier/phone";
import RegisterNameSupplier from "../screens/RegisterSupplier/name";
import RegisterFruitSupplierScreen from "../screens/RegisterSupplier/fruits";
import { useTheme } from "styled-components";
import RegisterFruitScreen from "../screens/RegisterFruits";
import RegisterSuccessScreen from "../screens/RegisterSupplier/sucess";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        headerTintColor: theme.colors.primary,
        tabBarStyle: {
          height: 76,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          marginBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="Fornecedor"
        component={SupplierScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-sharp" size={45} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Frutas"
        component={FruitsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="nutrition-outline" size={45} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Inicio" component={HomeTabs} />
        <Stack.Screen name="Nome" component={RegisterNameSupplier} />
        <Stack.Screen name="CPF" component={RegisterCPFSupplierScreen} />
        <Stack.Screen name="Telefone" component={RegisterPhoneSupplierScreen} />
        <Stack.Screen name="Frutas" component={RegisterFruitSupplierScreen} />
        <Stack.Screen name="RegistrarFrutas" component={RegisterFruitScreen} />
        <Stack.Screen name="Success" component={RegisterSuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
