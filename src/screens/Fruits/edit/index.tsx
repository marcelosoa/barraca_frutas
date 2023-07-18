import React, { useState, useEffect } from "react";
import { Container, Text, ViewContent, FruitView, TextButton, StyledButtonComponent } from "./styled";
import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { propsStack } from "../../../interface/routerinterface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Fruit, updateFruit } from "../../../redux/reducers/fruitsReducer";
import FormGroupComponent from "../../../components/FormGroup";
import { Picker } from "@react-native-picker/picker";
import LoaderComponent from "../../../components/Loader";

export default function EditFruitScreen() {
  const navigation = useNavigation<propsStack>();
  const dispatch = useDispatch();
  const route = useRoute()
  const fruit = route.params?.fruit
  const fruits = useSelector((state: RootState) => state.fruits.fruits);
  const suppliers = useSelector((state: RootState) => state.supplier.suppliers);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fruitData, setFruitData] = useState<Fruit>({
    id: "",
    name: "",
    price: "",
    quantity: '',
    supplier: "",
  });

  useEffect(() => {
    setFruitData(fruit)
  }, [fruits])


  const handleUpdateFruit = () => {
    setIsLoading(true);
    const updatedFruit: Fruit = {
      ...fruitData,
    };

    setTimeout(() => {
      dispatch(updateFruit(updatedFruit)); 
      navigation.navigate("SuccessEditFruitScreen", { fruit: fruitData });
    }, 2000);
  };

  return (
    <Container>
      <ViewContent>
        <Text>Editar Fruta</Text>
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
          setFruitData({ ...fruitData, name })
        }
      />
      <FormGroupComponent
        name="cash-outline"
        size={32}
        placeholder="Preço do Kilo"
        value={fruitData.price}
        onChangeText={(price: string) =>
          setFruitData({ ...fruitData, price })
        }
      />
      <FormGroupComponent
        name="server-outline"
        size={32}
        placeholder="Quantidade no estoque"
        value={fruitData.quantity.toString()}
        onChangeText={(quantity: string) =>
          setFruitData({ ...fruitData, quantity })
        }
      />
      <FruitView style={styled.cardPicker}>
        <Ionicons name="people-outline" size={32} />
        <Picker
          selectedValue={fruitData.supplier}
          onValueChange={(supplier: string) =>
            setFruitData({ ...fruitData, supplier })
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
      <StyledButtonComponent
          onPress={handleUpdateFruit}
        >
          <TextButton>
            Atualizar Fruta
          </TextButton>
        </StyledButtonComponent>
      {isLoading && <LoaderComponent />}
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
