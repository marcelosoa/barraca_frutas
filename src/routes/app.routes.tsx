import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components";
import Ionicons from "@expo/vector-icons/Ionicons";

// Screens
import FruitsScreen from "../screens/Fruits";
import RegisterFruitScreen from "../screens/RegisterFruits";
import RegisterSuccessScreen from "../screens/RegisterSupplier/sucess";
import SuppliersScreen from "../screens/Suppliers";
import SupplierScreen from "../screens/Suppliers/supplier";
import SuccessFruit from "../screens/RegisterFruits/success";
import App from "../screens/RegisterSupplier/Stepper";
import EditFruitScreen from "../screens/Fruits/edit";

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
          height: 100,
          backgroundColor: '#F0F4F7'
        },
        tabBarLabelStyle: {
          fontFamily: theme.fonts.regular,
          lineHeight: 16,
          letterSpacing: 0.4,
          fontSize: 12,
          marginBottom: 6,
        },
      }}
    >
      <Tab.Screen
        name="Fornecedor"
        component={SupplierNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-sharp" size={45} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Frutas"
        component={NewNavigator}
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
        <Stack.Screen name="App" component={App} />
        <Stack.Screen name="Success" component={RegisterSuccessScreen} />
        <Stack.Screen name="SuccessFruit" component={SuccessFruit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const NewNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen
        name="RegisterFruit"
        component={FruitsScreen}
      />
      <Stack.Screen
        name="RegistrarFrutas"
        component={RegisterFruitScreen}
      />
      <Stack.Screen
        name="EditFruit"
        component={EditFruitScreen}
        />
    </Stack.Navigator>
  )
}

const SupplierNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen
        name="Suppliers"
        component={SuppliersScreen}
      />
      <Stack.Screen
        name="Supplier"
        component={SupplierScreen}
      />
    </Stack.Navigator>
  )
}