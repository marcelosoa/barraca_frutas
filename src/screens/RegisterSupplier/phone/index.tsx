import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container, ViewName, InputFormView } from './styled';
import InputFormComponent from '../../../components/InputForm';
import ButtonComponent from '../../../components/Button';
import BreadCrumbsComponent from '../../../components/Router';
import isValidPhone from '../../../utils/IsValidPhone'
import useErrors from '../../../utils/hooks/useErros'
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { addNumber } from '../../../redux/reducers/suppliersReducer';
import { propsStack } from '../../../interface/routerinterface';

type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
};

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp
}


export default function RegisterPhoneSupplierScreen() { 
  const navigation = useNavigation<propsStack>()
  const params = useRoute()
  const dispatch = useDispatch()
  const [phoneNumber, setPhoneNumber] = useState('');
  const { setError, removeError, getErrorMessageByFieldName } = useErrors();

  const handleNameChange = (value) => {
    setPhoneNumber(value);
    dispatch(addNumber(value));
  };

  return (
    <Container>
      <ViewName>
        <Ionicons name='close' size={32} color={'#930000'} />
      </ViewName>
      <BreadCrumbsComponent navigation={navigation}/>
      <InputFormView>
        <InputFormComponent
          errors={getErrorMessageByFieldName('phone')}
          limitCaracter={11}
          label='Digite o número de telefone do colaborador'
          placeholder='(00) 00000-0000'
          onChange={handleNameChange}
          value={phoneNumber}
        />
        <ButtonComponent 
          onPress={() => navigation.navigate('Frutas', {
            name: params?.params?.name,
            cpf: params?.params?.cpf,
            phone:phoneNumber
          })} 
          label='Próximo' 
        />
      </InputFormView>
    </Container>
  );
}
