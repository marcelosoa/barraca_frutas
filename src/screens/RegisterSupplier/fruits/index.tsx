import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container, ViewName, InputFormView } from './styled';
import InputFormComponent from '../../../components/InputForm';
import ButtonComponent from '../../../components/Button';
import RouterComponent from '../../../components/Router';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import { Supplier } from '../../../interface/SupplierInterface';
import { addSupplier } from '../../../redux/reducers/suppliersReducer';
import { useNavigation } from '@react-navigation/native';

type StackParamList = {
  Home: undefined;
  Cadastro: undefined;
};

type RouterComponentProps = {
  navigation: StackNavigationProp<StackParamList, any>;
};

export default function RegisterFruitSupplierScreen({ route }) {
  const navigation = useNavigation()
  const dispatch = useDispatch();
  const { name, cpf, phone } = route.params;
  console.log(name)
  console.log(cpf)
  console.log(phone)
  
  const handleSaveDatas = () => {
    const newSupplier: Supplier = {
      id: 0,
      name: name,
      cpf: cpf,
      phone: phone
    };
    dispatch(addSupplier(newSupplier));
    navigation.navigate('Success');
  };

  return (
    <Container>
      <ViewName>
        <Ionicons name="close" size={32} color={'#930000'} />
      </ViewName>
      <RouterComponent navigation={navigation} />
      <InputFormView>
        <InputFormComponent label="Escolha as frutas que esse fornecedor nos fornece" value="Morae" />
        <ButtonComponent onPress={handleSaveDatas} label="Cadastrar Fornecedor" />
      </InputFormView>
    </Container>
  );
}
