import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container, ViewName, InputFormView } from './styled';
import InputFormComponent from '../../../components/InputForm';
import ButtonComponent from '../../../components/Button';
import RouterComponent from '../../../components/Router';
import isValidPhone from '../../../utils/validPhone/IsValidPhone';
import useErrors from '../../../utils/hooks/useErros';
import { StackNavigationProp } from '@react-navigation/stack';
import { addNumber } from '../../../redux/reducers/suppliersReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RouteProp, useNavigation } from '@react-navigation/native';

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


export default function RegisterPhoneSupplierScreen({ navigation, route }: Props) { 
  const { cpf, name } = route.params

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
      <RouterComponent navigation={navigation}/>
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
            name: name,
            cpf: cpf,
            phone: phoneNumber
          })} 
          label='Próximo' 
        />
      </InputFormView>
    </Container>
  );
}
