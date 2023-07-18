import React from "react";
import {
  Container,
  SmallText,
  Text,
  TextView,
  ViewIcon,
  ImageView,
  View,
  TextButton,
  StyledButtonComponent,
} from "./styled";
import { useNavigation, useRoute } from "@react-navigation/native";
import { propsStack } from "../../../interface/routerinterface";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "react-native";

export default function RegisterSuccessScreen() {
  const navigation = useNavigation<propsStack>();
  const route = useRoute();
  const supplier = route.params?.supplier;
  return (
    <Container>
      <ViewIcon>
        <Ionicons
          name="close"
          size={32}
          onPress={() => navigation.navigate("Inicio")}
        />
      </ViewIcon>
      <ImageView>
        <Image source={require("../../../../assets/images/confirmed.png")} />
      </ImageView>
      <TextView>
        <Text>Fornecedor Cadastrado</Text>
        <SmallText>Você cadastrou o fornecedor {supplier.name} com sucesso!</SmallText>
      </TextView>
      <View>
        <StyledButtonComponent
          onPress={() => navigation.navigate('Inicio')}
        >
          <TextButton>Voltar ao início</TextButton>
        </StyledButtonComponent>
      </View>
    </Container>
  );
}