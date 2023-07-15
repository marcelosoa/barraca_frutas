import React, { useState, useEffect } from "react";
import { Container, Text, ViewContent, FruitView } from "./styled";
import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../interface/routerinterface";
import ButtonComponent from "../../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Fruit, updateFruit } from "../../../redux/reducers/fruitsReducer";
import { v4 as uuidv4 } from "uuid";
import FormGroupComponent from "../../../components/FormGroup";
import { Picker } from "@react-native-picker/picker";

export default function EditFruitScreen() {
  const navigation = useNavigation<propsStack>();
  const dispatch = useDispatch();
  const fruits = useSelector((state: RootState) => state.fruits.fruits);
  const suppliers = useSelector((state: RootState) => state.supplier.suppliers);
  const [fruitData, setFruitData] = useState<Fruit>({
    id: "",
    name: "",
    price: "",
    quantity: 0,
    supplier: "",
  });

  useEffect(() => { 

    // Encontre a fruta correspondente na lista de frutas
    const fruitId = fruits.find((fruit) => fruit.id === fruit.id)

    if (fruitId) {
      setFruitData(fruitId);
    }
  }, [fruits, navigation]);

  

  const handleUpdateFruit = () => {
    const updatedFruit: Fruit = {
      ...fruitData,
      id: uuidv4(), // Atualize o ID da fruta (opcional)
    };
    dispatch(updateFruit(updatedFruit)); // Despache a ação para atualizar a fruta
    navigation.navigate("SuccessFruit");
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
        value={fruitData.quantity}
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
      <ButtonComponent
        label="Atualizar Fruta"
        onPress={handleUpdateFruit}
      />
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
