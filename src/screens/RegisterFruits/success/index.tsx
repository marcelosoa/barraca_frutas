import React from "react";
import {
  Container,
  SmallText,
  TextView,
  Text,
  StyledButtonComponent,
  ViewIcon,
} from "./styled";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../interface/routerinterface";
import { TextButton } from "../styled";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SuccessFruit() {
  const navigation = useNavigation<propsStack>();
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
      <Text>Fruta Cadastrado</Text>
      <SmallText>Você cadastrou a fruta com sucesso!</SmallText>
      <StyledButtonComponent
        label="Voltar ao início"
        onPress={() => navigation.navigate("RegisterFruit")}
      >
        <TextButton>Voltar ao Inicio</TextButton>
      </StyledButtonComponent>
    </Container>
  );
}
