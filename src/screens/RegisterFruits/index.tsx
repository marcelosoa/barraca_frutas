import React, { useState } from "react";
import { Container, Text, ViewContent, TextInput, FruitView } from "./styled";
import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StackNavigationProp } from "@react-navigation/stack";
import ButtonComponent from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../interface/routerinterface";
import { useTheme } from "styled-components";

export default function RegisterFruitScreen() {
  const navigation = useNavigation<propsStack>()
  const theme = useTheme()
  return (
    <Container>
      <ViewContent>
        <Text>Cadastrar Fruta</Text>
        <Ionicons name="close" size={38} onPress={() => navigation.navigate('RegisterFruit')}/>
      </ViewContent>
      <FruitView style={styled.card}>
        <Ionicons name="nutrition-outline" size={32} color={theme.text.black}/>
        <TextInput placeholder="Nome da Fruta" />
      </FruitView>
      <FruitView style={styled.card}>
        <Ionicons name="cash-outline" size={32} />
        <TextInput placeholder="Preço do Kilo" />
      </FruitView>
      <FruitView style={styled.card}>
        <Ionicons name="server-outline" size={32} />
        <TextInput placeholder="Quantidade no estoque" />
      </FruitView>
      <FruitView style={styled.card}>
        <Ionicons name="people-outline" size={32} />
        <TextInput placeholder="Fornecedor" />
      </FruitView>
      <ButtonComponent label="Cadastrar Fruta"/>
      {/* <Button onPress={() => navigation.navigate('Success')}>
        <TextButton>Cadastrar Fruta</TextButton>
      </Button> */}
    </Container>
  );
}

const styled = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    padding: 16,
    elevation: 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 6
  }
})