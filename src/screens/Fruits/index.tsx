import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container, Text, ViewText, Button, TextButton } from './styled'
import { useNavigation } from '@react-navigation/native';

export default function FruitsScreen() {
  const navigation = useNavigation()

  function handleNextPage() {
    navigation.navigate('RegistrarFrutas')
  }
  return (
    <Container>
      <ViewText>
        <Text>Cadastre sua primeira fruta</Text>
      </ViewText>
      <Button onPress={handleNextPage}>
          <Ionicons name='add' size={32} color={'#FFFFFF'} />
          <TextButton>Cadastrar Fruta</TextButton>
        </Button>
    </Container>
  )
}