import React from 'react'
import { Container, SmallText, Text } from './styled'
import ButtonComponent from '../../../components/Button'
import { StackNavigationProp } from '@react-navigation/stack';

type StackParamList = {
  Home: undefined;
  Cadastro: undefined;
};

type RouterComponentProps = {
  navigation: StackNavigationProp<StackParamList, any>;
};

export default function RegisterSuccessScreen ({ navigation }: RouterComponentProps) {
  return (
    <Container>
      <Text>Fornecedor Cadastrado</Text>
      <SmallText>Você cadastrou o fornecedor:  com sucesso!</SmallText>
      <ButtonComponent 
        label='Voltar ao início'
        onPress={() => navigation.navigate('Inicio')}
        />
    </Container>
  )
}