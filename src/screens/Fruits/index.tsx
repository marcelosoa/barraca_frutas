import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container, Text, ViewText, Button, TextButton } from './styled'
import { StackNavigationProp } from '@react-navigation/stack';
type StackParamList = {
  Nome: undefined;
  Cadastro: undefined;
  Supplier: undefined
  Fornecedor: undefined
}

type RouterComponentProps = {
  navigation: StackNavigationProp<StackParamList, any>;
};

export default function FruitsScreen({ navigation }: RouterComponentProps) {

  return (
    <Container>
      <ViewText>
        <Text>Cadastre sua primeira fruta</Text>
      </ViewText>
      <Button onPress={() => navigation.navigate('RegistrarFrutas')}>
          <Ionicons name='add' size={32} color={'#FFFFFF'}/>
          <TextButton>Cadastrar Fruta</TextButton>
        </Button>
    </Container>
  )
}