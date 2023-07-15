import React, { useEffect, useMemo, useRef, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Modalize } from "react-native-modalize";

import {
  Container,
  Text,
  ViewText,
  Button,
  TextButton,
  ContainerFruits,
  FruitCard,
  NewFruitButton,
  FruitButtonIcon,
  ViewModalize,
  ButtonInsideModal,
  TextButtonModal,
} from "./styled";
import { propsStack } from "../../interface/routerinterface";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import SearchComponent from "../../components/InputSearch";
import { fetchFruits } from "../../redux/reducers/fruitsReducer";
import { Fruit } from "../../redux/reducers/fruitsReducer";
import CardFruitComponent from "../../components/CardFruits";

export default function FruitsScreen() {
  const navigation = useNavigation<propsStack>();
  const dispatch = useDispatch();
  const fruits = useSelector((state: RootState) => state.fruits.fruits);
  const [searchFruit, setFruitSearch] = useState("");
  const modalizeRef = useRef<Modalize>(null);

  useEffect(() => {
    dispatch(fetchFruits());
  }, [dispatch]);

  const handleSearchFruit = (text: string) => {
    setFruitSearch(text);
  };

  const handleModalOpen = () => {
    modalizeRef.current?.open();
  };

  const filteredFruits = useMemo(
    () =>
      fruits.filter((fruit) =>
        fruit.name.toLowerCase().includes(searchFruit.toLowerCase())
      ),
    [fruits, searchFruit]
  );

  const handleEditFruit = () => {
    console.log("alo");
    navigation.navigate("EditFruit");
  };

  const handleDeleteFruit = () => {
    console.log('excluir')
  }

  return (
    <>
      {fruits.length > 0 ? (
        <>
          <ContainerFruits>
            <SearchComponent
              value={searchFruit}
              onChangeText={handleSearchFruit}
              label="Pesquisar Frutas"
            />
            {filteredFruits.map((fruit: Fruit) => (
              <FruitCard key={fruit.id}>
                <CardFruitComponent
                  name={fruit.name}
                  price={fruit.price}
                  quantity={fruit.quantity}
                  supplier={fruit.supplier}
                  isModalCheck={handleModalOpen}
                />
              </FruitCard>
            ))}
          </ContainerFruits>
          <Modalize
            modalStyle={{
              backgroundColor: '#FFF'
            }}
            ref={modalizeRef}
            snapPoint={150}
            modalHeight={200}
            scrollViewProps={{ keyboardShouldPersistTaps: "handled" }}
          >
            <ViewModalize>
              <ButtonInsideModal onPress={handleEditFruit}>
                <Ionicons name="pencil-outline" size={24} />
                <TextButtonModal>
                  Editar Fruta
                </TextButtonModal>
              </ButtonInsideModal>
              <ButtonInsideModal onPress={handleDeleteFruit}>
                <Ionicons name="trash-outline" size={24} />
                <TextButtonModal>Excluir Fruta</TextButtonModal>
              </ButtonInsideModal>
            </ViewModalize>
          </Modalize>
          <NewFruitButton
            onPress={() => navigation.navigate("RegistrarFrutas")}
          >
            <FruitButtonIcon>
              <Ionicons name="add" size={32} />
            </FruitButtonIcon>
          </NewFruitButton>
        </>
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
