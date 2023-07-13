import React, { useEffect, useMemo, useState } from "react";
import {
  Container,
  Text,
  Button,
  TextButton,
  ViewText,
  SupplierName,
  ContainerSupplier,
  NewSupplierButton,
  ContentContainer,
} from "./styled";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import SearchComponent from "../../components/InputSearch";
import CardComponent from "../../components/Card";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../interface/routerinterface";
import {
  fetchSuppliers,
  searchSupplier,
} from "../../redux/reducers/suppliersReducer";

export default function SuppliersScreen() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const navigation = useNavigation<propsStack>();
  const suppliers = useSelector((state: RootState) => state.supplier.suppliers);

  useEffect(() => {
    dispatch(fetchSuppliers());
  }, [dispatch]);

  return (
    <>
      {suppliers?.length > 0 ? (
        <>
          <ContainerSupplier>
            <SearchComponent
              value={searchTerm}
              onChangeText={setSearchTerm}
              label="Pesquisar Fornecedor"
            />
            {suppliers.map((supplier) => (
              <ContentContainer
                key={supplier.id}
                onPress={() => navigation.navigate("Supplier")}
              >
                <CardComponent
                  key={supplier.id}
                  cpf={supplier.cpf}
                  name={supplier.name}
                  phone={supplier.phone}
                />
              </ContentContainer>
            ))}
          </ContainerSupplier>
          <NewSupplierButton onPress={() => navigation.navigate("App")}>
            <SupplierName>
              <Ionicons name="add" size={32} />
            </SupplierName>
          </NewSupplierButton>
        </>
      ) : (
        <Container>
          <ViewText>
            <Text> Cadastre seu primeiro fornecedor </Text>
          </ViewText>
          <Button onPress={() => navigation.navigate("App")}>
            <Ionicons name="add" size={32} color={"#FFFFFF"} />
            <TextButton>Cadastrar Fornecedor</TextButton>
          </Button>
        </Container>
      )}
    </>
  );
}
