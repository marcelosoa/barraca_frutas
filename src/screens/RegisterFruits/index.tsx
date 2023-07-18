import React, { useState } from "react";
import {
  Container,
  Text,
  ViewContent,
  FruitView,
  StyledButtonComponent,
  TextButton,
} from "./styled";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../interface/routerinterface";
import { useDispatch, useSelector } from "react-redux";
import { addFruit } from "../../redux/reducers/fruitsReducer";
import { RootState } from "../../redux/store";
import { v4 as uuidv4 } from "uuid";
import { Picker } from "@react-native-picker/picker";
import FormGroupComponent from "../../components/FormGroup";
import LoaderComponent from "../../components/Loader";

export default function RegisterFruitScreen() {
  const navigation = useNavigation<propsStack>();
  const dispatch = useDispatch();
  const suppliers = useSelector((state: RootState) => state.supplier.suppliers);
  const [fruitData, setFruitData] = useState({
    name: "",
    price: "",
    quantity: "",
    supplier: "",
    id: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegisterFruit = () => {
    if (
      fruitData.name.trim() === "" ||
      fruitData.price.trim() === "" ||
      fruitData.quantity.trim() === "" ||
      fruitData.supplier.trim() === ""
    ) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    setIsLoading(true);
    fruitData.id = uuidv4();
    dispatch(addFruit(fruitData));
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("SuccessFruit", { fruit: fruitData });
    }, 2000);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
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
          selectedValue={fruitData.supplier || 'Fornecedor'}
          onValueChange={(supplier: string) =>
            setFruitData({ ...fruitData, supplier: supplier })
          }
          style={styled.picker}
          itemStyle={{
            flex: 1,
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: "500",
          }}
        >
          <Picker.Item
            label="Fornecedor"
            value=""
            style={{
              flex: 1,
              fontSize: 16,
              color: "#000",
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
      <StyledButtonComponent
          onPress={handleRegisterFruit}
        >
          <TextButton>Cadastrar Fruta</TextButton>
        </StyledButtonComponent>
      {error !== "" && <Text style={styled.errorText}>{error}</Text>}
      {isLoading && <LoaderComponent />}
    </Container>
    </KeyboardAvoidingView>
  );
}

const styled = StyleSheet.create({
  cardPicker: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 7,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  picker: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    gap: 16,
  },
  errorText: {
    color: "red",
    fontSize: 16,
    marginTop: 10,
  },
});
