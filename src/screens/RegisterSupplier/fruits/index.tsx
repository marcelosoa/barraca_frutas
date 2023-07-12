import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container, ViewName, InputFormView } from './styled';
import InputFormComponent from '../../../components/InputForm';
import ButtonComponent from '../../../components/Button';
import BreadCrumbsComponent from '../../../components/Router';
import { useDispatch } from 'react-redux';
import { Supplier } from '../../../interface/SupplierInterface';
import { addSupplier } from '../../../redux/reducers/suppliersReducer';
import { useNavigation, useRoute } from '@react-navigation/native';
import { propsStack } from '../../../interface/routerinterface';

export default function RegisterFruitSupplierScreen() {
  const navigation = useNavigation<propsStack>()
  const params = useRoute()
  console.log(params)
  const dispatch = useDispatch();

  const fruitsTest = [
    { id: 1, nome: 'banana' },
    { id: 2, nome: 'maça' },
    { id: 3, nome: 'ameixa' },
    { id: 4, nome: 'banana' },
    { id: 5, nome: 'banana' },
    { id: 6, nome: 'banana' },
    { id: 7, nome: 'banana' },
    { id: 8, nome: 'banana' },

  ]

  const [supplierData, setSupplierData] = useState({
    id: '',
    name: params?.params?.name,
    cpf: params?.params?.cpf,
    phone: params?.params?.phone,
    fruits: fruitsTest.map((fruit) => fruit.nome)
  })
  
  // const handleSaveDatas = () => {
  //   const newSupplier: Supplier = {
  //     id: '',
  //     name: params?.params?.name,
  //     cpf: params?.params?.cpf,
  //     phone: params?.params?.phone,
  //     fruits: fruitsTest.map((fruit) => fruit.nome)
  //   };
  //   dispatch(addSupplier(newSupplier));
  //   navigation.navigate('Success', {
  //     name: params?.params?.name,
  //   });
  // };

  return (
    <Container>
      <ViewName>
        <Ionicons name="close" size={32} color={'#930000'} />
      </ViewName>
      <BreadCrumbsComponent/>
      <InputFormView>
        <InputFormComponent label="Escolha as frutas que esse fornecedor nos fornece" value="Morae" />
        <ButtonComponent onPress={() => {
          dispatch(addSupplier(supplierData));
          navigation.navigate('Success')
        }} label="Cadastrar Fornecedor" />
      </InputFormView>
    </Container>
  );
}
