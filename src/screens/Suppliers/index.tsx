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
import { fetchSuppliers } from "../../redux/reducers/suppliersReducer";
import { Platform, View } from "react-native";
import { useTheme } from "styled-components";

export default function SuppliersScreen() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const navigation = useNavigation<propsStack>();
  const suppliers = useSelector((state: RootState) => state.supplier.suppliers);
  const theme = useTheme()

  useEffect(() => {
    dispatch(fetchSuppliers());
  }, [dispatch]);

  const filteredSuppliers = useMemo(
    () =>
      suppliers.filter((supplier) =>
        supplier.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [suppliers, searchTerm]
  );

  const handleSearch = (text: string) => {
    setSearchTerm(text);
  };

  const isIOS = Platform.OS === "ios";

  return (
    <>
      {suppliers?.length > 0 ? (
        <>
          <ContainerSupplier>
            <SearchComponent
              value={searchTerm}
              onChangeText={handleSearch}
              label="Pesquisar Fornecedor"
            />
            {filteredSuppliers.length > 0 ? (
              filteredSuppliers.map((supplier) => (
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
              ))
            ) : (
              <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 16, }}>
                <Ionicons name="sad-outline" size={48} color={theme.colors.primary}/>
                <Text>Não foi encontrado nenhum fornecedor com esse nome. Tente novamente.</Text>
              </View>
            )}
          </ContainerSupplier>
          <NewSupplierButton onPress={() => navigation.navigate("App")}>
            <SupplierName>
              <Ionicons name={isIOS ? "add-circle" : "add"} size={32} />
            </SupplierName>
          </NewSupplierButton>
        </>
      ) : (
        <Container>
          <ViewText>
            <Text> Cadastre seu primeiro fornecedor </Text>
          </ViewText>
          <Button onPress={() => navigation.navigate("App")}>
            <Ionicons
              name={isIOS ? "add-circle" : "add"}
              size={32}
              color={"#FFFFFF"}
            />
            <TextButton>Cadastrar Fornecedor</TextButton>
          </Button>
        </Container>
      )}
    </>
  );
}
