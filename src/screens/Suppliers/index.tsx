import React, { useEffect } from "react";
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
import { StackNavigationProp } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import SearchComponent from "../../components/InputSearch";
import CardComponent from "../../components/Card";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../interface/routerinterface";
import { fetchSuppliers } from "../../redux/reducers/suppliersReducer";

export default function SuppliersScreen() {
  const dispatch = useDispatch()
  const navigation = useNavigation<propsStack>();
  const suppliers = useSelector((state: RootState) => state.supplier.suppliers);
  console.log('FORNECEDORES', suppliers)

  useEffect(() => {
    dispatch(fetchSuppliers())
  }, [dispatch])

  return (
    <>
      {suppliers?.length > 0 ? (
        <>
          <ContainerSupplier>
            <SearchComponent label="Pesquisar Fornecedor" />
            {suppliers.map((supplier) => (
              <ContentContainer
                key={supplier.id}
                onPress={() =>
                  navigation.navigate("Supplier", {
                    supplierId: supplier.id,
                  })
                }
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
          <NewSupplierButton onPress={() => navigation.navigate("Nome")}>
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
          <Button onPress={() => navigation.navigate("Nome")}>
            <Ionicons name="add" size={32} color={"#FFFFFF"} />
            <TextButton>Cadastrar Fornecedor</TextButton>
          </Button>
        </Container>
      )}
    </>
  );
}
