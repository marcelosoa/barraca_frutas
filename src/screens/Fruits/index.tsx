import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView } from "react-native";
import {
  Container,
  Text,
  ViewText,
  Button,
  TextButton,
  NewFruitButton,
  FruitButtonIcon,
} from "./styled";
import { propsStack } from "../../interface/routerinterface";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import SearchComponent from "../../components/InputSearch";
import { fetchFruits } from "../../redux/reducers/fruitsReducer";
import { Fruit } from "../../redux/reducers/fruitsReducer";
import { useTheme } from "styled-components";
import CardFruitComponent from "../../components/CardFruits";

export default function FruitsScreen() {
  const [searchFruit, setFruitSearch] = useState("");
  const theme = useTheme();
  const navigation = useNavigation<propsStack>();
  const dispatch = useDispatch();
  const fruits = useSelector((state: RootState) => state.fruits.fruits);
  console.log(fruits);

  useEffect(() => {
    dispatch(fetchFruits());
  }, [dispatch]);

  const handleSearchFruit = () => {
    console.log("alalala");
  };

  return (
    <ScrollView>
      {fruits.length > 0 ? (
        <Container>
          <SearchComponent
            value={searchFruit}
            onChangeText={handleSearchFruit}
            label="Pesquisar Frutas"
          />
          {fruits.map((fruit: Fruit) => (
            <CardFruitComponent
              name={fruit.name}
              price={fruit.price}
              quantity={fruit.quantity}
              supplier={fruit.supplier}
            />
          ))}
          <NewFruitButton
            onPress={() => navigation.navigate("RegistrarFrutas")}
          >
            <FruitButtonIcon>
              <Ionicons name="add" size={32} />
            </FruitButtonIcon>
          </NewFruitButton>
        </Container>
      ) : (
        <Container>
          <ViewText>
            <Text>Cadastre sua primeira fruta</Text>
          </ViewText>
          <Button onPress={() => navigation.navigate("RegistrarFrutas")}>
            <Ionicons name="add" size={32} color={"#FFFFFF"} />
            <TextButton>Cadastrar Fruta</TextButton>
          </Button>
        </Container>
      )}
    </ScrollView>
  );
}
