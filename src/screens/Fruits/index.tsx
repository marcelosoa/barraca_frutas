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
import { fetchFruits, removeFruit } from "../../redux/reducers/fruitsReducer";
import { Fruit } from "../../redux/reducers/fruitsReducer";
import CardFruitComponent from "../../components/CardFruits";
import { Modal, TouchableOpacity, View } from "react-native";

export default function FruitsScreen() {
  const navigation = useNavigation<propsStack>();
  const dispatch = useDispatch();
  const fruits = useSelector((state: RootState) => state.fruits.fruits);
  const [searchFruit, setFruitSearch] = useState("");
  const modalizeRef = useRef<Modalize>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedFruit, setSelectedFruit] = useState<any>(null)

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
    navigation.navigate("EditFruit", { fruit: selectedFruit });
  };

  const handleDeleteFruit = () => {
    setIsDeleteModalOpen(true)
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const confirmDeleteFruit = (value: string) => {
    dispatch(removeFruit(value))
    
    setIsDeleteModalOpen(false);
    console.log(value, 'VALUEEEE: ')
  };

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
                <CardFruitComponent
                  key={fruit.id}
                  name={fruit.name}
                  price={fruit.price}
                  quantity={fruit.quantity}
                  supplier={fruit.supplier}
                  isModalCheck={handleModalOpen}
                  onCardPress={() => setSelectedFruit(fruit)}
                />
            ))}
          </ContainerFruits>
          <Modalize
            modalStyle={{
              backgroundColor: "#F0F4F7",
            }}
            ref={modalizeRef}
            snapPoint={150}
            scrollViewProps={{ keyboardShouldPersistTaps: "handled" }}
            adjustToContentHeight={true}
          >
            <ViewModalize>
              <ButtonInsideModal onPress={handleEditFruit}>
                <Ionicons name="pencil-outline" size={26} />
                <TextButtonModal> Editar Fruta </TextButtonModal>
              </ButtonInsideModal>
              <ButtonInsideModal
                onPress={() => handleDeleteFruit()}
              >
                <Ionicons name="trash-outline" size={26} />
                <TextButtonModal> Excluir Fruta</TextButtonModal>
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
      <Modal visible={isDeleteModalOpen} transparent animationType="fade">
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#FFF",
              padding: 20,
              borderRadius: 10,
            }}
          >
            <Text>Excluir Fruta</Text>
            <Text>Tem certeza que quer excluir essa fruta?</Text>
            <TouchableOpacity onPress={handleCloseDeleteModal}> 
              <Text>Não</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => confirmDeleteFruit(selectedFruit.id)}> 
              <Text>Sim, excluir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}
