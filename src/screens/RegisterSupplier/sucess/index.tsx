import React from 'react';
import { Container, SmallText, Text, TextView } from './styled';
import ButtonComponent from '../../../components/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image } from 'react-native';

type StackParamList = {
  Home: undefined;
  Cadastro: undefined;
};

type RouterComponentProps = {
  navigation: StackNavigationProp<StackParamList, any>;
};

export default function RegisterSuccessScreen({
  navigation,
}: RouterComponentProps) {
  return (
    <Container>
      <Image source={require('../../../../assets/images/confirmed.png')} />
      <TextView>
        <Text>Fornecedor Cadastrado</Text>
        <SmallText>Você cadastrou o fornecedor com sucesso!</SmallText>
      </TextView>
      <ButtonComponent
        label="Voltar ao início"
        onPress={() => navigation.navigate('Inicio')}
      />
    </Container>
  );
}
