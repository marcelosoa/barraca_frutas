import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "styled-components";

// Screens
import SupplierScreen from "../screens/Supplier";
import FruitsScreen from "../screens/Fruits";
import RegisterSupplierScreen from "../screens/RegisterSupplier";
import RegisterCPFSupplierScreen from "../screens/RegisterSupplier/cpf";
import RegisterPhoneSupplierScreen from "../screens/RegisterSupplier/phone";

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarStyle: {
          height: 88,
          backgroundColor: theme.colors.background,
        },
      }}
    >
      <Tab.Screen
        name="Fornecedor"
        component={SupplierScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="people-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Frutas"
        component={FruitsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="nutrition-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="RegisterSupplierScreen"
        component={RegisterSupplierScreen}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="RegisterCPFSupplierScreen"
        component={RegisterCPFSupplierScreen}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="RegisterPhoneSupplierScreen"
        component={RegisterPhoneSupplierScreen}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Tab.Navigator>
  );
}
