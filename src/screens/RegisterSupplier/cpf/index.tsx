import React, { useState } from 'react';
// Style
import { Container, ViewName, InputFormView } from './styled';
// Props
import { StackNavigationProp } from '@react-navigation/stack';
// Components
import InputFormComponent from '../../../components/InputForm';
import ButtonComponent from '../../../components/Button';
import RouterComponent from '../../../components/Router';
// Utils
import Ionicons from '@expo/vector-icons/Ionicons';
import isValidCPF from '../../../utils/isValidCPF';
// Hooks
import useErrors from '../../../utils/hooks/useErros';
import { useDispatch } from 'react-redux';

// Redux
import { addCPF } from '../../../redux/reducers/suppliersReducer';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Telefone: undefined
};

type RouterProps = RouteProp<RootStackParamList, 'Home'>;
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  route: RouterProps;
  navigation: HomeScreenNavigationProp
}

export default function RegisterCPFSupplierScreen({ navigation, route }: Props) {
  const { name } = route.params;
  const dispatch = useDispatch();
  const [cpf, setCPF] = useState('');
  const { setError, removeError, getErrorMessageByFieldName } = useErrors();

  const handleNameChange = (value) => {
    setCPF(value);
    dispatch(addCPF(value));
  };

  return (
    <Container>
      <ViewName>
        <Ionicons name='close' size={32} color={'#930000'} />
      </ViewName>
      <RouterComponent navigation={navigation}/>
      <InputFormView>
        <InputFormComponent
          errors={getErrorMessageByFieldName('cpf')}
          limitCaracter={11}
          label='Digite o CPF do colaborador'
          onChange={handleNameChange}
          placeholder='000.000.000-00'
          value={cpf}
        />
        <ButtonComponent 
          onPress={() => navigation.navigate('Telefone', {
            name: name,
            cpf: cpf
          })} 
          label='Próximo' 
        />
      </InputFormView>
    </Container>
  );
}
