import React, { useState } from "react";
import { Container, Text, ViewContent, TextInput, FruitView } from "./styled";
import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import ButtonComponent from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../interface/routerinterface";
import { useTheme } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addFruit } from "../../redux/reducers/fruitsReducer";
import { RootState } from "../../redux/store";
import { v4 as uuidv4 } from 'uuid';

export default function RegisterFruitScreen() {
  const navigation = useNavigation<propsStack>();
  const theme = useTheme();
  const dispatch = useDispatch();

  const fruits = useSelector((state: RootState) => state.fruits)
  console.log(fruits)

  const [fruitData, setFruitData] = useState({
    name: "",
    price: "",
    quantity: "",
    supplier: "",
    id: ''
  });

  return (
    <Container>
      <ViewContent>
        <Text>Cadastrar Fruta</Text>
        <Ionicons
          name="close"
          size={38}
          onPress={() => navigation.navigate("RegisterFruit")}
        />
      </ViewContent>
      <FruitView style={styled.card}>
        <Ionicons name="nutrition-outline" size={32} color={theme.text.black} />
        <TextInput 
          placeholder="Nome da Fruta"
          value={fruitData.name}
          onChangeText={(text: string) => setFruitData({ ...fruitData, name: text})}
          />
      </FruitView>
      <FruitView style={styled.card}>
        <Ionicons name="cash-outline" size={32} />
        <TextInput 
          placeholder="Preço do Kilo"
          value={fruitData.price}
          onChangeText={(price: string) => setFruitData({ ...fruitData, price: price})}
          />
      </FruitView>
      <FruitView style={styled.card}>
        <Ionicons name="server-outline" size={32} />
        <TextInput 
          placeholder="Quantidade no estoque"
          value={fruitData.quantity}
          onChangeText={(quantity: string) => setFruitData({ ...fruitData, quantity: quantity})}
        />
      </FruitView>
      <FruitView style={styled.card}>
        <Ionicons name="people-outline" size={32} />
        <TextInput 
          placeholder="Fornecedor"
          value={fruitData.supplier}
          onChangeText={(supplier: string) => setFruitData({ ...fruitData, supplier: supplier})}
          />
      </FruitView>
      <ButtonComponent
        label="Cadastrar Fruta"
        onPress={() => {
          fruitData.id = uuidv4()
          dispatch(addFruit(fruitData));
          navigation.navigate('SuccessFruit');
        }}
      />
    </Container>
  );
}

const styled = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    padding: 16,
    elevation: 2,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 6,
  },
});
