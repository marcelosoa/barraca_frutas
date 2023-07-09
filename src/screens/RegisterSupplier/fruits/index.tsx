import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container, ViewName, InputFormView } from './styled';
import InputFormComponent from '../../../components/InputForm';
import ButtonComponent from '../../../components/Button';
import RouterComponent from '../../../components/Router';
import { StackNavigationProp } from '@react-navigation/stack';
import CheckBoxComponent from '../../../components/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { SupplierPropsState } from '../../../interface/SupplierInterface';
import { setFruits } from '../../../redux/reducers/suppliersReducer';
import { saveState } from '../../../storage/Storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

type StackParamList = {
  Home: undefined;
  Cadastro: undefined;
};

type RouterComponentProps = {
  navigation: StackNavigationProp<StackParamList, any>;
};

export default function RegisterFruitSupplierScreen({ navigation }: RouterComponentProps) {
  // const fruitsSelected: Option[] = [
  //   { id: 'banana', label: 'Banana' },
  //   { id: 'maca', label: 'Maçã' },
  //   { id: 'laranja', label: 'Laranja' },
  //   { id: 'abacaxi', label: 'Abacaxi' },
  //   { id: 'morango', label: 'Morango' },
  // ];

  const dispatch = useDispatch();

  const { fruits } = useSelector((state: { supplier: SupplierPropsState }) => state.supplier);

  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);

  // const handleFruitChange = (selectedOptions: Option[]) => {
  //   const selectedFruitIds = selectedOptions.map((option) => option.id);
  //   setSelectedFruits(selectedFruitIds);
  //   dispatch(setFruits(selectedFruitIds));
  // };

  const handleCadastroFornecedor = async () => {
    const supplierData = { fruits: selectedFruits };
    try {
      await AsyncStorage.setItem('supplierData', JSON.stringify(supplierData));
      dispatch(setFruits([])); // Reset the selected fruits state
      setSelectedFruits([]); // Reset the selected fruits state
      navigation.navigate('Success');
    } catch (error) {
      console.log('Error saving supplier data:', error);
    }
  };

  return (
    <Container>
      <ViewName>
        <Ionicons 
          name="close"
          size={32}
          color={'#930000'}
        />
      </ViewName>
      <RouterComponent navigation={navigation}/>
      <InputFormView>
        <InputFormComponent
          label="Escolha as frutas que esse fornecedor nos fornece"
          value={selectedFruits.join(', ')}
        />
        <ButtonComponent 
          onPress={handleCadastroFornecedor}
          label="Cadastrar Fornecedor"
        />
      </InputFormView>
    </Container>
  );
}
