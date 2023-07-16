import React from "react";
import {
  Container,
  SmallText,
  TextView,
  Text,
  StyledButtonComponent,
  ViewIcon,
  ViewText,
  ViewButton,
} from "./styled";
import { Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { propsStack } from "../../../interface/routerinterface";
import { TextButton } from "../styled";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SuccessFruit() {
  const navigation = useNavigation<propsStack>();
  const route = useRoute();
  const fruit = route.params?.fruit;
  console.log("FRUTA", fruit);
  return (
    <Container>
      <ViewIcon>
        <Ionicons
          name="close"
          size={32}
          onPress={() => navigation.navigate("RegisterFruit")}
        />
      </ViewIcon>
      <TextView>
        <Image source={require("../../../../assets/images/confirmed.png")} />
      </TextView>
      <ViewText>
        <Text>Fruta Cadastrado</Text>
        <SmallText>Você cadastrou a fruta {fruit.name} com sucesso!</SmallText>
      </ViewText>
      <ViewButton>
      <StyledButtonComponent
        label="Voltar ao início"
        onPress={() => navigation.navigate("RegisterFruit")}
      >
        <TextButton>Voltar ao Inicio</TextButton>
      </StyledButtonComponent>
      </ViewButton>
      
    </Container>
  );
}
