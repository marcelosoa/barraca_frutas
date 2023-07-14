import React, { useState } from "react";
import { CardFruitProps } from "../../interface/card_fruits.interface";
import { Container, ContainerCard, View, Text, TextName, PriceContainer, ViewSupplier } from "./styled";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../interface/routerinterface";

export default function CardFruitComponent({
  name,
  price,
  quantity,
  supplier,
}: CardFruitProps) {
  const theme = useTheme()
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const navigation = useNavigation<propsStack>()
  
  const isModalOpen = () => {
    setIsOpenModal(true)
  }

  return (
    <Container>
      <ContainerCard>
        <View>
        <Ionicons name="cog-outline" size={24} color={theme.colors.primary} onPress={() => isModalOpen}/>
          <TextName>{name}</TextName>
        </View>
      </ContainerCard>
      <PriceContainer>
        <Ionicons name="cash-outline" size={24} color={"#008C21"} />
        <Text left={3}>R${price}</Text>
        <Text left={10}>{quantity} em estoque</Text>
      </PriceContainer>
      <ViewSupplier>
        <Ionicons name="people-outline" size={24} color={"#008C21"} />
        <Text left={6}>{supplier}</Text>
      </ViewSupplier>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    marginRight: 8,
  },
  nameContainer: {},
  name: {
    textAlign: "left",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    marginLeft: 4,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  supplier: {
    marginLeft: 4,
    marginRight: 4,
  },
  quantify: {
    marginLeft: 4,
  },
});
