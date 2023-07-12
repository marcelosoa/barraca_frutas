import React from 'react';
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
  const dispatch = useDispatch();
  
  const handleSaveDatas = () => {
    const newSupplier: Supplier = {
      id: '',
      name: params?.params?.name,
      cpf: params?.params?.cpf,
      phone: params?.params?.phone
    };
    dispatch(addSupplier(newSupplier));
    navigation.navigate('Success', {
      name: params?.params?.name,
    });
  };

  return (
    <Container>
      <ViewName>
        <Ionicons name="close" size={32} color={'#930000'} />
      </ViewName>
      <BreadCrumbsComponent navigation={navigation}/>
      <InputFormView>
        <InputFormComponent label="Escolha as frutas que esse fornecedor nos fornece" value="Morae" />
        <ButtonComponent onPress={handleSaveDatas} label="Cadastrar Fornecedor" />
      </InputFormView>
    </Container>
  );
}
