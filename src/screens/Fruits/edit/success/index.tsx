import React from "react";
import {
  Container,
  SmallText,
  Text,
  TextView,
  ViewIcon,
  Image,
  View,
  TextButton,
  StyledButtonComponent
} from "./styled";
import { useNavigation, useRoute } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { propsStack } from "../../../../interface/routerinterface";

export default function SuccessEditFruitScreen() {
  const navigation = useNavigation<propsStack>();
  const route = useRoute()
  const fruit = route.params?.fruit
  return (
    <Container>
      <ViewIcon>
        <Ionicons
          name="close"
          size={32}
          onPress={() => navigation.navigate("Inicio")}
        />
      </ViewIcon>
      <TextView>
        <Image source={require("../../../../../assets/images/confirmed.png")} />
      </TextView>
      <Text>Fruta Editada com Sucesso!</Text>
      <SmallText>Você Editou a fruta {fruit.name} com sucesso!</SmallText>
      <View>
        <StyledButtonComponent
          onPress={() => navigation.navigate("RegisterFruit")}
        >
          <TextButton>Voltar ao Início</TextButton>
        </StyledButtonComponent>
      </View>
    </Container>
  );
}