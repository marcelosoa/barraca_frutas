import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container, Text, ViewText, Button, TextButton } from './styled'
import { useNavigation } from '@react-navigation/native';
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

  function handleNextPage() {
    navigation.navigate('RegistrarFrutas')
  }
  return (
    <Container>
      <ViewText>
        <Text>Cadastre sua primeira fruta</Text>
      </ViewText>
      <Button onPress={handleNextPage}>
          <Ionicons name='add' size={32} color={'#FFFFFF'} onPress={() => navigation.navigate('RegistrarFrutas')}/>
          <TextButton>Cadastrar Fruta</TextButton>
        </Button>
    </Container>
  )
}