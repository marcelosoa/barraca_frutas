import React, { useEffect, useRef } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Modalize } from 'react-native-modalize';

import {
  Container,
  Text,
  ViewText,
  Button,
  TextButton,
  ContainerFruits,
  ContentFruits,
  FruitCard,
  FruitText,
} from "./styled";
import { propsStack } from "../../interface/routerinterface";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import SearchComponent from "../../components/InputSearch";
import { fetchFruits } from "../../redux/reducers/fruitsReducer";
import { Fruit } from "../../redux/reducers/fruitsReducer";
import { useTheme } from "styled-components";

export default function FruitsScreen() {
  const theme = useTheme();
  const navigation = useNavigation<propsStack>();
  const dispatch = useDispatch();
  const fruits = useSelector((state: RootState) => state.fruits.fruits);
  console.log(fruits)

  useEffect(() => {
    dispatch(fetchFruits());
  }, [dispatch]);

  return (
    <>
      {fruits.length > 0 ? (
        <ContainerFruits>
          <SearchComponent label="Pesquisar Frutas" />
          {fruits.map((fruit: Fruit) => (
            <ContentFruits key={fruit.id}>
              <FruitCard key={fruit.id}>
                <FruitText>
                  <Ionicons
                    name="cog-outline"
                    size={24}
                    color={theme.colors.primary}
                  />
                  {fruit.name}
                </FruitText>
                <FruitText>{fruit.price}</FruitText>
                <FruitText>{fruit.quantity}</FruitText>
                <FruitText>{fruit.supplier}</FruitText>
              </FruitCard>
            </ContentFruits>
            
          ))}
        </ContainerFruits>
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
    </>
  );
}
