import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container, Text, ViewText, Button, TextButton } from './styled'
import { propsStack } from '../../interface/routerinterface';
import { useNavigation } from '@react-navigation/native';

export default function FruitsScreen() {
  const navigation = useNavigation<propsStack>()

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