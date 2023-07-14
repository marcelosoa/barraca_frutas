import React, { useState } from "react";
import {
  Container,
  Text,
  ViewContent,
  FruitView,
  ButtonContainer,
} from "./styled";
import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import ButtonComponent from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../interface/routerinterface";
import { useTheme } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addFruit } from "../../redux/reducers/fruitsReducer";
import { RootState } from "../../redux/store";
import { v4 as uuidv4 } from "uuid";
import { Picker } from "@react-native-picker/picker";
import FormGroupComponent from "../../components/FormGroup";

export default function RegisterFruitScreen() {
  const navigation = useNavigation<propsStack>();
  const theme = useTheme();
  const dispatch = useDispatch();
  const suppliers = useSelector((state: RootState) => state.supplier.suppliers);
  const [fruitData, setFruitData] = useState({
    name: "",
    price: "",
    quantity: "",
    supplier: "",
    id: "",
  });

  return (
    <Container>
      <ViewContent>
        <Text>Cadastrar Fruta</Text>
        <Ionicons
          name="close"
          size={38}
          onPress={() => navigation.navigate("RegisterFruit")}
        />
      </ViewContent>
      <FormGroupComponent
        name="nutrition-outline"
        size={32}
        placeholder="Nome da Fruta"
        value={fruitData.name}
        onChangeText={(name: string) =>
          setFruitData({ ...fruitData, name: name })
        }
      />
      <FormGroupComponent
        name="cash-outline"
        size={32}
        placeholder="Preço do Kilo"
        value={fruitData.price}
        onChangeText={(price: string) =>
          setFruitData({ ...fruitData, price: price })
        }
      />
      <FormGroupComponent
        name="server-outline"
        size={32}
        placeholder="Quantidade no estoque"
        value={fruitData.quantity}
        onChangeText={(quantity: string) =>
          setFruitData({ ...fruitData, quantity: quantity })
        }
      />
      <FruitView style={styled.cardPicker}>
        <Ionicons name="people-outline" size={32} />
        <Picker
          selectedValue={fruitData.supplier}
          onValueChange={(supplier: string) =>
            setFruitData({ ...fruitData, supplier: supplier })
          }
          style={styled.picker}
        >
          <Picker.Item
            label="Fornecedor"
            value=""
            style={{
              flex: 1,
              fontSize: 16,
              color: "#6C7072",
            }}
          />
          {suppliers.map((supplier) => (
            <Picker.Item
              key={supplier.id}
              label={supplier.name}
              value={supplier.name}
            />
          ))}
        </Picker>
      </FruitView>
      <ButtonContainer>
        <ButtonComponent
          label="Cadastrar Fruta"
          onPress={() => {
            fruitData.id = uuidv4();
            dispatch(addFruit(fruitData));
            navigation.navigate("SuccessFruit");
          }}
        />
      </ButtonContainer>
    </Container>
  );
}

const styled = StyleSheet.create({
  cardPicker: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 8,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  icon: {
    gap: 16,
  },
  picker: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    gap: 16,
  },
});
