import React from "react";
import {
  Container,
  SmallText,
  Text,
  TextView,
  ViewIcon,
  Image,
  View
} from "./styled";
import ButtonComponent from "../../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { propsStack } from "../../../interface/routerinterface";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from 'react-native'

export default function RegisterSuccessScreen() {
  const navigation = useNavigation<propsStack>();
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
        <Image source={require("../../../../assets/images/confirmed.png")} />
      </TextView>
      <Text>Fornecedor Cadastrado</Text>
      <SmallText>Você cadastrou o fornecedor com sucesso!</SmallText>
      <View>
        <ButtonComponent
          label="Voltar ao início"
          onPress={() => navigation.navigate("Inicio")}
        />
      </View>
    </Container>
  );
}

const styled = StyleSheet.create({
  

})