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
import { propsStack } from "../../../interface/routerinterface";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function RegisterSuccessScreen() {
  const navigation = useNavigation<propsStack>();
  const route = useRoute()
  const supplier = route.params?.supplier
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
      <SmallText>Você cadastrou o fornecedor {supplier.name} com sucesso!</SmallText>
      <View>
        <StyledButtonComponent
          label="Voltar ao início"
          onPress={() => navigation.navigate("Inicio")}
        >
          <TextButton>Voltar ao Início</TextButton>
        </StyledButtonComponent>
      </View>
    </Container>
  );
}