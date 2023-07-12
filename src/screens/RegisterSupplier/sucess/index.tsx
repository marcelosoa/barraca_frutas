import React from 'react';
import { Container, SmallText, Text, TextView } from './styled';
import ButtonComponent from '../../../components/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { propsStack } from '../../../interface/routerinterface';

type StackParamList = {
  Home: undefined;
  Cadastro: undefined;
};

type RouterComponentProps = {
  navigation: StackNavigationProp<StackParamList, any>;
};

export default function RegisterSuccessScreen() {
  const navigation = useNavigation<propsStack>()
  const params = useRoute()
  return (
    <Container>
      <Image source={require('../../../../assets/images/confirmed.png')} />
      <TextView>
        <Text>Fornecedor Cadastrado</Text>
        <SmallText>Você cadastrou o fornecedor {params?.params?.name} com sucesso!</SmallText>
      </TextView>
      <ButtonComponent
        label="Voltar ao início"
        onPress={() => navigation.navigate('Inicio')}
      />
    </Container>
  );
}
